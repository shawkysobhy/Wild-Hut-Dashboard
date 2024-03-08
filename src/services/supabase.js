import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://sgwbwnsuwhfnfevengay.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNnd2J3bnN1d2hmbmZldmVuZ2F5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIzMDc5MzYsImV4cCI6MjAxNzg4MzkzNn0.tKEIYbaEDz1ISKRtu03CDP4Hd6CEfua4lDg17aVsIe0';
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
