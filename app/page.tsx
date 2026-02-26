import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-900 text-white flex flex-col items-center justify-center">
      <h1>Auto Insurance Platform</h1>
      <p>Welcome to my insurance website.</p>

      <Link href="/dashboard">
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Go to Dashboard</button>
      </Link>
    </div>
  );
}