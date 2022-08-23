import apiMock from "../config/api";

const api = {
	getAll: (page = 1, limit = 10, sortBy = "", order = "") => apiMock.get(`?page=${page}&limit=${limit}&sortBy=${sortBy}&order=${order}`),
	getById: (id) => apiMock.get(`/${id}`)
};

export default api;
