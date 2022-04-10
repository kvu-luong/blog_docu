import axiosClient from "./axiosClient";

const projectApi = {
    getAll: (params) => {
        const url = `${process.env.REACT_APP_POST_ENDPOINT}`;
        return axiosClient.get(url, { params });
    },

    get: (id) => {
        const url = `${process.env.REACT_APP_POST_ENDPOINT}/${id}`;
        return axiosClient.get(url);
    },
}

export default projectApi;