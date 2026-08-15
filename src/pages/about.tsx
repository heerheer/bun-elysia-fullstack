import { useNavigate } from 'react-router-dom';

import { Button } from '@frontend/components/ui/button';

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center gap-4 p-6">
      <h1 className="text-3xl font-semibold">About</h1>
      <p className="text-slate-300">
        This is a small test page for verifying client-side routing in the Bun + Elysia starter.
      </p>
      <p className="text-slate-400">
        Use this route to confirm navigation works without a full page reload.
      </p>
      <div>
        <Button variant="outline" onClick={() => navigate('/')}>
          Back to Home
        </Button>
      </div>
    </main>
  );
}