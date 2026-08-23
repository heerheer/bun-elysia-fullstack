import { useNavigate } from 'react-router-dom';

import { Button } from '@frontend/components/ui/button';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center gap-4 p-6 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-400">404</p>
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p className="text-slate-300">
        The route you opened does not exist. Check the URL or go back to the home page.
      </p>
      <Button onClick={() => navigate('/')}>Back to Home</Button>
    </main>
  );
}