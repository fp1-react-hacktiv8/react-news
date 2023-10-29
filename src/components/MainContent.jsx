import { LoadingCard } from ".";
import PropTypes from "prop-types";
import TabMenu from "./TabMenu";
import { useState } from "react";
import useFetchData from "@libs/hooks/useFetchData";
import Pagination from "./Pagination";
import CardItem from "./Card";

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
        <h1 className="capitalize text-4xl sm:text-5xl md:text-6xl xl:text-7xl">
          {category} News
        </h1>
        <hr className="border-b w-[70%] m-[1rem]" />
      </section>
      {isLoading && <LoadingCard />}
      <div className="flex flex-wrap justify-center">
        {news?.map((newsItem, index) => (
          <div key={index} className="m-3">
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
