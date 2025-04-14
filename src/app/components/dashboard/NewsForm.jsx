"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiUpload } from "react-icons/fi";

const NewsForm = ({ onSuccess, initialData = {}, isEdit = false }) => {
  const [formData, setFormData] = useState({
    title: initialData.title || "",
    subtitle: initialData.subtitle || "",
    content: initialData.content || "",
    image: null,
    status: null,
  });
  const [preview, setPreview] = useState(initialData.image_url || null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  
  // Get backend URL from environment or use default
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
    if (files && files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const data = new FormData();
      
      // Add all form data to FormData object
      Object.keys(formData).forEach((key) => {
        if (formData[key] !== null) {
          data.append(key, formData[key]);
        }
      });

      // Log what's being sent (for debugging)
      for (let [key, value] of data.entries()) {
        console.log(`${key}:`, value);
      }

      // Determine URL and method based on whether we're editing or creating
      const url = isEdit 
        ? `${backendUrl}/api/news/${initialData.id}` 
        : `${backendUrl}/api/news`;
      
      const method = isEdit ? "PUT" : "POST";

      const res = await fetch(url, {
        method: method,
        body: data,
      });
      
      const result = await res.json();
      
      if (result.success) {
        setMessage("Success! " + (isEdit ? "News updated." : "News created."));
        // Clear form if it's a new submission
        if (!isEdit) {
          setFormData({
            title: "",
            subtitle: "",
            content: "",
            image: null,
            status: null,
          });
          setPreview(null);
        }
        // Notify parent component of success (optional)
        if (onSuccess) onSuccess();
      } else {
        setMessage("Error: " + (result.error || "Unknown error occurred"));
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {message && (
        <div className={`p-3 rounded-md ${message.includes("Error") ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
          {message}
        </div>
      )}
      
      {preview && (
        <div className="relative h-40 w-full rounded-md border">
          <Image src={preview} alt="Preview" fill className="rounded-md object-cover" />
        </div>
      )}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
        <input
          type="text"
          name="subtitle"
          value={formData.subtitle}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          rows="4"
          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary"
          required
        ></textarea>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Image</label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            <FiUpload className="mx-auto h-12 w-12 text-gray-400" />
            <div className="flex text-sm text-gray-600">
              <label className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary-dark">
                <span>Upload an image</span>
                <input
                  type="file"
                  name="image"
                  onChange={handleChange}
                  className="sr-only"
                  accept="image/*"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Processing..." : (isEdit ? "Update News" : "Create News")}
      </button>
    </form>
  );
};

export default NewsForm;