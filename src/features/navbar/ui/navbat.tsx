import cls from "./navbar.module.scss";

const Navbar = (): React.ReactNode => {
  return (
    <div className={cls.navbar}>
      <ul className={cls.navbar__list}>
        <li className={cls.navbar__item}>
            <a href="#">Наши проекты</a>
        </li>
        <li className={cls.navbar__item}>
            <a href="#">Дома</a>
        </li>
        <li className={cls.navbar__item}>
            <a href="#">Ипотека</a>
        </li>
        <li className={cls.navbar__item}>
            <a href="#">О компании</a>
        </li>
        <li className={cls.navbar__item}>
            <a href="#">Контакты</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
