import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="px-5 pt-5 pb-10 flex justify-between">
      <Link to="/" className="mr-3">
        <span className="font-bold">TO DO</span> or{" "}
        <span className="font-bold">NOT TO DO</span>
      </Link>
      <div>
        <Link to="/signin" className="mr-3">
          Sign In
        </Link>
        <Link to="/signup" className="mr-3">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
