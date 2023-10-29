import MainContent from "@components/MainContent";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import endpoints from "@libs/api";

const Programming = () => {
  return (
    <>
      <Navbar />
      <MainContent endpoint={endpoints.programing} category={"Programming"} />
      <Footer />
    </>
  );
};

export default Programming;
