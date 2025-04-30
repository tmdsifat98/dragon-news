import React, { Suspense, use } from "react";
import { Link } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());
const LeftNav = () => {
  const categories = use(categoryPromise);
  return (
    <div className="px-4">
      <h2 className="mb-3 font-bold text-xl ">All category</h2>
      <Suspense fallback="Loading.....">
        <div className="flex flex-col gap-2">
          {categories.map((category) => (
            <Link
              to={`/categories/${category.id}`}
              className="btn"
              key={category.id}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default LeftNav;
