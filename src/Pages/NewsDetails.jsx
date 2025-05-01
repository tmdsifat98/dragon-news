import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import Header from "../Components/Header";
import RightNav from "../Components/SideNav/RightNav";
import { FaArrowLeft } from "react-icons/fa";

const NewsDetails = () => {
  const [news, setNews] = useState({});
  const navigate = useNavigate();
  const data = useLoaderData();
  const { id } = useParams();
  useEffect(() => {
    const singleNews = data.find((d) => d.id == id);
    setNews(singleNews);
  }, [data, id]);
  return (
    <div className="w-11/12 mx-auto">
      <Header />
      <div className="grid grid-cols-4 gap-8 mt-6 px-12 py-3">
        <main className="col-span-3 w-3/4 mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Dragon News</h2>
          <div className="px-4">
            <img className="w-full" src={news.image_url} alt="" />
            <h1 className="card-title text-3xl my-4">{news.title}</h1>
            <p className="text-base-300">{news.details}</p>
            <button
              onClick={()=>navigate(`/categories/${news.category_id}`)}
              className="btn btn-secondary my-4"
            >
              <FaArrowLeft /> All news in this category
            </button>
          </div>
        </main>
        <aside>
          <RightNav />
        </aside>
      </div>
    </div>
  );
};

export default NewsDetails;
