import cls from "./navbar.module.scss";

const Navbar = (): React.ReactNode => {
  return (
    <div className={cls.navbar}>
      <ul className={cls.navbar__list}>
        <li className={cls.navbar__item}>
            <a className={cls.navbar__link} href="#">Наши проекты</a>
            <img src='content/svg/icon-down.svg' alt="arrow-down" />
        </li>
        <li className={cls.navbar__item}>
            <a className={cls.navbar__link} href="#">Дома</a>
            <img src='content/svg/icon-down.svg' alt="arrow-down" />
        </li>
        <li className={cls.navbar__item}>
            <a className={cls.navbar__link} href="#">Ипотека</a>
        </li>
        <li className={cls.navbar__item}>
            <a className={cls.navbar__link} href="#">О компании</a>
            <img src='content/svg/icon-down.svg' alt="arrow-down" />
        </li>
        <li className={cls.navbar__item}>
            <a className={cls.navbar__link} href="#">Контакты</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
