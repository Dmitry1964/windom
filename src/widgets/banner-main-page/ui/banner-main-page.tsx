import { useCallback, useEffect, useState } from 'react';
import cls from './banner-main-page.module.scss';
import { sizes } from 'src/shared/constants';
import { Button } from 'src/shared/ui/button/button';
import { ButtonMods } from 'src/shared/ui-types';


const BannerMainPage = () => {

  const initViewPort = window.innerWidth;

  const [size, setSize] = useState(initViewPort);

  const handleResize = useCallback(() => {
    setSize(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

    return (
      <section className={cls.banner_main}>
        <div className={cls.banner_main__wrapper}>
          <div className={cls.banner_main__image}>
            {size >= sizes.mobile && 
              <picture>
                <source type="image/webp" srcSet="content/img/banner-main.webp 1x, content/img/banner-main@2x.webp 2x" />
                <img src="content/img/banner-main.jpg" alt="Изображение коттеджа" srcSet="content/img/banner-main@2x.jpg 2x" />
              </picture>
            }
            {size < sizes.mobile &&
              <picture>
                <source type="image/webp" srcSet="content/img/banner-mobile.webp 1x, content/img/banner-mobile@2x.webp 2x" />
                <img src="content/img/banner-mobile.jpg" alt="Изображение коттеджа" srcSet="content/img/banner-mobile@2x.jpg 2x" />
              </picture>
            }
          </div>
          <div className={cls.banner_main__content}>
            <div className='container'>
              <h2 className={cls.banner_main__title}><span id='banner-title'>Строительная компания</span><br/>
                <span id='win'>win</span><span id='dom'>dom</span>
              </h2>
              <div className={cls.banner_main__inner}>
                <p className={cls.banner_main__slogan}>Мы строим дома, коттеджные поселки и&nbsp;таунхаусы в Казани</p>
                <div className={cls.banner_main__buttons}>
                  <Button options={ButtonMods.Banner}>Подробнее о проектах</Button>
                  <Button options={ButtonMods.Question}>Задать вопрос</Button>
                </div>
                {size >= sizes.laptopSmall &&
                  <a href="#" className={cls.banner_main__link}>
                    <img src="content/svg/video-link.svg" alt="Воспроизвести видео" />
                  </a>
                }
                {size < sizes.laptopSmall && size >= sizes.tablet &&
                  <a href="#" className={cls.banner_main__link}>
                    <img src="content/svg/video-link-tablet.svg" width={90}  alt="Воспроизвести видео" />
                  </a>
                }
                {size < sizes.tablet &&
                  <a href="#" className={cls.banner_main__link}>
                    <img src="content/svg/video-link-mobile.svg" width={187} height={80} alt="Воспроизвести видео" />
                  </a>
                }


              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default BannerMainPage;
