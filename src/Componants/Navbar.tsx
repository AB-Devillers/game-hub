import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between whitespace-nowrap p-4 text-white">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-14 rounded" />
        <span className="ml-3 text-cyan-400 font-bold sp">EXE</span>
      </div>
      <SearchInput />
    </div>
  );
};

export default Navbar;
