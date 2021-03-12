import { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className="container px-5 pt-6 pb-6 mx-auto border-b-2 border-gray-300 grid grid-cols-4 gap-4">
      <h1 className="text-5xl font-black col-span-2">MP</h1>
      <div className="text-right col-span-2">
        <Link to="/settings">Options</Link>
      </div>
    </header>
  );
};

export default Header;
