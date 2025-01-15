import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://gtnpeyvfmqjtdiiazkvq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0bnBleXZmbXFqdGRpaWF6a3ZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY5NDczNDAsImV4cCI6MjA1MjUyMzM0MH0.REWumDyIsgCBAUbbn0oEd_kiX-V5TowAc26ADk8gRmU";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
