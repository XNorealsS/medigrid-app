// components/ProfileManagement.js
import { useState, useEffect } from "react";
import axios from "axios";

const ProfileManagement = () => {
  const [profile, setProfile] = useState(null);
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    description: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Ambil data profil saat komponen pertama kali dimuat
    axios
      .get("http://localhost:5000/api/company")
      .then((response) => {
        // Jika data profil ditemukan (dan bukan pesan error), set ke state
        if (response.data && !response.data.message) {
          setProfile(response.data);
          setForm({
            name: response.data.name || "",
            address: response.data.address || "",
            phone: response.data.phone || "",
            email: response.data.email || "",
            description: response.data.description || "",
          });
        }
      })
      .catch((error) => {
        console.error("Gagal mengambil data profil:", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res;
      // Jika profil sudah ada, update dengan PUT; jika belum, buat dengan POST
      if (profile) {
        res = await axios.put("http://localhost:5000/api/company", form, {
          headers: { "Content-Type": "application/json" },
        });
      } else {
        res = await axios.post("http://localhost:5000/api/company", form, {
          headers: { "Content-Type": "application/json" },
        });
      }
      setProfile(res.data);
      setMessage("Profil perusahaan berhasil disimpan.");
    } catch (error) {
      console.error("Error simpan profil:", error.response.data);
      setMessage("Terjadi kesalahan saat menyimpan data: " + error.response.data.error);
    }
  };
  

  return (
    <div>
      {message && <p className="mb-4 text-green-500">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Nama Perusahaan:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Alamat:</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Telepon:</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Deskripsi:</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
        >
          {profile ? "Update Profil" : "Buat Profil"}
        </button>
      </form>
    </div>
  );
};

export default ProfileManagement;
