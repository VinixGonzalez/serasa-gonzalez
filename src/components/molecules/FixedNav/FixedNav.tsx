import NavBar from "../NavBar";

export const FixedNav = () => {
  return (
    <div className="fixed z-50 lg:hidden border border-t bottom-0 w-full bg-white">
      <NavBar />
    </div>
  );
};

export default FixedNav;
