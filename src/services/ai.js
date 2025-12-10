const DEEPSEEK_API_KEY = import.meta.env.VITE_DEEPSEEK_API_KEY;
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const buildBusinessPrompt = (firstName, businessType, location, businessIdea) => {
  const locationContext = (businessType === 'physical' || businessType === 'both') && location
    ? `The business is located in ${location}, so all market research, competition analysis, and local strategies should be specific to this area.`
    : '';

  const productSalesContext = businessIdea.toLowerCase().includes('sell') ||
    businessIdea.toLowerCase().includes('product') ||
    businessIdea.toLowerCase().includes('ecom') ||
    businessIdea.toLowerCase().includes('dropship') ||
    businessIdea.toLowerCase().includes('amazon') ||
    businessIdea.toLowerCase().includes('etsy') ||
    businessIdea.toLowerCase().includes('shop')
    ? `\n12. PRODUCT & SALES STRATEGY
   Analyze the business description and provide specific guidance based on the business model:
   
   FOR PHYSICAL PRODUCTS (if they mention physical items, ecommerce, dropshipping, retail, Amazon, etc.):
   - Recommended products to sell (specific items based on their niche)
   - Sourcing options (AliExpress/CJDropshipping for dropshipping, Alibaba for wholesale, local manufacturers, handmade creation)
   - Best platforms (Shopify, Etsy, Amazon FBA, eBay, TikTok Shop, own website - with pros/cons for their niche)
   - Profit margin breakdown (realistic numbers)
   - Inventory recommendations if applicable
   - Fulfillment strategy
   
   FOR DIGITAL PRODUCTS (if they mention templates, courses, ebooks, printables, digital downloads):
   - Product ideas specific to their niche
   - Creation tools (Canva, Teachable, Kajabi, etc.)
   - Best platforms (Payhip, Gumroad, Etsy, own website)
   - Pricing strategy for digital goods
   - Delivery/download systems
   - Passive income potential
   
   FOR SERVICES (if they mention coaching, consulting, freelancing, virtual assistance):
   - Service package recommendations (tiers, pricing)
   - Client acquisition strategies
   - Booking/scheduling systems (Calendly, Acuity)
   - Where to find clients (Upwork, Fiverr, LinkedIn, direct outreach)
   - Retainer vs. project-based models
   
   Only provide the section relevant to their specific business model.`
    : '';

  return `You are the complete SolvedSuite business team assembled to help ${firstName} launch their business. Respond as a cohesive team, not as individual AI assistants.

BUSINESS DETAILS:
- Founder: ${firstName}
- Business Type: ${businessType}
- ${locationContext}
- Business Idea: ${businessIdea}

YOUR TEAM ROLES:
1. Strategy Lead - Business plan & foundation
2. Brand Designer - Voice, identity, positioning
3. Market Researcher - SWOT, personas, keywords
4. Marketing Director - Multi-platform strategy
5. Creative Director - Ad creatives with AI-generated images
6. Content Manager - Social media by platform
7. Copywriter - Website copy & messaging

CRITICAL INSTRUCTIONS:
You must return a COMPLETE business package with these exact sections:

1. BUSINESS PLAN
   - 2-3 paragraph overview
   - Business model explanation
   - Revenue projections (realistic)
   - Growth roadmap

2. BRAND VOICE & IDENTITY
   - Brand personality (3-5 core traits)
   - Tone guidelines
   - Messaging framework
   - Visual identity suggestions

3. SWOT ANALYSIS
   - Strengths (internal advantages)
   - Weaknesses (internal challenges)
   - Opportunities (external possibilities)
   - Threats (external risks)

4. CUSTOMER PERSONA & REACH STRATEGY
   - Detailed ideal customer profile
   - Demographics & psychographics
   - Pain points & desires
   - WHERE to reach them (specific platforms, communities, locations)
   - HOW to reach them (content types, messaging angles)

5. SOCIAL MEDIA STRATEGY - BROKEN DOWN BY PLATFORM
   For each relevant platform, provide specific strategy:
   
   TIKTOK:
   - Content pillars (3-5 types of videos)
   - Posting frequency
   - Trending formats to use
   - Sample video ideas (10)
   
   INSTAGRAM:
   - Feed strategy
   - Stories strategy
   - Reels strategy
   - Sample post ideas (10)
   
   FACEBOOK:
   - Post types that work
   - Group strategy
   - Ad strategy
   - Sample posts (5)
   
   LINKEDIN: (Only if B2B or professional)
   - Posting approach
   - Article topics
   - Networking strategy
   - Sample posts (5)
   
   YOUTUBE:
   - Video series ideas
   - SEO strategy
   - Upload schedule
   - Sample video titles (10)
   
   TWITTER/X:
   - Tweet style & frequency
   - Thread topics
   - Engagement strategy
   - Sample tweets (10)

6. AD CREATIVES (5-7 complete ad sets)
   For EACH ad creative, provide:
   - Platform (Facebook, Instagram, LinkedIn, etc.)
   - IMAGE GENERATION PROMPT (detailed prompt for creating the actual image based on this specific business)
   - Headline (attention-grabbing)
   - Body copy (persuasive, clear)
   - CTA (specific action)
   - Where to use (Feed, Stories, etc.)
   - How to use (targeting, budget recommendations)
   - When to post (optimal timing)
   
   IMPORTANT: Images must be custom-generated based on the specific business. Provide detailed visual descriptions.

7. KEYWORD RESEARCH
   - Primary keywords (10-15)
   - Long-tail keywords (15-20)
   - Local keywords if applicable
   - Search volume estimates
   - Competition level
   - SEO strategy using these keywords

8. MARKETING STRATEGY
   - Customer acquisition channels (prioritized)
   - Launch strategy (first 30 days)
   - Budget allocation recommendations
   - Conversion funnel
   - Metrics to track

9. WEBSITE COPY
   - Homepage hero section
   - About section
   - Services/Products descriptions
   - FAQ section
   - Contact/CTA sections

10. PRICING STRATEGY
    - Pricing model recommendations
    - Tier structure if applicable
    - Competitor pricing analysis
    - Value justification

11. 30-DAY ACTION PLAN
    - Week 1 tasks (specific, actionable)
    - Week 2 tasks
    - Week 3 tasks
    - Week 4 tasks
    - Daily habits to establish
${productSalesContext}

FORMATTING RULES:
- Be specific, actionable, and realistic
- Assume limited budget and time
- Focus on momentum over perfection
- Make it feel like a real team created this together
- NO generic advice - everything should be tailored to ${firstName}'s specific business
- For ad images: Provide detailed visual descriptions for AI image generation
- Write naturally - this should read like a team of humans assembled this package

YOUR TONE: Professional but warm, like a trusted team who genuinely wants ${firstName} to succeed. Use "we" language ("we recommend", "our team suggests") to reinforce the team dynamic.

Now create the complete business strategy package for ${firstName}.`;
};

export const generateBusinessStrategy = async (firstName, businessType, location, businessIdea) => {
  const prompt = buildBusinessPrompt(firstName, businessType, location, businessIdea);

  // Try DeepSeek first
  try {
    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: 'You are the SolvedSuite business team - a group of expert strategists, marketers, and creatives working together to help entrepreneurs launch successful businesses.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 8000,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return {
        success: true,
        content: data.choices[0].message.content,
        provider: 'deepseek',
      };
    }
  } catch (error) {
    console.error('DeepSeek error:', error);
  }

  // Fallback to Gemini
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 8000,
        },
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return {
        success: true,
        content: data.candidates[0].content.parts[0].text,
        provider: 'gemini',
      };
    }
  } catch (error) {
    console.error('Gemini error:', error);
  }

  return {
    success: false,
    error: 'Both AI services are currently unavailable. Please try again in a moment.',
  };
};
