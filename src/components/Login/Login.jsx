import React from "react";
import { supabase } from "../../utils/supabaseClient";

const Login = () => {

  const fetchSession = async () => {
    const { data, error } = await supabase.auth.getSession();
    console.log(data)
  };
  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: "gabekouki02@gmail.com",
      password: "Hebejamin2003!",
      captchaToken: '123',
    });

    console.log(data);
    console.log(error);
  };
  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={fetchSession}>Test me</button>
    </div>
  )
};

export default Login;