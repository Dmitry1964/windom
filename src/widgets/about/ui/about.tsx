import cls from "./about.module.scss";

const About = () => {
  return (
    <section className={cls.about}>
      <div className="container">
        <ul className={cls.about__list}>
          <li className={cls.about__item}>
            <span id="years">10</span>
            <p className={cls.about__item_desc}>
              Лет успешного опыта продаж загородной недвижимости
            </p>
          </li>
          <li className={cls.about__item}>
            <span id="area">1051</span>
            <p className={cls.about__item_desc}>
              Га - площадь наших комфортных посёлков европейского класса
            </p>
          </li>
          <li className={cls.about__item}>
            <span id="people">5063</span>
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
              Компания<span> Win Dom</span> основана в 2012 году.
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
