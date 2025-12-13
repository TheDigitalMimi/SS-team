import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

// Initialize Stripe and Supabase clients
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

export const config = {
  api: { bodyParser: false },
};

async function getRawBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => { data += chunk; });
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Get the raw body and Stripe signature
    const rawBody = await getRawBody(req);
    const signature = req.headers['stripe-signature'];
    
    let event;
    
    try {
      // Verify the webhook signature
      event = stripe.webhooks.constructEvent(
        rawBody,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.error('Webhook signature verification failed:', err.message);
      return res.status(400).json({ message: `Webhook Error: ${err.message}` });
    }

    // Handle different event types
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutSessionCompleted(event.data.object);
        break;
      case 'customer.subscription.updated':
        await handleSubscriptionUpdated(event.data.object);
        break;
      case 'customer.subscription.deleted':
        await handleSubscriptionDeleted(event.data.object);
        break;
      case 'invoice.payment_succeeded':
        await handleInvoicePaymentSucceeded(event.data.object);
        break;
      case 'invoice.payment_failed':
        await handleInvoicePaymentFailed(event.data.object);
        break;
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    res.status(200).json({ received: true });
    
  } catch (error) {
    console.error('Webhook handler error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

// Example event handlers - customize based on your needs
async function handleCheckoutSessionCompleted(session) {
  console.log('Checkout session completed:', session.id);
  
  // Update user's subscription status in Supabase
  const { error } = await supabase
    .from('users')
    .update({
      stripe_customer_id: session.customer,
      subscription_status: 'active',
      current_period_end: new Date(session.current_period_end * 1000).toISOString(),
    })
    .eq('email', session.customer_email);

  if (error) {
    console.error('Error updating user:', error);
  }
}

async function handleSubscriptionUpdated(subscription) {
  console.log('Subscription updated:', subscription.id);
  
  const { error } = await supabase
    .from('users')
    .update({
      subscription_status: subscription.status,
      current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
    })
    .eq('stripe_customer_id', subscription.customer);

  if (error) {
    console.error('Error updating subscription:', error);
  }
}

async function handleSubscriptionDeleted(subscription) {
  console.log('Subscription deleted:', subscription.id);
  
  const { error } = await supabase
    .from('users')
    .update({
      subscription_status: 'canceled',
    })
    .eq('stripe_customer_id', subscription.customer);

  if (error) {
    console.error('Error updating canceled subscription:', error);
  }
}

async function handleInvoicePaymentSucceeded(invoice) {
  console.log('Payment succeeded for invoice:', invoice.id);
  // Add your logic here
}

async function handleInvoicePaymentFailed(invoice) {
  console.log('Payment failed for invoice:', invoice.id);
  
  const { error } = await supabase
    .from('users')
    .update({
      subscription_status: 'past_due',
    })
    .eq('stripe_customer_id', invoice.customer);

  if (error) {
    console.error('Error updating past due status:', error);
  }
}
