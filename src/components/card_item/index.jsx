import {
  BsBookmark,
  BsBookmarkFill,
  BsHeart,
  BsHeartFill,
} from "react-icons/bs";
import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addToSaved } from "@redux/slice";

const CardItem = ({ news }) => {
  const [isLiked, setIsLiked] = useState(false);

  const dispatch = useDispatch();
  const savedNews = useSelector((state) => state);

  const isNewsSaved = (news) => {
    return savedNews.news.data.some((item) => item.title === news.title);
  };

  function formatDateIndonesian(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  }

  function handleLike() {
    setIsLiked(!isLiked);
  }

  function handleBookmark() {
    dispatch(addToSaved(news));
  }

  return (
    <article className="cardItem">
      {news && (
        <div className="card w-96 bg-base-100">
          <figure>
            <img
              src={
                news?.urlToImage
                  ? news?.urlToImage
                  : "https://placehold.co/400x220"
              }
              alt={news?.title}
              className="w-full h-40 object-cover"
            />
          </figure>
          <div className="mt-2">
            <p className="text-sm pl-2 opacity-60">
              <b>
                <span>{news?.author ? news?.author : "Anonymous"}</span> •{" "}
                <span>{formatDateIndonesian(news?.publishedAt)}</span>
              </b>
            </p>
          </div>
          <div className="card-body h-80 overflow-hidden">
            <h2 className="card-title">{news?.title}</h2>
            <p>{news?.description}</p>
          </div>
        </div>
      )}

      <footer className="align-bottom bottom-4">
        <hr />
        <div className="flex flex-row justify-between">
          <button onClick={handleLike}>
            {isLiked ? <BsHeartFill size={25} /> : <BsHeart size={25} />}
          </button>
          <button onClick={handleBookmark}>
            {isNewsSaved(news) ? (
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
