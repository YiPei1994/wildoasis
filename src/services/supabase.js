import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://zbxzxsfmhicrxyicaqzk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpieHp4c2ZtaGljcnh5aWNhcXprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAzODU5MDgsImV4cCI6MjAxNTk2MTkwOH0.bxoCdq4U_RfdqI7SIVTs6gY_IMxKSP1uwR1NwYLA-Nc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
