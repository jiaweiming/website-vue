//提交每一次的数据层操作
export const showMenu = ({commit}) => commit('_showMenu');
export const selectAllInCart = ({commit}, data) => commit('_selectAllInCart', data);
export const selectSingleInCart = ({commit},data) => commit('_selectSingleInCart',data);
export const removeSingleInList = ({commit}, item) => commit('_removeSingleInList', item);
export const changeAddress = ({commit}, data) => commit('_changeAddress', data);
export const addNewAddress = ({commit}, data) => commit('_addNewAddress', data);
export const getOderTotalPrice = ({commit}, data) => commit('_getOderTotalPrice', data);
export const showPopupHandle = ({commit}, data) => commit('_showPopupHandle', data);
export const hideBox = ({commit}, data) => commit('_hideBox', data);
export const sendVariantToCart = ({commit}, selectProduct) => commit('_sendVariantToCart', selectProduct);
export const getProductData = ({commit}, id) => commit('_getProductData', id);
export const changeCurrency = ({commit}, data) => commit('_changeCurrency', data);
export const clearCart = ({commit}) => commit('clearCartAfterPayed');





