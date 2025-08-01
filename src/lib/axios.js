import axios from "axios";
export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "https://whatsapp-clone-1uo0.onrender.com/api",
  withCredentials: true,
});
