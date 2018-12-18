import axios from 'axios'

export const getAjaxData = (url) => {
  axios.get(url).then((res) => {
    console.log(res)
  })
};

export const increase = ({commit}) => commit('increase');
export const decrease = ({commit}) => commit('decrease');
export const showMenu = ({commit}) => commit('showMenu');
export const selectAllInCart = ({commit}) => commit('selectAllInCart');
export const selectSingleInCart = ({commit}) => commit('selectSingleInCart');
export const removeSingleInList = ({commit}) => commit('removeSingleInList');
export const changeAddress = ({commit}) => commit('changeAddress')



