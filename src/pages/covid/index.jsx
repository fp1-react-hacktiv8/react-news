import MainContent from "@components/MainContent";
import Footer from "@components/footer";
import Navbar from "@components/navbar";
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
