import { useState } from "react";
import cls from "./navbar.module.scss";
import { NavbarLinks } from "src/features/navbar-links";
import { projects, home, about } from "src/shared/constants";
import { NavbarLinkNames } from "src/shared/ui-types";

const Navbar = (): React.ReactNode => {

  const initialStatusLinks = {
    [NavbarLinkNames.Projects]: false,
    [NavbarLinkNames.Home]: false,
    [NavbarLinkNames.Mortgage]: false,
    [NavbarLinkNames.About]: false,
    [NavbarLinkNames.Contacts]: false,
  }

  const [statusLinks, setStatusLinks] = useState(initialStatusLinks);

  const handleClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    const target = evt.target as HTMLAnchorElement;
    const link = target.id as keyof typeof statusLinks;
    setStatusLinks({ ...statusLinks, [link]: !statusLinks[link] });
  };

  return (
    <div className={cls.navbar}>
      <ul className={cls.navbar__list}>
        <li className={cls.navbar__item}>
          <a id={NavbarLinkNames.Projects} onClick={handleClick} href="#" className={cls.navbar__link}>{NavbarLinkNames.Projects}</a>
          <img className={statusLinks[NavbarLinkNames.Projects] ? cls.navbar__arrow_active : cls.navbar__arrow} src='content/svg/icon-down.svg' alt="arrow-down" />
          <NavbarLinks isOpen={statusLinks[NavbarLinkNames.Projects]} links={projects} />
        </li>
        <li className={cls.navbar__item}>
          <a id={NavbarLinkNames.Home} onClick={handleClick} href="#" className={cls.navbar__link}>{NavbarLinkNames.Home}</a>
          <img className={statusLinks[NavbarLinkNames.Home] ? cls.navbar__arrow_active : cls.navbar__arrow} src='content/svg/icon-down.svg' alt="arrow-down" />
          <NavbarLinks isOpen={statusLinks[NavbarLinkNames.Home]} links={home} />
        </li>
        <li className={cls.navbar__item}>
          <a id="mortgage" onClick={handleClick} href="#" className={cls.navbar__link}>{NavbarLinkNames.Mortgage}</a>
        </li>
        <li className={cls.navbar__item}>
          <a id={NavbarLinkNames.About} onClick={handleClick} href="#" className={cls.navbar__link}>{NavbarLinkNames.About}</a>
          <img className={statusLinks[NavbarLinkNames.About] ? cls.navbar__arrow_active : cls.navbar__arrow} src='content/svg/icon-down.svg' alt="arrow-down" />
          <NavbarLinks isOpen={statusLinks[NavbarLinkNames.About]} links={about} />
        </li>
        <li className={cls.navbar__item}>
          <a id="contacts" onClick={handleClick} href="#" className={cls.navbar__link}>{NavbarLinkNames.Contacts}</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
