// Dashboard.jsx
"use client";
import Image from "next/image";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiUpload, FiFileText, FiDatabase, FiUsers, FiSettings, FiLogOut, FiMenu, FiX } from "react-icons/fi";
import styles from '@/app/styles/dashboard.module.css';

export default function Dashboard() {
  useEffect(() => {
    const style = document.createElement('style');
    style.id = 'dashboard-tailwind-styles';
    style.innerHTML = `
      .min-h-screen { min-height: 100vh; }
      .bg-primary { background-color: #40c9b2; }
      .bg-secondary { background-color: #fbbc5c; }
      .bg-light { background-color: #f9fbfa; }
      .bg-accent { background-color: #a6e7dc; }
      .bg-accent-light { background-color: #ccf9f6; }
      .bg-warm { background-color: #f6d5a1; }
      .bg-neutral { background-color: #dcd4c4; }
      .hover\\:bg-primary-dark:hover { background-color: #4fb99c; }
      .hover\\:bg-accent-hover:hover { background-color: #e1fbfb; }
      .text-primary { color: #40c9b2; }
      .text-secondary { color: #fbbc5c; }
      .text-dark { color: #4fb99c; }
      .border-primary { border-color: #40c9b2; }
      .border-accent { border-color: #a6e7dc; }
      .bg-white { background-color: white; }
      .text-white { color: white; }
      .shadow-sm { box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05); }
      .shadow-md { box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06); }
      .rounded-md { border-radius: 0.375rem; }
      .rounded-lg { border-radius: 0.5rem; }
      .flex { display: flex; }
      .inline-flex { display: inline-flex; }
      .hidden { display: none; }
      .h-5 { height: 1.25rem; }
      .h-12 { height: 3rem; }
      .h-16 { height: 4rem; }
      .w-5 { width: 1.25rem; }
      .w-12 { width: 3rem; }
      .w-64 { width: 16rem; }
      .w-full { width: 100%; }
      .max-w-7xl { max-width: 80rem; }
      .flex-1 { flex: 1 1 0%; }
      .items-center { align-items: center; }
      .justify-center { justify-content: center; }
      .justify-between { justify-content: space-between; }
      .space-y-1 > * + * { margin-top: 0.25rem; }
      .space-y-6 > * + * { margin-top: 1.5rem; }
      .p-2 { padding: 0.5rem; }
      .p-4 { padding: 1rem; }
      .p-6 { padding: 1.5rem; }
      .px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
      .px-4 { padding-left: 1rem; padding-right: 1rem; }
      .py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }
      .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
      .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
      .mr-2 { margin-right: 0.5rem; }
      .mr-3 { margin-right: 0.75rem; }
      .mr-4 { margin-right: 1rem; }
      .ml-4 { margin-left: 1rem; }
      .mb-6 { margin-bottom: 1.5rem; }
      .text-sm { font-size: 0.875rem; }
      .text-lg { font-size: 1.125rem; }
      .text-xl { font-size: 1.25rem; }
      .font-medium { font-weight: 500; }
      .font-semibold { font-weight: 600; }
      .relative { position: relative; }
      .fixed { position: fixed; }
      .inset-y-0 { top: 0px; bottom: 0px; }
      .left-0 { left: 0px; }
      .z-10 { z-index: 10; }
      .border { border-width: 1px; }
      .border-t-4 { border-top-width: 4px; }
      .border-transparent { border-color: transparent; }
      .transition { transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
      .cursor-pointer { cursor: pointer; }
      @media (min-width: 768px) {
        .md\\:block { display: block; }
        .md\\:hidden { display: none; }
        .md\\:relative { position: relative; }
        .md\\:ml-0 { margin-left: 0px; }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.getElementById('dashboard-tailwind-styles')?.remove();
    };
  }, []);

  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("upload");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // useEffect(() => {
  //   if (status === "loading") return;
  //   if (!session) {
  //     router.push("/v1/login");
  //   }
  // }, [session, status, router]);

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

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  const DataInputForm = () => (
    <form className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-dark">Title</label>
        <input
          type="text"
          id="title"
          className="mt-1 block w-full px-3 py-2 border border-accent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Enter title"
        />
      </div>
      
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-dark">Description</label>
        <textarea
          id="description"
          rows="4"
          className="mt-1 block w-full px-3 py-2 border border-accent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Enter description"
        ></textarea>
      </div>
      
      <div>
        <label htmlFor="file" className="block text-sm font-medium text-dark">Upload File</label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-accent border-dashed rounded-md">
          <div className="space-y-1 text-center">
            <FiUpload className="mx-auto h-12 w-12 text-primary" />
            <div className="flex text-sm text-dark">
              <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-secondary focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary">
                <span>Upload a file</span>
                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-dark">PNG, JPG, PDF up to 10MB</p>
          </div>
        </div>
      </div>
      
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition"
        >
          Submit
        </button>
      </div>
    </form>
  );

  return (
<div className="min-h-screen bg-light">
  {/* Top Navigation Bar */}
  <div className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between h-16">
        <div className="flex items-center">
          <button 
            className="inline-flex items-center justify-center p-2 rounded-md text-primary md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
          <div className="flex items-center ml-4 md:ml-0">
            {/* Logo */}
           
        <Image src="/img/medigrid.jpg" alt="Logo" width={100} height={100}></Image>
            
            <div className="flex flex-col">
              <h1 className="text-xl font-semibold text-secondary">Dashboard</h1>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-dark mr-4">{session.user?.name || "User"}</span>
          <button
            onClick={() => signOut()}
            className="inline-flex items-center px-3 py-1 border border-transparent text-sm rounded-md text-white bg-primary hover:bg-primary-dark transition"
          >
            <FiLogOut className="mr-2" />
            Logout
          </button>
        </div>
      </div>
    </div>
  </div>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className={`${
          mobileMenuOpen ? "block" : "hidden"
        } md:block w-64 bg-accent-light shadow-md z-10 md:relative fixed inset-y-0 left-0 ${styles.dashboardSidebar}`}>
          <div className="h-full px-3 py-4 overflow-y-auto">
            <nav className="space-y-1">
              <button
                onClick={() => handleTabChange("upload")}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full transition ${
                  activeTab === "upload"
                    ? "bg-accent text-primary"
                    : "text-dark hover:bg-accent-hover"
                }`}
              >
                <FiUpload className="mr-3 h-5 w-5" />
                Upload Data
              </button>
              <button
                onClick={() => handleTabChange("forms")}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full transition ${
                  activeTab === "forms"
                    ? "bg-accent text-primary"
                    : "text-dark hover:bg-accent-hover"
                }`}
              >
                <FiFileText className="mr-3 h-5 w-5" />
                Input Forms
              </button>
              <button
                onClick={() => handleTabChange("data")}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full transition ${
                  activeTab === "data"
                    ? "bg-accent text-primary"
                    : "text-dark hover:bg-accent-hover"
                }`}
              >
                <FiDatabase className="mr-3 h-5 w-5" />
                View Data
              </button>
              <button
                onClick={() => handleTabChange("users")}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full transition ${
                  activeTab === "users"
                    ? "bg-accent text-primary"
                    : "text-dark hover:bg-accent-hover"
                }`}
              >
                <FiUsers className="mr-3 h-5 w-5" />
                Users
              </button>
              <button
                onClick={() => handleTabChange("settings")}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full transition ${
                  activeTab === "settings"
                    ? "bg-accent text-primary"
                    : "text-dark hover:bg-accent-hover"
                }`}
              >
                <FiSettings className="mr-3 h-5 w-5" />
                Settings
              </button>
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {activeTab === "upload" && (
              <div className="bg-white shadow-sm rounded-lg p-6 border-t-4 border-primary">
                <h2 className="text-lg font-semibold text-secondary mb-6">Upload Data</h2>
                <DataInputForm />
              </div>
            )}

            {activeTab === "forms" && (
              <div className="bg-white shadow-sm rounded-lg p-6 border-t-4 border-primary">
                <h2 className="text-lg font-semibold text-secondary mb-6">Input Forms</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <button className="p-4 border rounded-md bg-accent-light hover:bg-accent transition text-dark">
                    Product Information
                  </button>
                  <button className="p-4 border rounded-md bg-accent-light hover:bg-accent transition text-dark">
                    Customer Data
                  </button>
                  <button className="p-4 border rounded-md bg-accent-light hover:bg-accent transition text-dark">
                    Survey Responses
                  </button>
                  <button className="p-4 border rounded-md bg-accent-light hover:bg-accent transition text-dark">
                    Employee Records
                  </button>
                </div>
              </div>
            )}

            {activeTab === "data" && (
              <div className="bg-white shadow-sm rounded-lg p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-6">View Data</h2>
                <p className="text-gray-600">Data view will be implemented here.</p>
              </div>
            )}

            {/* Users */}
            {activeTab === "users" && (
              <div className="bg-white shadow-sm rounded-lg p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-6">User Management</h2>
                <p className="text-gray-600">User management interface will be implemented here.</p>
              </div>
            )}

            {/* Settings */}
            {activeTab === "settings" && (
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