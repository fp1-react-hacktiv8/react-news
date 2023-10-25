import MainContent from "@components/MainContent";
import Footer from "@components/footer";
import Navbar from "@components/navbar";
import endpoints from "@libs/api";
import useFetchData from "@libs/hooks/useFetchData";

const Covid = () => {
  const { news, isLoading } = useFetchData(`${endpoints.covid19}`);

  return (
    <>
      <Navbar />
      <MainContent news={news} isLoading={isLoading} category={"Covid"} />
      <Footer />
    </>
  );
};

export default Covid;
