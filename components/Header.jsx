<<<<<<< HEAD
import Link from "next/link";
import { Button } from "./ui/button";

//  components
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            HUA <span className="text-accent">.</span>
          </h1>
        </Link>
        {/* Desktop Navbar */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>
        {/* Mobail view Navbar */}
        <div className="xl:hidden">Mobail nav</div>
      </div>
    </header>
  );
=======
const Header = () => {
  return <header> Header</header>;
>>>>>>> 698d00662200afdd0a181a65e8d5608b67b93e98
};

export default Header;
