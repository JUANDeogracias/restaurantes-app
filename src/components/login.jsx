import React from "react";

function Login() {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 px-8">
      <div className="mx-auto w-full max-w-sm ">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Login with us
        </h2>
      </div>

      <div className="mx-auto mt-10 w-full max-w-sm">
        <form className="space-y-4" method="POST">
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
                autocomplete="current-password"
                required
                class="p-3 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></input>
            </div>

            <div className="mx-auto w-[6rem] mt-10 w-full text-center bg-">
              <button className="p-3 w-full rounded-xl border-solid border-[#6366f1] bg-[#6366f1] hover:bg-slate-400 ease-in duration-300">
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
