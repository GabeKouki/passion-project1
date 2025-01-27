import { supabase } from "./supabaseClient";


export const CreateAccount = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password
      
    })
  } catch (error) {
    console.log(error)
  }

}