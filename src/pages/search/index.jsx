import MainContent from "@components/MainContent";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import endpoints from "@libs/api";
import { useParams } from "react-router-dom";

const Search = () => {
  const { search } = useParams();

  return (
    <>
      <Navbar />
      <MainContent
        endpoint={`${endpoints.search}${search}`}
        category={search[0].toUpperCase() + search.slice(1)}
      />
      <Footer />
    </>
  );
};

export default Search;
