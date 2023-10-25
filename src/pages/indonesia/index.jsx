import MainContent from "@components/MainContent";
import Footer from "@components/footer";
import Navbar from "@components/navbar";
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
