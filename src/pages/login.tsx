import { useNavigate } from 'react-router-dom';

import { Button } from '@frontend/components/ui/button';

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center gap-6 p-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">Login</h1>
        <p className="text-slate-300">A simple form for route testing.</p>
      </div>

      <form className="space-y-4 rounded-xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg">
        <div className="space-y-2 text-left">
          <label htmlFor="email" className="block text-sm font-medium text-slate-200">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none transition-colors placeholder:text-slate-500 focus:border-slate-500"
          />
        </div>

        <div className="space-y-2 text-left">
          <label htmlFor="password" className="block text-sm font-medium text-slate-200">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none transition-colors placeholder:text-slate-500 focus:border-slate-500"
          />
        </div>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-200"
        >
          Sign in
        </button>
      </form>

      <div>
        <Button variant="outline" onClick={() => navigate('/')}>
          Back to Home
        </Button>
      </div>
    </main>
  );
}