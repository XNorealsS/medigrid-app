"use client";
import React from "react";
import { FiX } from "react-icons/fi";
import Dialog from "./Dialog";
import NewsForm from "./NewsForm";

const EditNewsDialog = ({ isOpen, onClose, news, onSubmit }) => (
  <Dialog isOpen={isOpen} onClose={onClose}>
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold">Edit News</h2>
      <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
        <FiX size={24} />
      </button>
    </div>
    <NewsForm onSubmit={onSubmit} initialData={news} isEdit={true} />
  </Dialog>
);

export default EditNewsDialog;