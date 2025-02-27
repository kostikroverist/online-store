import { createClient } from "@supabase/supabase-js";
import { Product } from "../interface/interfaces";
const supabase = createClient(
  "https://lazqwtgppnczmqwsabll.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhenF3dGdwcG5jem1xd3NhYmxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyMjM2OTUsImV4cCI6MjA1NTc5OTY5NX0.DJkl4_YYwTbIOEeIhRAeC4PTkhsAUYGIo-b2ulUKtiw"
);

export const getAllProducts= async (): Promise<Product[]> => {
    try {
      const { data, error } = await supabase.from("products").select("*");
  
      if (error) throw error;
      
      return data ?? []; // Якщо `data` = null або undefined → повертаємо пустий масив
    } catch (err) {
      console.error("Error fetching goods:", err);
      return []; // Завжди повертаємо масив
    }
  };
