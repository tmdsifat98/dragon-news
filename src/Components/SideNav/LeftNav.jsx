import React, { Suspense, use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());
const LeftNav = () => {
  const categories = use(categoryPromise);
  return (
    <div className="px-4">
      <h2 className="mb-3 font-bold text-xl ">All category</h2>
      <Suspense fallback="Loading.....">
        <div className="cat-nav flex flex-col gap-2">
          {categories.map((category) => (
            <NavLink
              to={`/categories/${category.id}`}
              className="btn"
              key={category.id}
            >
              {category.name}
            </NavLink>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default LeftNav;
