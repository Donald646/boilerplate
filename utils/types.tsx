import { Database } from "@/types_db";

// Declare global types
declare global {
  type UserProfile = Database["public"]["Tables"]["users"]["Row"]; // Define a global type for user profile
}

// Ensure this file is treated as a module
export {};