import axios from 'axios';

// Função para definir o token nos cabeçalhos do Axios
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;
