import { Navbar } from "src/features/navbar";
import cls from "./header.module.scss";
import { Button } from "src/shared/ui/button/button";
import { ButtonMods } from "src/shared/ui-types";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { sizes } from "src/shared/constants";
import { ButtonMobile } from "src/shared/ui/button-mobile/button-mobile";

const Header = () => {

  const initSize = window.innerWidth;

  const [size, setSize] = useState(initSize);
  const [isOpen, setIsOpen] = useState(true)
  const handleResize = useCallback(() => {
    setSize(window.innerWidth)
  }, [])

  const handleButtonMobile = useCallback(() => {
    console.log(isOpen);

    setIsOpen(!isOpen);
  }, [isOpen])

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <header className={cls.header}>
      <div className="container">
        <div className={cls.header__wrapper}>
          <Link className={cls.header__logo_link} to="/">
            <img
            className={cls.header__logo}
              src="content/svg/logo-desktop.svg"
              width={65}
              height={56}
              alt="Логотип компании WINDOM"
            />
          </Link>
          {size >= sizes.tablet && <Navbar />}
          {size >= sizes.tablet && (
            <>
              <div className={cls.header__phone}>
                <img
              width={35}
              height={35}
              className={cls.header__phone_icon}
              src="content/svg/icon-phone.svg"
              alt="Иконка телефона"
            />
            <a className={cls.header__phone_link} href="tel:+79625552525">+7 (962) 555-25-25</a>
          </div>
          <div className={cls.header__button}>
            <Button options={ButtonMods.Header}><span>Заказать звонок</span></Button>
          </div>
            </>
          )}
          {size < sizes.tablet &&
            <>
            <Link to='/'>
            <img
              width={30}
              height={30}
              className={cls.header__phone_icon_mobile}
              src="content/svg/icon-phone-mobile.svg"
              alt="Иконка телефона"
            />
            </Link>
            <ButtonMobile handleButtonMobile={handleButtonMobile} status={isOpen}/>
            </>
          }
        </div>
      </div>
    </header>
  );
};

export default Header;
