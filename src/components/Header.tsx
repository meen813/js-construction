import Link from "next/link";

export default function Header() {
  
  return (
    <header className="fixed top-0 left-0 w-full p-10 bg-black bg-opacity-10 transition-all duration-300 ease-in-out z-10 text-white hover:bg-black hover:bg-opacity-50">
      <section className="flex flex-col md:flex-row items-center justify-center">
        <Link href="/">
          <h1 className="text-3xl md:text-4xl font-bold hover:text-gray-300 mr-20">
            {"J&S Construction"}
          </h1>
        </Link>
        <nav className="flex gap-8 md:gap-12 md:text-xl font-semibold mt-4 md:mt-0">
          <Link
            className="hover:text-gray-300 transition-colors duration-300 transform hover:-translate-y-1"
            rel="noopener noreferrer"
            href="/">
            <h1>
              {"Home"}
            </h1>
          </Link>
          <Link
            className="hover:text-gray-300 transition-colors duration-300 transform hover:-translate-y-1"
            href="/projects"
            rel="noopener noreferrer"
          >
            <h1>{"Projects"}</h1>
          </Link>
          <Link
            className="hover:text-gray-300 transition-colors duration-300 transform hover:-translate-y-1"
            href="/forum"
            rel="noopener noreferrer"
          >
            {"Forum"}
          </Link>
          <Link
            className="hover:text-gray-300 transition-colors duration-300 transform hover:-translate-y-1"
            href="/contact"
            rel="noopener noreferrer"
          >
            {"Contact"}
          </Link>
        </nav>
      </section>
    </header>
  );
}
