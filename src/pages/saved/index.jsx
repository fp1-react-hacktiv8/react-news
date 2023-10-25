import Pagination from "@components/Pagination";
import TabMenu from "@components/TabMenu";
import CardItem from "@components/card_item";
import Footer from "@components/footer";
import Navbar from "@components/navbar";
import { useState } from "react";
import { useSelector } from "react-redux";

const Saved = () => {
  const news = useSelector((state) => state.news);
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  console.log(currentPage, news.data.length);

  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-x-2 items-center justify-center w-full mb-10 mx-4">
        <TabMenu />
        <section className="mt-[5vh] w-full flex flex-col justify-center items-center">
          <h1 className=" capitalize text-4xl dark:text-white">Saved News</h1>
          <div className="border-b-2 border-slate-900 dark:border-white w-[70%] m-[1rem]" />
        </section>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 my-5">
          {news.data.length > 0 &&
            news.data?.map((newsItem, index) => (
              <div key={index}>
                <CardItem news={newsItem} />
              </div>
            ))}
        </div>
        <div className="flex justify-center items-center mt-4">
          <Pagination
            currentPage={currentPage}
            maxPages={news.data.length ? news.data.length : 1}
            onPageChange={handlePageChange}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Saved;
