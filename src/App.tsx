import { useQuery } from '@tanstack/react-query';

import { Button } from '@frontend/components/ui/button';
import { api } from '@frontend/lib/eden';
import { useExampleStore } from '@frontend/store/example-store';

export default function App() {
  const increment = useExampleStore((state) => state.increment);
  const clicks = useExampleStore((state) => state.clicks);

  const helloQuery = useQuery({
    queryKey: ['hello'],
    queryFn: async () => {
      const { data, error } = await api.api.hello.get();
      if (error) {
        throw new Error(String(error.value ?? 'Failed to fetch hello'));
      }
      return data;
    },
    enabled: false
  });

  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center gap-6 p-6 text-center">
      <h1 className="text-2xl font-semibold">Bun + Elysia Fullstack Starter</h1>
      <p className="text-slate-300">Click the button to call the type-safe Elysia hello API.</p>
      <Button
        onClick={async () => {
          increment();
          await helloQuery.refetch();
        }}
      >
        Request backend ({clicks})
      </Button>

      {helloQuery.isFetching && <p>Loading…</p>}
      {helloQuery.error && (
        <p className="text-rose-300">{(helloQuery.error as Error).message}</p>
      )}
      {helloQuery.data && (
        <pre className="w-full overflow-auto rounded-md border border-slate-800 bg-slate-900 p-4 text-left text-sm">
          {JSON.stringify(helloQuery.data, null, 2)}
        </pre>
      )}
    </main>
  );
}
