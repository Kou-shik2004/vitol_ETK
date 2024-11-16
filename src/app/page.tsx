// src/app/page.tsx
import Quiz from '../components/Quiz';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <Quiz />
    </main>
  );
}