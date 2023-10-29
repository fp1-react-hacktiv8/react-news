import TabMenu from "@components/TabMenu";
import Table from "@components/Table";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import { useSelector } from "react-redux";

const Saved = () => {
  const newsData = useSelector((state) => state.news);
  const news = [...newsData.data].reverse();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col gap-x-2 items-center justify-center w-full mb-10 mx-4">
        <TabMenu />
        <section className="mt-[5vh] w-full flex flex-col justify-center items-center">
          <h1 className="capitalize text-4xl sm:text-5xl md:text-6xl xl:text-7xl">
            Saved News
          </h1>
          <hr className="border-b w-[70%] m-[1rem]" />
        </section>
        {news.length > 0 ? <Table news={news} /> : <h1>No Saved News</h1>}
      </main>
      <Footer />
    </div>
  );
};

export default Saved;
