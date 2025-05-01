import { FaStar, FaRegEye, FaShareAlt, FaBookmark } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { Link } from "react-router";

const SingleNews = ({ singleNews }) => {
  const { id,title, rating, total_view, author, image_url, details } = singleNews;

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="card w-full bg-base-100 shadow-xl mb-6">
      <div className="flex items-center bg-base-200 justify-between p-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold text-sm">{author.name}</p>
            <p className="text-xs text-gray-500">
              {formatDate(author.published_date)}
            </p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500">
          <FaBookmark size={20} className="cursor-pointer" />
          <FaShareAlt size={20} className="cursor-pointer" />
        </div>
      </div>
      <h2 className="card-title py-5 px-3 text-lg">{title}</h2>
      <figure>
        <img
          src={image_url}
          alt="news"
          className="w-full h-96 px-5 rounded-lg object-cover"
        />
      </figure>

      <div className="card-body">
        <p className="text-sm text-gray-700">
          {details.length > 300 ? details.slice(0, 300) + "..." : details}
        </p>
        <Link to={`/news/${id}`} className="text-orange-500 w-fit font-semibold cursor-pointer">
          Read More
        </Link>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-1 text-orange-400">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`w-4 h-4 ${
                  i < rating.number ? "text-orange-500" : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-gray-700 text-sm font-semibold ml-1">
              {rating.number}
            </span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <FaRegEye className="w-4 h-4" />
            <span className="text-sm">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
