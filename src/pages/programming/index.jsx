import MainContent from "@components/MainContent";
import Footer from "@components/footer";
import Navbar from "@components/navbar";
import endpoints from "@libs/index";

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
