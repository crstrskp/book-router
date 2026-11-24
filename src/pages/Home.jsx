import { Link } from "react-router";

function Home() {
  return (
    <section>
      <h1>Home</h1>
      <h2>Welcome to the Book Catalogue!</h2>

      <p>What would you like to do?</p>

      <Link to="/books">Browse books</Link>
      <br />
      <Link to="/about">About us</Link>
    </section>
  ) 
}

export default Home;