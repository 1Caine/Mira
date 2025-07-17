import Mira from '../components/Mira';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">📘 Security</h1>
      <p>This is the content for this section of the website.</p>
      <Link href="/" className="text-mira underline mt-4 block">← Back Home</Link>
      <Mira />
    </div>
  );
}
