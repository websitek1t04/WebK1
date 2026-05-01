import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const SUPABASE_URL = 'https://onobehlvzacorxlcxqha.supabase.co'; // Thay bằng URL của thầy
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ub2JlaGx2emFjb3J4bGN4cWhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc2MjQ3MTYsImV4cCI6MjA5MzIwMDcxNn0.CBhZ_NI6tCR_m_gkQ4CAoGNG6IUEI-hpzdCIW7ftvVY';              // Thay bằng API Key của thầy

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);