import MainContent from "@components/MainContent";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import endpoints from "@libs/api";

const Covid = () => {
  return (
    <>
      <Navbar />
      <MainContent endpoint={endpoints.covid19} category={"Covid"} />
      <Footer />
    </>
  );
};

export default Covid;
