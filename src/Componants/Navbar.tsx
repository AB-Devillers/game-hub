import logo from "../assets/logo.webp";
const Navbar = () => {
  return (
    <div className="flex items-center p-3">
      <img src={logo} alt="logo" className="w-14" />
      <h3 className="m-2">Navbar</h3>
    </div>
  );
};

export default Navbar;
