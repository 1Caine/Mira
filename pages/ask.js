import Mira from '../components/Mira'; // ✅ default import
import Link from 'next/link';

export default function Ask() {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">💬 Ask Mira</h1>
      <p>This is where you’ll soon be able to chat with Mira!</p>
      <Link href="/" className="text-mira underline mt-4 block">← Back Home</Link>
      <Mira />
    </div>
  );
}
