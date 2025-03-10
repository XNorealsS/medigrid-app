"use client";
import React, { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { 
  FiUpload, FiFileText, FiDatabase, FiSettings, 
  FiLogOut, FiMenu, FiX
} from "react-icons/fi";
import { useRouter } from "next/navigation";

// Import components
import NewsForm from "./NewsForm";
import NewsList from "./NewsList";
import EditNewsDialog from "./EditNewsDialog";
import ProfileManagement from "./ProfileManagement";


export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [newsList, setNewsList] = useState([]);
  const [message, setMessage] = useState("");
  const [editingNews, setEditingNews] = useState(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("upload");
  const [isLoading, setIsLoading] = useState(true);
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    if (status === "authenticated") fetchNews();
  }, [status]);

  const fetchNews = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${backendUrl}/api/news`);
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      
      const data = await res.json();
      console.log("Received news data:", data);
      
      // Ensure data is an array before setting it
      if (Array.isArray(data)) {
        setNewsList(data);
      } else if (data && Array.isArray(data.data)) {
        // Some APIs return data in a nested structure
        setNewsList(data.data);
      } else {
        console.error("API did not return an array:", data);
        setNewsList([]);
      }
    } catch (error) {
      console.error("Error fetching news:", error);
      setMessage("Failed to load news articles");
      setNewsList([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (formData) => {
    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        if (formData[key] !== null) {
          data.append(key, formData[key]);
        }
      });

      const res = await fetch(`${backendUrl}/api/news`, {
        method: "POST",
        body: data,
      });
      
      const result = await res.json();

      if (result.success) {
        setMessage("News created successfully!");
        fetchNews();
      } else {
        setMessage("Failed to create news: " + (result.error || "Unknown error"));
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("Error submitting form");
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
        setMessage("Failed to delete news: " + (result.error || "Unknown error"));
      }
    } catch (error) {
      console.error("Error deleting news:", error);
      setMessage("Error deleting news");
    }
  };

  const handleEditSubmit = async (formData) => {
    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        if (formData[key] !== null) {
          data.append(key, formData[key]);
        }
      });

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
        setMessage("Failed to update news: " + (result.error || "Unknown error"));
      }
    } catch (error) {
      console.error("Error updating news:", error);
      setMessage("Error updating news");
    }
  };

  // Loading state while checking session or fetching data
  if (status === "loading" || (status === "authenticated" && isLoading)) {
    return (
      <div className="min-h-screen bg-light flex items-center justify-center">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <div className="w-12 h-12 border-t-4 border-primary border-solid rounded-md animate-spin mx-auto"></div>
          <p className="mt-4 text-center text-dark">Loading...</p>
        </div>
      </div>
    );
  }

  // Redirect if not authenticated
  if (status !== "authenticated") {
    return (
      <div className="min-h-screen bg-light flex items-center justify-center">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <p className="text-center text-dark">You need to be logged in to access this page.</p>
          <Link href="/login" className="block mt-4 text-center text-primary hover:underline">
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-light">
      {/* Sidebar */}
      <aside
        className={`fixed left-0 h-full w-64 bg-accent-light shadow-md p-4 transition-transform duration-300 z-20 ${
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
            <Image src="/img/medigrid.jpg" alt="Logo" width={40} height={40} className="rounded-full" />
            <span className="text-lg font-semibold text-secondary">
              Welcome, {session.user.name}
            </span>
          </div>
          <button
            onClick={() => signOut()}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-dark transition flex items-center"
          >
            <FiLogOut className="mr-2" /> Logout
          </button>
        </nav>

        {/* Main Content Area */}
        <main className="mt-16 p-4">
          {/* Status Messages */}
          {message && (
            <div 
              className={`mb-4 p-3 rounded-md ${message.includes("successfully") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
            >
              {message}
              <button 
                className="float-right text-sm" 
                onClick={() => setMessage("")}
              >
                ✕
              </button>
            </div>
          )}

          <div className="max-w-7xl mx-auto">
          {activeTab === "upload" && (
        <div className="bg-white shadow-sm rounded-lg p-6 border-t-4 border-primary">
          <h2 className="text-lg font-semibold text-secondary mb-6">Profile</h2>
          <ProfileManagement />
        </div>
      )}
            





            {activeTab === "forms" && (
              <div className="space-y-6">
                {/* Create news form */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-xl font-semibold text-secondary mb-6">Create New News</h2>
                  <NewsForm onSubmit={handleSubmit} />
                </div>

                {/* News list */}
                <div className="mt-8">
                  <h2 className="text-xl font-semibold text-secondary mb-4">News Articles</h2>
                  <NewsList newsList={newsList} onEdit={handleEdit} onDelete={handleDelete} />
                </div>

                {/* Edit dialog */}
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
                <h2 className="text-lg font-semibold text-gray-800 mb-6">Dynamic Elements</h2>
                <p className="text-gray-600">Dynamic element management will be implemented here.</p>
              </div>
            )}

            {activeTab === "users" && (
              <div className="bg-white shadow-sm rounded-lg p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-6">Settings</h2>
                <p className="text-gray-600">Settings interface will be implemented here.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}