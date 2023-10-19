import {
  BsBookmark,
  //   BsBookmarkFill,
  BsHeart,
  //   BsHeartFill,
} from "react-icons/bs";

const CardItem = () => {
  return (
    <article className="cardItem">
      <div className="card w-96 glass">
        <a href="">
          <img
            className="border rounded-2xl border-black mb-1 h-48 w-full "
            src="src/assets/foto/sb.jpeg"
            alt="foto"
          />
          <p className="text-sm pl-2 opacity-60">
            <b>
              <span>News author</span> • <span>publishedAt</span>
            </b>
          </p>
          <div className="flex-col px-2 w-[fit-content]">
            <h3 className="text-2xl leading-7">
              <strong>News title</strong>
            </h3>
            <p className="text-sm mt-2 mb-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
              reiciendis earum laborum nisi quas architecto adipisci cupiditate
              aspernatur officia nostrum, iure tempore quisquam obcaecati
              recusandae excepturi laudantium eaque error? Molestiae?
            </p>
          </div>
        </a>
      </div>
      <footer className="align-bottom bottom-4">
        <hr />
        <div className="flex flex-row justify-between">
          <button>
            <BsHeart size={25} />
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
