import MainContent from "@components/MainContent";
import Footer from "@components/footer";
import Navbar from "@components/navbar";
import endpoints from "@libs/api";
import useFetchData from "@libs/hooks/useFetchData";

const Saved = () => {
  const { data, isLoading } = useFetchData(`${endpoints.indonesia}`);
  return (
    <>
      <Navbar />
      <MainContent news={data} isLoading={isLoading} category={"Programming"} />
      <Footer />
    </>
  );
};

export default Saved;
