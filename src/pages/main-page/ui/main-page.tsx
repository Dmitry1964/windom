import { About } from "src/widgets/about";
import { BannerMainPage } from "src/widgets/banner-main-page";


const MainPage = () => {
  return (
    <main>  
      <BannerMainPage />
      <About/>
    </main>
  );
};

export default MainPage;