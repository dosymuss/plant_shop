import Container from "../components/Container/Container";
import FooterMain from "../components/Footer/FooterMain/FooterMain";
import Header from "../components/Header/Header";
import MainBestProd from "../components/Main/MainBestProd/MainBestProd";
import MainHero from "../components/Main/MainHero/MainHero";
import MainSponsor from "../components/Main/MainSponsor/MainSponsor";

const MainPage = () => {
  return (
    <>
    <Container>
      <Header />
      <MainHero />
      <MainBestProd />
    </Container>
      <MainSponsor />
      <FooterMain />
    </>
  );
};

export default MainPage;
