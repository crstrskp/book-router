import { Outlet, Link } from "react-router";

export default function Layout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
        <br />
        <Link to="/about">About</Link>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer>This is a footer</footer>
    </>
  );
}