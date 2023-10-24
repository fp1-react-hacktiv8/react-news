import {
  BsBookmark,
  BsBookmarkFill,
  BsHeart,
  BsHeartFill,
} from "react-icons/bs";
import { useState } from "react";
import PropTypes from "prop-types";

const CardItem = ({ news }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  function formatDateIndonesian(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  }

  function handleLike() {
    setIsLiked(!isLiked);
  }

  function handleBookmark() {
    setIsBookmarked(!isBookmarked);
  }

  return (
    <article className="p-3 h-[480px] w-80 rounded-lg shadow shadow-black mb-20">
      <div className="card glass h-full flex flex-col justify-between">
        {news && (
          <a href={news?.url} target="_blank" rel="noreferrer">
            <img
              className="border rounded-2xl border-black mb-1 h-48 w-full"
              src={news?.urlToImage}
              alt={news?.title}
            />
            <p className="text-sm pl-2 opacity-60">
              <b>
                <span>{news?.author}</span> •{" "}
                <span>{formatDateIndonesian(news?.publishedAt)}</span>
              </b>
            </p>
            <div className="flex-col px-2 w-[fit-content] flex-grow">
              <h3 className="text-2xl leading-7">
                <strong>{news?.title}</strong>
              </h3>
              <p className="text-sm mt-2 mb-2">{news?.description}</p>
            </div>
          </a>
        )}
      </div>
      <footer className="align-bottom bottom-4">
        <hr />
        <div className="flex flex-row justify-between">
          <button onClick={handleLike}>
            {isLiked ? <BsHeartFill size={25} /> : <BsHeart size={25} />}
          </button>
          <button onClick={handleBookmark}>
            {isBookmarked ? (
              <BsBookmarkFill size={25} />
            ) : (
              <BsBookmark size={25} />
            )}
          </button>
        </div>
      </footer>
    </article>
  );
};

CardItem.propTypes = {
  news: PropTypes.object.isRequired,
};

export default CardItem;
