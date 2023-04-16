import React from "react";
import 'tailwindcss/tailwind.css';

function ArticleItem({ data }) {
  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-lg mb-3">
      <div className="flex">
        <img src={data.image} alt={data.imageCaption} className="w-40 h-40 object-cover mr-3 rounded-lg" />
        <div className="flex-1">
          <h2 className="text-xl font-bold text-white mb-2">{data.title}</h2>
          <p className="text-gray-400 mb-2">{data.datetime}</p>
          <p className="text-gray-400 mb-2">{data.authors}</p>
          <p className="text-gray-300 text-sm">{data.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ArticleItem;