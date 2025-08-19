import { useEffect, useState } from "react";
import { About } from "src/widgets/about";
import { BannerMainPage } from "src/widgets/banner-main-page";
import { Projects } from "src/widgets/projects";


const MainPage = () => {

  const initScreenWidth = window.innerWidth;

  const [screenWidth, setScreenWidth] = useState(initScreenWidth);
  const handleWindowResize = () => {
    setScreenWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () =>  window.removeEventListener('resize', handleWindowResize);
  }, [])
  return (
    <main>  
      <BannerMainPage />
      <About/>
      <Projects screenWidth = {screenWidth}/>
    </main>
  );
};

export default MainPage;