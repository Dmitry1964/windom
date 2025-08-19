import { ChangeEvent, useCallback, useState } from 'react';
import cls from './projects.module.scss';

const Projects = () => {

  const [width, setWidth] = useState(50);

  const handleRange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    console.log(evt.target.value);
    setWidth(Number(evt.target.value))

  }, [])
  return (
    <section className={cls.projects}>
      <div className='container'>
        <div className={cls.projects__wrapper}>
          <h2 className={cls.projects__title}>Уникальная <span>архитектура</span></h2>
          <div className={cls.projects__inner}>
            <div className={cls.projects__slider}>
              <div style={{ left: `${width}%` }} className={cls.projects__line}></div>
              <input className={cls.projects__range}
                onChange={handleRange}
                type="range"
                min={0}
                max={100}
              />
              <img style={{ clipPath: `polygon(0 0, ${width}% 0, ${width}% 100%, 0 100%)` }} className={cls.projects__img_light} src="content/img/projects-light.jpg" width={1264} height={587} alt="Коттедж днем" />
              <img className={cls.projects__img_night} src="content/img/projects-night.jpg" width={1264} height={587} alt="Коттедж ночью" />
            </div>
          </div>
          <p className={cls.projects__desc}>Мы не строим однотипных коробочных решений: дома из желтого или красного кирпича. Мы создаём <span>уникальные</span> ни на что не похожие,<span>запоминающиеся проекты</span> </p>
        </div>
      </div>
      <div>Slider</div>
    </section>
  )
}

export default Projects;