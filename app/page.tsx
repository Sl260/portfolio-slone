export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 px-6">
      <h1 className="text-4xl font-bold mb-4">Bienvenue sur mon portfolio</h1>
      <p className="text-lg mb-8 text-center max-w-xl">
        Je suis développeuse web passionnée, spécialisée en Next.js, React et les technologies modernes du web.
      </p>

      <div className="flex space-x-6">
        <a
          href="https://github.com/Sl260"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/slone-ngambo-mouafo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          LinkedIn
        </a>

        <a
          href="/CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Mon CV
        </a>
      </div>
    </main>
  );
}
