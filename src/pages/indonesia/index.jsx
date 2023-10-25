import MainContent from "@components/MainContent";
import Footer from "@components/footer";
import Navbar from "@components/navbar";
import endpoints from "@libs/api";
import useFetchData from "@libs/hooks/useFetchData";

const Indonesia = () => {
  const { news, isLoading } = useFetchData(`${endpoints.indonesia}`);

  return (
    <>
      <Navbar />
      <MainContent news={news} isLoading={isLoading} category={"Indonesia"} />
      <Footer />
    </>
  );
};

export default Indonesia;
