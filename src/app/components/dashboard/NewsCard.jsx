"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const NewsCard = ({ news, onEdit, onDelete }) => {
  const [imageError, setImageError] = useState(false);
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";
  
  const imageUrl = news.image_url 
    ? (news.image_url.includes('http') 
        ? news.image_url 
        : `${backendUrl}${news.image_url}`)
    : null;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
      {/* News Image */}
      {imageUrl && !imageError ? (
        <div className="relative h-44 w-full">
          <Image 
            src={imageUrl}
            alt={news.title || "News image"} 
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-t-lg object-cover"
            onError={() => setImageError(true)}
          />
        </div>
      ) : (
        <div className="h-44 w-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-400">
            {imageError ? "Error loading image" : "No image available"}
          </span>
        </div>
      )}

      {/* News Content */}
      <div className="p-4 flex flex-col justify-between h-52">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{news.title}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{news.subtitle}</p>
        </div>

        {/* Read More Button */}
        <div className="mt-2">
          <a href={`/news/${news.id}`} className="text-blue-600 font-semibold text-sm hover:underline">
            BACA SELENGKAPNYA
          </a>
        </div>

        {/* Author & Date Info */}
        <div className="text-xs text-gray-500 mt-3">
          <span>{news.author || "Anonim"}</span> • <span>{news.date || "Tanggal tidak tersedia"}</span>
        </div>

        {/* Edit & Delete Buttons */}
        <div className="mt-2 flex justify-end space-x-2">
          <button onClick={() => onEdit(news)} className="p-1 text-primary hover:text-primary-dark transition-colors">
            <FiEdit2 size={16} />
          </button>
          <button onClick={() => onDelete(news.id)} className="p-1 text-red-600 hover:text-red-800 transition-colors">
            <FiTrash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;