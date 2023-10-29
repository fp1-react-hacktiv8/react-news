import MainContent from "@components/MainContent";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import endpoints from "@libs/api";

const Politics = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <MainContent endpoint={endpoints.politics} category={"Politics"} />
      <Footer />
    </div>
  );
};

export default Politics;
