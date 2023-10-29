import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addToSaved } from "@redux/slice";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

const Table = ({ news }) => {
  const dispatch = useDispatch();
  function handleBookmark(item) {
    dispatch(addToSaved(item));
  }

  const isNewsSaved = (newsData) => {
    return news.some((item) => item.title === newsData.title);
  };

  return (
    <div className="w-full overflow-x-auto px-10">
      <table className="table table-zebra w-full">
        <thead className="text-xl text-black">
          <tr>
            <th>Source</th>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {news.map((item, index) => (
            <tr key={index}>
              <td>
                <p>
                  {item.author} - {item.source.name}
                </p>
                <a
                  href={item.url}
                  className="link text-blue-500 underline underline-offset-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Page
                </a>
              </td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>
                <button
                  onClick={() => {
                    handleBookmark(item);
                  }}
                >
                  {isNewsSaved(item) ? (
                    <BsBookmarkFill size={25} />
                  ) : (
                    <BsBookmark size={25} />
                  )}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  news: PropTypes.array.isRequired,
};

export default Table;
