import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vwvggxrhinorgqzikcdt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3dmdneHJoaW5vcmdxemlrY2R0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU0MDUxMjMsImV4cCI6MjAyMDk4MTEyM30.yZH_vaDYYKF6ujSWXhwLF-bcdRIyBxTxpoSF_htk38A";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
export { supabaseUrl };
