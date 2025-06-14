import PageLinks from "../Components/PageLinks";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <p>
            <span>CELPIP</span>
          </p>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <PageLinks parentClass="nav-links" itemClass="nav-link" />
      </div>
    </nav>
  );
};
export default Navbar;
