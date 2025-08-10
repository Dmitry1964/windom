import { useCallback, useEffect, useState } from 'react';
import cls from './banner-main-page.module.scss';
import { sizes } from 'src/shared/constants';


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
          <div className={cls.banner_main__content}></div>
        </div>
      </section>
    );
};

export default BannerMainPage;
