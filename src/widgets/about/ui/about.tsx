import { useCallback, useEffect, useState } from "react";
import cls from "./about.module.scss";
import { sizes } from "src/shared/constants";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  gsap.registerPlugin(ScrollTrigger)
  const initScreenSize = window.innerWidth;



  gsap.registerEffect({
    name: "counter",
    extendTimeline: true,
    defaults: {
      end: 0,
      duration: 0.5,
      ease: "power1",
      increment: 1,
    },

    effect: (
      targets: HTMLElement[],
      config: { end: number; duration: number; ease: string; increment: number }
    ) => {
      const tl = gsap.timeline();
      const num = targets[0].innerText.replace(/,/g, "");
      targets[0].innerText = num;

      tl.to(
        targets,
        {
          duration: config.duration,
          innerText: config.end,
          // snap: {innerText: config.increment}
          modifiers: {
            innerText: function (innerText: string) {
              const value = Number(innerText);
              const snapped = gsap.utils.snap(
                config.increment,
                isNaN(value) ? 0 : value
              );
              return String(snapped);
            },
          },
          ease: config.ease,
        },
        0
      );

      return tl;
    },
  });

  const [screenWidth, setScreenWidth] = useState(initScreenSize);
  const handleResize = useCallback(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  useGSAP(() => {
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '#about-counter',
        start: 'top center',
      }
    });

    tl1.from("#about-item-1", { opacity: 0 });
    tl1.counter("#years", { end: 10, ease: "linear" }, "-=0.5");
    tl1.from("#about-item-2", { opacity: 0 }, "+=0.5");
    tl1.counter("#area", { end: 1051, duration: 0.6 }, "-=0.5");
    tl1.from("#about-item-3", { opacity: 0 }, "+=0.5");
    tl1.counter("#people", { end: 5063, increment: 1 }, "-=0.5");
  });

  return (
    <section className={cls.about}>
      <div className="container">
        <ul id="about-counter" className={cls.about__list}>
          <li id="about-item-1" className={cls.about__item}>
            <span id="years">0</span>
            <p className={cls.about__item_desc}>
              Лет успешного опыта продаж загородной недвижимости
            </p>
          </li>
          <li id="about-item-2" className={cls.about__item}>
            <span id="area">500</span>
            <p className={cls.about__item_desc}>
              Га - площадь наших комфортных посёлков европейского класса
            </p>
          </li>
          <li id="about-item-3" className={cls.about__item}>
            <span id="people">4000</span>
            <p className={cls.about__item_desc}>
              Счастливых владельцев загородных домов
            </p>
          </li>
        </ul>
        <div className={cls.about__inner}>
          <h2 className={cls.about__title}>
            <span>о</span> компании
          </h2>
          <div className={cls.about__descriptions}>
            <p>
              Компания<span> Win Dom</span> основана в&nbsp;2012&nbsp;году.
            </p>
            <p>
              Основным направлением девелопера является строительство загородных
              домов и таунхаусов "под ключ".
            </p>
            <p>
              Более 11 лет Win Dom работает на строительном рынке недвижимости
              Казани и Республики Татарстан и как подрядная организация и, как
              самостоятельный застройщик.
            </p>
          </div>
          <ul className={cls.about__social}>
            <li className={cls.about__social_link}>
              <a href="#">
                <img src="content/svg/icon-youtube.svg" alt="Сылка youtube" />
              </a>
            </li>
            <li className={cls.about__social_link}>
              <a href="#">
                <img src="content/svg/icon-vk.svg" alt="Сылка youtube" />
              </a>
            </li>
            <li className={cls.about__social_link}>
              <a href="#">
                <img src="content/svg/icon-lin.svg" alt="Сылка youtube" />
              </a>
            </li>
            <li className={cls.about__social_link}>
              <a href="#">
                <img src="content/svg/icon-t.svg" alt="Сылка youtube" />
              </a>
            </li>
          </ul>
          <div className={cls.about__image}>
            {screenWidth >= sizes.desktopSmall && (
              <picture>
                <source
                  type="image/webp"
                  srcSet="content/img/about-img.webp 1x, content/img/about-img@2x.webp 2x"
                />
                <img
                  src="content/img/about-img.jpg"
                  width={795}
                  height={499}
                  srcSet="content/img/about-img@2x.jpg 2x"
                  alt="Коттедж  у дороги"
                />
              </picture>
            )}
            {screenWidth < sizes.desktopSmall && screenWidth >= sizes.tablet && (
              <picture>
                <source
                  type="image/webp"
                  srcSet="content/img/about-img-notebook.webp 1x, content/img/about-img-notebook@2x.webp 2x"
                />
                <img
                  src="content/img/about-img-notebook.jpg"
                  width={550}
                  height={450}
                  srcSet="content/img/about-img-notebook@2x.jpg 2x"
                  alt="Коттедж  у дороги"
                />
              </picture>
            )}
            {screenWidth < sizes.tablet && (
              <picture>
                <source
                  type="image/webp"
                  srcSet="content/img/about-img-mobile.webp 1x, content/img/about-img-mobile@2x.webp 2x"
                />
                <img
                  src="content/img/about-img-mobile.jpg"
                  width={550}
                  height={450}
                  srcSet="content/img/about-img-mobile@2x.jpg 2x"
                  alt="Коттедж  у дороги"
                />
              </picture>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
