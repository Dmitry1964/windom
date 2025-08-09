import { Button } from "src/shared/ui/button/button";
import cls from "./banner-main-page.module.scss";
import { ButtonMods } from "src/shared/ui-types";



const BannerMainPage = () => {

    return (
        <section className={cls.banner_mainpage}>
          <div className={cls.banner_mainpage__wrapper}>
            <div className={cls.banner_mainpage__image}>
                <picture>
                    <source type="image/webp" srcSet="content/img/banner-main.webp 1x, content/img/banner-main@2x.webp 2x" />
                    <img src="content/img/banner-main.png" srcSet="content/img/banner-main@2x.jpg 2x" alt="Фотография котеджа" />
                </picture>
            </div>
            <div className={cls.banner_mainpage__content}>
                <div className={cls.banner_mainpage__content_inner}>
                    <div className={cls.banner_mainpage__content_title}>
                        <h2 id="content-title">Строительная компания</h2>
                        <div className={cls.banner_mainpage__title}><span id="win">WIN</span><span id="dom">DOM</span></div>
                        <p className={cls.banner_mainpage__content_slogan}>Мы строим дома, коттеджные поселки и таунхаусы в Казани</p>
                        <div className={cls.banner_mainpage__content_button}>
                            <Button options={ButtonMods.Banner}>
                                <span>Подробнее о проектах</span>
                            </Button>
                            <Button options={ButtonMods.Question}>
                                <span>Задать вопрос</span>
                            </Button>
                        </div>
                    </div>
                    <div className={cls.banner_mainpage__content_video}>
                        <a href="#">
                          <img src="content/svg/video-link.svg" width={328} height={180} alt="Смотреть видео" />
                        </a>
                    </div>
                </div>
            </div>

          </div>
        </section>
    );
};

export default BannerMainPage;
