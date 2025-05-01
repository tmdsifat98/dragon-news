import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import SingleNews from "./SingleNews";
const newsPromise = fetch("/news.json").then((res) => res.json());
const NewsCard = () => {
  const [newsCard, setNewsCard] = useState([]);
  const news = use(newsPromise);
  const { id } = useParams();
  useEffect(() => {
    if (id == "0") return setNewsCard(news);
    const breakingNews = news.filter((n) => n.others.is_today_pick == true);
    if (id == "1") return setNewsCard(breakingNews);
    const filteredNews = news.filter((n) => n.category_id == id);
    setNewsCard(filteredNews);
  }, [id, news]);
  return <div>{newsCard.map(singleNews=><SingleNews key={singleNews.id} singleNews={singleNews}/>)}</div>;
};

export default NewsCard;
