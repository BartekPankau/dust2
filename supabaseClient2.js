import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dauinplosqiuedehgmbc.supabase.co/';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhdWlucGxvc3FpdWVkZWhnbWJjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNzM1NDYyNywiZXhwIjoyMDMyOTMwNjI3fQ.6isnueoPYsu6GFgZnuWcXsZp-o5B0IS0EfOX-cIEp24';

export const supabase = createClient(supabaseUrl, supabaseKey);