import TabMenu from "@components/TabMenu";
import Table from "@components/Table";
// import CardItem from "@components/card_item";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import { useSelector } from "react-redux";

const Saved = () => {
  const newsData = useSelector((state) => state.news);
  const news = [...newsData.data].reverse();

  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-x-2 items-center justify-center w-full mb-10 mx-4">
        <TabMenu />
        <section className="mt-[5vh] w-full flex flex-col justify-center items-center">
          <h1 className=" capitalize text-4xl">Saved News</h1>
          <hr className="border-b w-[70%] m-[1rem]" />
        </section>
        {news ? <Table news={news} /> : <h1>No Saved News</h1>}
        {/* <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 my-5">
          {news.map((newsItem, index) => (
            <div key={index}>
              <CardItem news={newsItem} />
            </div>
          ))}
        </div> */}
      </main>
      <Footer />
    </>
  );
};

export default Saved;
