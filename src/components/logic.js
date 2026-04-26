import { supabase } from '../supabaseClient'; 

export const getProducts = async () => {
    const { data, error } = await supabase.from('products').select('*');
    if (error) throw error;
    return data;
};

export const addProduct = async (product) => {
    const { data, error } = await supabase.from('products').insert([product]).select();
    if (error) throw error;
    return data;
};

export const updateProduct = async (id, updates) => {
    const { data, error } = await supabase.from('products').update(updates).eq('id', id).select();
    if (error) throw error;
    return data;
};

export const deleteProduct = async (id) => {
    const { error } = await supabase.from('products').delete().eq('id', id);
    if (error) throw error;
};

export const registerUser = async (email, password, fullName, address) => {
    const { data, error } = await supabase.auth.signUp({
        email, password, options: { data: { full_name: fullName, shipping_address: address } }
    });
    if (error) throw error;
    return data;
};

export const loginUser = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data;
};

export const createOrder = async (userId, cartItems, total) => {
    const { data, error } = await supabase.from('orders').insert([
        { user_id: userId, items: cartItems, total_price: total, status: 'Processing' }
    ]);
    if (error) throw error;
    return data;
};

export const getUserOrders = async (userId) => {
    const { data, error } = await supabase.from('orders').select('*').eq('user_id', userId).order('created_at', { ascending: false });
    if (error) throw error;
    return data;
};