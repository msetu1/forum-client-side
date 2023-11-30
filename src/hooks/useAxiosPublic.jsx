import axios from "axios";

const axiosPublic = axios.create({
  baseURL:
    "https://assignment12-server-side-l17acfsz7-mst-setu-akters-projects.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
