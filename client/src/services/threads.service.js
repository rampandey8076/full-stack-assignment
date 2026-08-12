import axios from "axios";

export async function getThreads({ search = "", sort = "newest" } = {}) {
  const params = {};

  if (search.trim()) {
    params.search = search.trim();
  }

  if (sort) {
    params.sort = sort;
  }

  const response = await axios.get("/api/threads", { params });

  return response.data;
}
