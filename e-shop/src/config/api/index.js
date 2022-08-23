import axios from "axios";

const baseURL = "https://63031cffc6dda4f287c338c8.mockapi.io/api/v1/productcap/";

const mockApi = axios.create({
	baseURL: String(baseURL)
});

export default mockApi;
