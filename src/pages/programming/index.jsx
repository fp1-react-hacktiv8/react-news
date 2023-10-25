import MainContent from "@components/MainContent";
import Footer from "@components/footer";
import Navbar from "@components/navbar";
import endpoints from "@libs/api";
import useFetchData from "@libs/hooks/useFetchData";

const Programming = () => {
  const { news, isLoading } = useFetchData(`${endpoints.programing}`);
  return (
    <>
      <Navbar />
      <MainContent news={news} isLoading={isLoading} category={"Programming"} />
      <Footer />
    </>
  );
};

export default Programming;
