import Footer from "@components/Footer";
import MainContent from "@components/MainContent";
import Navbar from "@components/Navbar";
import endpoints from "@libs/api";

const Indonesia = () => {
  return (
    <>
      <Navbar />
      <MainContent endpoint={endpoints.indonesia} category={"Indonesia"} />
      <Footer />
    </>
  );
};

export default Indonesia;
