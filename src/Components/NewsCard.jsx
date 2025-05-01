import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import SingleNews from "./SingleNews";

const NewsCard = () => {
  const [newsCard, setNewsCard] = useState([]);
  const news = useLoaderData()
  const { id } = useParams();
  useEffect(() => {
    if (id == "0") return setNewsCard(news);
    const breakingNews = news.filter((n) => n.others.is_today_pick == true);
    if (id == "1") return setNewsCard(breakingNews);
    const filteredNews = news.filter((n) => n.category_id == id);
    setNewsCard(filteredNews);
  }, [id, news]);
  return <div className="mt-6">{newsCard.map(singleNews=><SingleNews key={singleNews.id} singleNews={singleNews}/>)}</div>;
};

export default NewsCard;
