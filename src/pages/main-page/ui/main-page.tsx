import { About } from "src/widgets/about";
import { BannerMainPage } from "src/widgets/banner-main-page";
import { Projects } from "src/widgets/projects";


const MainPage = () => {
  return (
    <main>  
      <BannerMainPage />
      <About/>
      <Projects />
    </main>
  );
};

export default MainPage;