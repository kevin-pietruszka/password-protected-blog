"use client";

import { FormEvent } from 'react';

export default function LoginPage() {

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const password = formData.get("password");

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    console.log(response);
  }

  return (
    <section id="login" className="w-screen h-screen flex items-center justify-center">
      <div className="max-w-sm rounded border-2 border-indigo-300 p-4 shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="my-8 text-center">
            <h1 className="text-2xl font-bold"> Welcome to Isabelles Blog! </h1>
          </div>

          <div className="grid gap-4">
            <label htmlFor="password" className="block text-sm font-bold">
              Password:
              <input className="block w-full p-2 border-2 border-gray-200 rounded-md text-sm shadow-sm focus:border-red-900" type="password" name="password" required />
            </label>
            <button className="block w-full p-2 rounded bg-indigo-600 text-white" type="submit"> Submit </button>
          </div>
        </form>
      </div>
    </section>
  );
}
