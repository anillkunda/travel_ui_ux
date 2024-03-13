import { userIcon, MenuIcon } from "../assets/icons";
import { hilinkLogo } from "../assets/images";
import { navLinks } from "../constants";
import { Button } from "../components";

const Navbar = () => {
  return (
    <nav
      className="flexBetween max-container padding-container relative z-30 py-5"
      data-aos="fade-down"
    >
      <a href="/">
        <img src={hilinkLogo} alt="Hilink Logo" width={74} height={29} />
      </a>

      <ul className="hidden h-full gap-12 lg:flex">
        {navLinks.map((link) => (
          <li
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </li>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon={userIcon}
          variant="btn_dark_green"
        />
      </div>

      <img
        src={MenuIcon}
        alt=" Hamburger Icon"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
