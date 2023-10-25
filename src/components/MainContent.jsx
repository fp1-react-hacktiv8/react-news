import CardItem from "./card_item";
import { LoadingCard } from ".";
import PropTypes from "prop-types";
import TabMenu from "./TabMenu";

const MainContent = ({ news, isLoading, category }) => {
  return (
    <main className="flex flex-col gap-x-2 items-center justify-center w-full mb-20 mx-4">
      <TabMenu />
      <section className="mt-[5vh] w-full flex flex-col justify-center items-center">
        <h1 className=" capitalize text-4xl dark:text-white">
          {category} News
        </h1>
        <div className="border-b-2 border-slate-900 dark:border-white w-[70%] m-[1rem]" />
      </section>
      {isLoading && <LoadingCard />}
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 my-5">
        {news?.map((newsItem, index) => (
          <div key={index}>
            <CardItem news={newsItem} />
          </div>
        ))}
      </div>
    </main>
  );
};

MainContent.propTypes = {
  news: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
};

export default MainContent;
