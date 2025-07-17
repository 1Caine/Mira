import Link from 'next/link';
import Mira from '../components/Mira';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Meet Mira</h1>
      <p className="text-lg md:text-xl mb-8">Your crypto genius assistant</p>

      <div className="space-y-4">
        <Link href="/market" className="block bg-mira text-black px-6 py-3 rounded-xl hover:scale-105 transition">📈 Market Insights</Link>
        <Link href="/learn" className="block bg-mira text-black px-6 py-3 rounded-xl hover:scale-105 transition">📘 Learn Crypto</Link>
        <Link href="/security" className="block bg-mira text-black px-6 py-3 rounded-xl hover:scale-105 transition">🔐 Security</Link>
        <Link href="/ask" className="block bg-mira text-black px-6 py-3 rounded-xl hover:scale-105 transition">💬 Ask Mira</Link>
      </div>

      <Mira />
    </div>
  );
}
