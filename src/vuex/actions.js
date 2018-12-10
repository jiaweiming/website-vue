import axios from 'axios'

export const increase = ({commit}) => commit('increase');
export const decrease = ({commit}) => commit('decrease');
export const getAjaxData = (url) => {
  axios.get(url).then((res) => {
    console.log(res)
  })
};

