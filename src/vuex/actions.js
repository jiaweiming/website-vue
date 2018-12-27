//提交每一次的数据层操作
export const getAjaxData = ({commit}) => commit('getData');
export const showMenu = ({commit}) => commit('showMenu');
export const selectAllInCart = ({commit}) => commit('selectAllInCart');
export const selectSingleInCart = ({commit}) => commit('selectSingleInCart');
export const removeSingleInList = ({commit}) => commit('removeSingleInList');
export const changeAddress = ({commit}) => commit('changeAddress')
export const addNewAddress = ({commit}) => commit('addNewAddress')
export const getOderTotalPrice = ({commit}) => commit('getOderTotalPrice')
export const showPopupHandle = ({commit}) => commit('showPopupHandle')
export const hideBox = ({commit}) => commit('hideBox')
export const sendVariantToCart = ({commit}) => commit('sendVariantToCart')
export const getProductData = ({commit}) => commit('getProductData')




