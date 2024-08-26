"use client";

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {

  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const password = formData.get("password");

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      
      if (response.ok) {
        setHasError(false);
        router.push("/");
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }

    setIsLoading(false);
  }

  return (
    <section id="login" className="w-screen h-screen flex items-center justify-center">
      <div className="max-w-sm rounded border-2 border-indigo-300 p-4 shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="my-8 text-center">
            <h1 className="text-2xl font-bold"> Welcome to Isabelles Blog! </h1>
            {hasError ? <p className="text-red-900 text-sm"> Please try again. </p> : <p className="text-sm"> Please enter the password below. </p> }
          </div>

          <div className="grid gap-4">
            <label htmlFor="password" className="block text-sm font-bold">
              Password:
              <input className="block w-full p-2 border-2 border-gray-200 rounded-md text-sm shadow-sm focus:border-red-900" type="password" name="password" required />
            </label>
            <button className="block w-full p-2 rounded bg-indigo-600 text-white" type="submit" disabled={isLoading}> {isLoading ? 'Submitting...' : 'Submit'} </button>
          </div>
        </form>
      </div>
    </section>
  );
}
