import CardItem from "./card_item";
import { LoadingCard } from ".";
import PropTypes from "prop-types";
import TabMenu from "./TabMenu";
import { useState } from "react";
import useFetchData from "@libs/hooks/useFetchData";
import Pagination from "./Pagination";

const MainContent = ({ endpoint, category }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { news, isLoading, maxPages } = useFetchData(
    `${endpoint}&page=${currentPage}`
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <main className="flex flex-col gap-x-2 items-center justify-center w-full mb-10 mx-4">
      <TabMenu />
      <section className="mt-[5vh] w-full flex flex-col justify-center items-center">
        <h1 className=" capitalize text-4xl dark:text-white">
          {category} News
        </h1>
        <div className="border-b-2 border-slate-900 dark:border-white w-[70%] m-[1rem]" />
      </section>
      {isLoading && <LoadingCard />}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 my-5">
        {news?.map((newsItem, index) => (
          <div key={index}>
            <CardItem news={newsItem} />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-4">
        <Pagination
          currentPage={currentPage}
          maxPages={maxPages}
          onPageChange={handlePageChange}
        />
      </div>
    </main>
  );
};

MainContent.propTypes = {
  endpoint: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default MainContent;
