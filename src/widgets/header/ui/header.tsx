import { Navbar } from "src/features/navbar";
import cls from "./header.module.scss";
import { Button } from "src/shared/ui/button/button";
import { ButtonMods } from "src/shared/ui-types";
const Header = () => {
  return (
    <header className={cls.header}>
      <div className="container">
        <div className={cls.header__wrapper}>
          <img
            src="content/svg/logo-desktop.svg"
            width={65}
            height={56}
            alt="Логотип компании WINDOM"
          />
          <Navbar />
          <div className={cls.header__phone}>
            <img
              src="content/svg/icon-phone.svg"
              width={35}
              height={35}
              alt="Иконка телефона"
            />
            <a className={cls.header__phone_link} href="tel:+79625552525">+7 (962) 555-25-25</a>
          </div>
          <div className={cls.header__button}>
            <Button options={ButtonMods.Transparent}><span>Заказать звонок</span></Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
