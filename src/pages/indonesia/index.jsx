import MainContent from "@components/MainContent";
import Footer from "@components/footer";
import Navbar from "@components/navbar";

const Indonesia = () => {
  return (
    <>
      <Navbar />
      <MainContent
        endpoint="top-headlines?country=id&pageSize=8"
        category={"Indonesia"}
      />
      <Footer />
    </>
  );
};

export default Indonesia;
