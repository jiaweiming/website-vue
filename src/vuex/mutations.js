function searchArray(arrOb,value){
  for(let i=0;i<arrOb.length;i++){
    if(arrOb[i]===value){
      return i;
    }
  }
  return -1;
}

export const getAjaxData = (state, res) => {
  state.data = res.data
};

export const showMenu = (state) => {
  state.show = !state.show;
  console.log(state.show)
};

export const selectAllInCart = (state, data) => {  //全选
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

export const addNewAddress = (state,data) =>{
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

export const getOderTotalPrice = (state,data) =>{
  state.OrderTotalPrice = data
}


