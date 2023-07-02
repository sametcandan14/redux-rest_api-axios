import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-black py-5 mb-2 ">
      <div className="container mx-auto ">
        <Link to="/">
          <h2 className="text-white font-bold text-xl">FakeShop</h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
