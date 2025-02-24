"use client";
import React, { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { 
  FiUpload, FiFileText, FiDatabase, FiSettings, 
  FiLogOut, FiMenu, FiX, FiEdit2, FiTrash2 
} from "react-icons/fi";
import { useRouter } from "next/navigation";

// --- Dialog Component ---
const Dialog = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md m-4">
        {children}
      </div>
    </div>
  );
};

// --- NewsForm Component ---
const NewsForm = ({ onSubmit, initialData = {}, isEdit = false }) => {
  const [formData, setFormData] = useState({
    title: initialData.title || "",
    subtitle: initialData.subtitle || "",
    content: initialData.content || "",
    image: null,
  });
  const [preview, setPreview] = useState(initialData.image_url || null);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {preview && (
        <div className="relative h-40 w-full rounded-md border">
          <Image src={preview} alt="Preview" fill objectFit="cover" className="rounded-md" />
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
      >
        {isEdit ? "Update News" : "Create News"}
      </button>
    </form>
  );
};

const NewsCard = ({ news, onEdit, onDelete }) => {
  const [imageError, setImageError] = useState(false);
  
  const imageUrl = news.image_url 
    ? (news.image_url.includes('http') 
        ? news.image_url 
        : `http://localhost:5000${news.image_url}`)
    : null;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">

      {/* Gambar Berita */}
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
        <div className="h-44 w-44 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-400">
            {imageError ? "Error loading image" : "No image available"}
          </span>
        </div>
      )}

      {/* Konten Berita */}
      <div className="p-4 flex flex-col justify-between h-52">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{news.title}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{news.subtitle}</p>
        </div>

        {/* Tombol Baca Selengkapnya */}
        <div className="mt-2">
          <a href={`/news/${news.id}`} className="text-blue-600 font-semibold text-sm hover:underline">
            BACA SELENGKAPNYA
          </a>
        </div>

        {/* Informasi Penulis & Tanggal */}
        <div className="text-xs text-gray-500 mt-3">
          <span>{news.author || "Anonim"}</span> • <span>{news.date || "Tanggal tidak tersedia"}</span>
        </div>

        {/* Tombol Edit & Hapus */}
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

// --- NewsList Component ---
const NewsList = ({ newsList, onEdit, onDelete }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {newsList.map((news) => (
      <NewsCard key={news.id} news={news} onEdit={onEdit} onDelete={onDelete} />
    ))}
  </div>
);

// --- EditNewsDialog Component ---
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

