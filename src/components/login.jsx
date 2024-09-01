import React, { useEffect, useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const url = "https://jsonplaceholder.typicode.com/users/";

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data: users } = await axios.get(url);
      const user = users.find(
        (user) => user.email === email && user.name === password
      );
      if (user) {
        const token = btoa(`${user.id}:${user.email}`);
        localStorage.setItem("token", token);
        window.location.href = "/inicio";
      } else {
        alert("Invalid email or password");
        window.location.href = "/";
      }
    } catch (e) {
      console.error(e);
      alert("Failed to login");
    }
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 px-8">
      <div className="mx-auto w-full max-w-sm ">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Login with us
        </h2>
      </div>

      <div className="mx-auto mt-10 w-full max-w-sm">
        <form method="POST" onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              for="email"
              className="block text-sm font-medium leading-6 text-gray-900 "
            >
              Email
            </label>
            <div class="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autocomplete="email"
                required
                class=" p-3 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></input>
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div class="text-sm">
                <a
                  href="#"
                  class="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div class="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autocomplete="current-password"
                required
                class="p-3 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></input>
            </div>

            <div className="mx-auto w-[6rem] mt-10 w-full text-center bg-">
              <button
                onSubmit={handleLogin}
                className="p-3 w-full rounded-xl border-solid border-[#6366f1] bg-[#6366f1] hover:bg-slate-400 ease-in duration-300"
              >
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
