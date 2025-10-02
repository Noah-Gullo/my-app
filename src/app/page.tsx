export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        🚀 Welcome to My First Next.js + Tailwind Page!
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        My name is Noah Gullo and I am a first year CS student.
      </p>
      <button className="px-6 py-3 bg-red-600 text-white rounded-lg shadow hover:bg-red transition">
        Hire Me!
      </button>
    </main>
  );
}