import MainContent from "@components/MainContent";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import endpoints from "@libs/api";

const Covid = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <MainContent endpoint={endpoints.covid19} category={"Covid"} />
      <Footer />
    </div>
  );
};

export default Covid;
