
function searchArray(arrOb,value){
  for(let i=0;i<arrOb.length;i++){
    if(arrOb[i]===value){
      return i;
    }
  }
  return -1;
}

export const showMenu = (state) => {
  state.show = !state.show;
};

export const selectAllInCart = (state, data) => {  //全选，全不选
  if(data === true){
    state.selectedInCart = [];
    state.addedToCart.map((item)=>{
      state.selectedInCart.push(item)
    });
  }else{
    state.selectedInCart= [];
  }
};

export const selectSingleInCart = (state,data,index) =>{ //选择单个商品
  if(data){
    state.selectedInCart.push(data)
  }else{
    state.selectedInCart.splice(index,1)
  }
}

export const removeSingleInList = (state, item,index,id) => {  //删除单个商品
  if(state.addedToCart.includes(item)){
    state.addedToCart.splice(searchArray(state.addedToCart,item),1)
  }
  if(state.selectedInCart.includes(item)){
    state.selectedInCart.splice(searchArray(state.selectedInCart,item),1)
  }
};

export const changeAddress = (state,data) =>{  //修改默认收货地址
  state.orderAddress.default.userName = data.userName;
  state.orderAddress.default.phoneNumber = data.phoneNumber;
  state.orderAddress.default.address = data.address
}

export const addNewAddress = (state,data) =>{ //地址列表里，添加新的地址
  if(data.name.length && data.phone.length && data.address.length){
    state.orderAddress.list.push({
      userName: data.name,
      phoneNumber: data.phone,
      address: data.address
    })
  }else{
    return
  }
}

export const getOderTotalPrice = (state,data) =>{ //支付订单页，获取store里的订单总价
  state.OrderTotalPrice = data
}

export const showPopupHandle = (state,data) =>{ //详情页，点击弹出加购框
  state.showPopup = !state.showPopup;
  state.isBuyNow = data;
}

export const hideBox = (state,data) =>{  //弹出框组件，点击关闭弹窗
  state.showPopup = !state.showPopup;
}

export const sendVariantToCart = (state,data) => {
  state.showPopup = !state.showPopup;
  state.addedToCart.push({
    name:data.title,
    count:data.selectedCount,
    price:data.price,
    image:data.variantImage,
    size:data.selectedSize,
    color:data.selectedColor,
    id:data.id,
  })
}

