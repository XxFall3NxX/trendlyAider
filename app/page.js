import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-500">
          Welcome to Next.js + Tailwind CSS + Aider!
        </h1>
      </div>
    </main>
  );
}
