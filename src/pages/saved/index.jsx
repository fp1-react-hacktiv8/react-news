import MainContent from "@components/MainContent";
import Footer from "@components/footer";
import Navbar from "@components/navbar";
import { useSelector } from "react-redux";

const Saved = () => {
  const { news } = useSelector((state) => state);

  return (
    <>
      <Navbar />
      <MainContent news={news.data} category={"Saved"} />
      <Footer />
    </>
  );
};

export default Saved;