// --- Dashboard Component ---
export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [newsList, setNewsList] = useState([]);
  const [message, setMessage] = useState("");
  const [editingNews, setEditingNews] = useState(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("forms");
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    if (status === "authenticated") fetchNews();
  }, [status]);

  const fetchNews = async () => {
    try {
      const res = await fetch(`${backendUrl}/api/news`);
      const data = await res.json();
      console.log("Received news data:", data); // Add this line
      setNewsList(data);
    } catch (error) {
      console.error("Error fetching news", error);
    }
  };
  const handleSubmit = async (formData) => {
    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => data.append(key, formData[key]));

      const res = await fetch(`${backendUrl}/api/news`, {
        method: "POST",
        body: data,
      });
      const result = await res.json();

      if (result.success) {
        setMessage("News created successfully!");
        fetchNews();
      } else {
        setMessage("Failed to create news: " + result.error);
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setMessage("Error submitting form");
    }
  };

  const validateImageUrl = (url) => {
    if (!url) return null;
    
    // Ensure URL is properly formatted
    try {
      const validUrl = new URL(url);
      // If it's a relative URL, prepend the backend URL
      if (url.startsWith('/uploads/')) {
        return `${backendUrl}${url}`;
      }
      return url;
    } catch {
      return null;
    }
  };

  const handleEdit = (news) => {
    setEditingNews(news);
    setIsEditDialogOpen(true);
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this news item?")) return;

    try {
      const res = await fetch(`${backendUrl}/api/news/${id}`, {
        method: "DELETE",
      });
      const result = await res.json();

      if (result.success) {
        setMessage("News deleted successfully!");
        fetchNews();
      } else {
        setMessage("Failed to delete news: " + result.error);
      }
    } catch (error) {
      console.error("Error deleting news", error);
      setMessage("Error deleting news");
    }
  };

  const handleEditSubmit = async (formData) => {
    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => data.append(key, formData[key]));

      const res = await fetch(`${backendUrl}/api/news/${editingNews.id}`, {
        method: "PUT",
        body: data,
      });
      const result = await res.json();

      if (result.success) {
        setMessage("News updated successfully!");
        setIsEditDialogOpen(false);
        fetchNews();
      } else {
        setMessage("Failed to update news: " + result.error);
      }
    } catch (error) {
      console.error("Error updating news", error);
      setMessage("Error updating news");
    }
  };

  if (status === "loading" || !session) {
    return (
      <div className="min-h-screen bg-light flex items-center justify-center">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <div className="w-12 h-12 border-t-4 border-primary border-solid rounded-md animate-spin mx-auto"></div>
          <p className="mt-4 text-center text-dark">Loading...</p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex min-h-screen bg-light">
      {/* Sidebar */}
      <aside
        className={`fixed left-0 h-full w-64 bg-accent-light shadow-md p-4 transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="mb-6">
          <h2 className="text-xl font-bold text-primary">Dashboard</h2>
        </div>
        <nav className="space-y-4">
          <button
            onClick={() => handleTabChange("upload")}
            className={`w-full text-left px-3 py-2 rounded-md transition ${
              activeTab === "upload" ? "bg-accent text-primary" : "text-dark hover:bg-accent-hover"
            }`}
          >
            <FiUpload className="inline mr-2 h-5 w-5" /> Profile 
          </button>
          <button
            onClick={() => handleTabChange("forms")}
            className={`w-full text-left px-3 py-2 rounded-md transition ${
              activeTab === "forms" ? "bg-accent text-primary" : "text-dark hover:bg-accent-hover"
            }`}
          >
            <FiFileText className="inline mr-2 h-5 w-5" /> Upload Blog
          </button>
          <button
            onClick={() => handleTabChange("data")}
            className={`w-full text-left px-3 py-2 rounded-md transition ${
              activeTab === "data" ? "bg-accent text-primary" : "text-dark hover:bg-accent-hover"
            }`}
          >
            <FiDatabase className="inline mr-2 h-5 w-5" /> Dynamic Element
          </button>
          <button
            onClick={() => handleTabChange("users")}
            className={`w-full text-left px-3 py-2 rounded-md transition ${
              activeTab === "users" ? "bg-accent text-primary" : "text-dark hover:bg-accent-hover"
            }`}
          >
            <FiSettings className="inline mr-2 h-5 w-5" /> Settings
          </button>
        </nav>
        <Link
          href="/"
          className="block mt-6 px-3 py-2 text-sm font-medium rounded-md text-dark hover:bg-accent-hover"
        >
          Back
        </Link>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1 ml-0 md:ml-64">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 h-16 bg-white shadow-md flex items-center justify-between px-4 z-10 md:ml-64">
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
          <div className="flex items-center space-x-4">
            <Image src="/img/medigrid.jpg" alt="Logo" width={100} height={100} className="rounded-full" />
            <span className="text-lg font-semibold text-secondary">
              Welcome, {session.user.name}
            </span>
          </div>
          <button
            onClick={() => signOut()}
            className="px-6 py-3 bg-primary text-white rounded-md hover:bg-dark transition flex items-center"
          >
            <FiLogOut className="mr-2" /> Logout
          </button>
        </nav>
  


      {/* Main Content */}
      <main className="mt-16 p-4">
      <div className="max-w-7xl mx-auto">
          {activeTab === "upload" && (
            <div className="bg-white shadow-sm rounded-lg p-6 border-t-4 border-primary">
              <h2 className="text-lg font-semibold text-secondary mb-6">Upload Data</h2>
            </div>
          )}

          {activeTab === "forms" && (
            <div className="space-y-6">
              {/* Form untuk membuat berita baru */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-secondary mb-6">Create New News</h2>
                <NewsForm onSubmit={handleSubmit} />
              </div>

              {/* Daftar berita dalam grid */}
              <NewsList newsList={newsList} onEdit={handleEdit} onDelete={handleDelete} />

              {/* Dialog untuk mengedit berita */}
              <EditNewsDialog
                isOpen={isEditDialogOpen}
                onClose={() => setIsEditDialogOpen(false)}
                news={editingNews}
                onSubmit={handleEditSubmit}
              />
            </div>
          )}

          {activeTab === "data" && (
            <div className="bg-white shadow-sm rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-6">View Data</h2>
              <p className="text-gray-600">Data view will be implemented here.</p>
            </div>
          )}

          {activeTab === "users" && (
            <div className="bg-white shadow-sm rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-6">User Management</h2>
              <p className="text-gray-600">User management interface will be implemented here.</p>
            </div>
          )}
        </div>
      </main>
    </div>
    </div>
    
  );
}
