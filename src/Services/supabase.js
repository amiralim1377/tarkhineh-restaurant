import { createClient } from "@supabase/supabase-js";
import { supabaseUrl, supabaseKey } from "../../config.js";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
