import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

// Datos de tu proyecto Supabase
const SUPABASE_URL = 'https://rkwnmnsfnngjgcetjxkf.supabase.co';
const SUPABASE_KEY = 'sb_publishable__IM0TCudFN0QYMQLrJy5fg_fn8wSbms';

// Crear conexión
export const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);