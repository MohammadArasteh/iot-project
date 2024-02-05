import { createClient } from "@supabase/supabase-js";
import { Database } from "./database.types";

// Create a single supabase client for interacting with your database
const supabase = createClient<Database>(
  "https://isemmgdeatphocbvqvjx.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzZW1tZ2RlYXRwaG9jYnZxdmp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUyNDU4MjAsImV4cCI6MjAyMDgyMTgyMH0._8edjAye7H7JCK_jrKpsV9K7vUfkK52m9wY8s4DQdX4"
);

export default supabase;
