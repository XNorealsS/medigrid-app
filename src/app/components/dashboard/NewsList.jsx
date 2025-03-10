"use client";
import React from "react";
import NewsCard from "./NewsCard";

const NewsList = ({ newsList, onEdit, onDelete }) => {
  // Check if newsList is an array and has items
  if (!Array.isArray(newsList) || newsList.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm mt-4 text-center">
        <p className="text-gray-500">No news articles available</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {newsList.map((news) => (
        <NewsCard key={news.id} news={news} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default NewsList;