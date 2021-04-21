//Path: https://jsonplaceholder.typicode.com/posts
export const handlers = ({ axios }) => ({
  get: async (url) => {
    const { data } = await axios.get(`${url}`);
    return data
  },
  /*
  post: async (url, req) => {
    const { body } = req
    const { data } = await axios.post(`${url}`, body);
    return data;
  },
  put: async (url, req) => {
    const { body } = req
    const { id } = req.params
    await axios.put(`${url}/${id}`, body);
    const response = {
      message: 'Change successful'
    }
    return response;
  },
  delete: async (url, req) => {
    const { id } = req.params
    await axios.delete(`${url}/${id}`);
    const data = {
      message: `the object with id: ${id} was deleted`
    }
    return data;
  }*/
});


