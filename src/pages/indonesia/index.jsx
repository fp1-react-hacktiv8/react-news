import Footer from "@components/Footer";
import MainContent from "@components/MainContent";
import Navbar from "@components/Navbar";
import endpoints from "@libs/api";

const Indonesia = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <MainContent endpoint={endpoints.indonesia} category={"Indonesia"} />
      <Footer />
    </div>
  );
};

export default Indonesia;
