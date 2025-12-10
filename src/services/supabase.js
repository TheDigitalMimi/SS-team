import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  return { data, error };
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

export const getCurrentUser = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
};

export const createBusiness = async (userId, businessData) => {
  const { data, error } = await supabase
    .from('businesses')
    .insert([{
      user_id: userId,
      name: businessData.name,
      type: businessData.type,
      location: businessData.location,
      description: businessData.description,
      results: null,
    }])
    .select();
  return { data, error };
};

export const getUserBusinesses = async (userId) => {
  const { data, error } = await supabase
    .from('businesses')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });
  return { data, error };
};

export const updateBusinessResults = async (businessId, results) => {
  const { data, error } = await supabase
    .from('businesses')
    .update({ results, updated_at: new Date().toISOString() })
    .eq('id', businessId)
    .select();
  return { data, error };
};

export const deleteBusiness = async (businessId) => {
  const { error } = await supabase.from('businesses').delete().eq('id', businessId);
  return { error };
};
