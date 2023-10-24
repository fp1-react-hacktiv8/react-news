import {
  BsBookmark,
  //   BsBookmarkFill,
  BsHeart,
  BsHeartFill,
} from "react-icons/bs";
import { useState, useEffect } from "react";
import axios from "axios";
import LazyLoad from "react-lazy-load";

const CardItem = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [newsData, setNewsData] = useState(null);

  const indonesiaNews = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/top-headlines?country=id&apiKey=${
          import.meta.env.VITE_API_KEY
        }`
      );
      console.log(response.data);
      setNewsData(response.data.articles[0]);
    } catch (error) {
      (error) => console.error(error);
    }
  };

  useEffect(() => {
    indonesiaNews();
  }, []);

  function formatDateIndonesian(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  }

  function handleLike() {
    setIsLiked(!isLiked);
  }

  return (
    <article className="cardItem">
      {newsData && (
        <div className="card w-96 glass">
          <a href={newsData.url} target="_blank" rel="noreferrer">
            <LazyLoad>
              <img
                className="border rounded-2xl border-black mb-1 h-48 w-full"
                src={newsData.urlToImage}
                alt="foto berita"
              />
            </LazyLoad>
            <p className="text-sm pl-2 opacity-60">
              <b>
                <span>{newsData.author}</span> •{" "}
                <span>{formatDateIndonesian(newsData.publishedAt)}</span>
              </b>
            </p>
            <div className="flex-col px-2 w-[fit-content]">
              <h3 className="text-2xl leading-7">
                <strong>{newsData.title}</strong>
              </h3>
              <p className="text-sm mt-2 mb-2">{newsData.description}</p>
            </div>
          </a>
        </div>
      )}
      <footer className="align-bottom bottom-4">
        <hr />
        <div className="flex flex-row justify-between">
          <button onClick={handleLike}>
            {isLiked ? <BsHeartFill size={25} /> : <BsHeart size={25} />}
          </button>
          <button>
            <BsBookmark size={25} />
          </button>
        </div>
      </footer>
    </article>
  );
};

export default CardItem;

// Code sblmnya
// import {
//   BsBookmark,
//   //   BsBookmarkFill,
//   BsHeart,
//   //   BsHeartFill,
// } from "react-icons/bs";

// const CardItem = () => {
//   return (
//     <article className="cardItem">
//       <div className="card w-96 glass">
//         <a href="">
//           <img
//             className="border rounded-2xl border-black mb-1 h-48 w-full "
//             src="src/assets/foto/sb.jpeg"
//             alt="foto"
//           />
//           <p className="text-sm pl-2 opacity-60">
//             <b>
//               <span>News author</span> • <span>publishedAt</span>
//             </b>
//           </p>
//           <div className="flex-col px-2 w-[fit-content]">
//             <h3 className="text-2xl leading-7">
//               <strong>News title</strong>
//             </h3>
//             <p className="text-sm mt-2 mb-2">
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
//               reiciendis earum laborum nisi quas architecto adipisci cupiditate
//               aspernatur officia nostrum, iure tempore quisquam obcaecati
//               recusandae excepturi laudantium eaque error? Molestiae?
//             </p>
//           </div>
//         </a>
//       </div>
//       <footer className="align-bottom bottom-4">
//         <hr />
//         <div className="flex flex-row justify-between">
//           <button>
//             <BsHeart size={25} />
//           </button>
//           <button>
//             <BsBookmark size={25} />
//           </button>
//         </div>
//       </footer>
//     </article>
//   );
// };

// export default CardItem;
