export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-5 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-gray-400 font-mono">
          Shshank Kumar · AIT Pune · IT · <span className="text-accent">{year}</span>
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-600">Built with Next.js, Tailwind &amp; the matrix rain 🟢</p>
      </div>
    </footer>
  );
}
