function searchArray(arrOb,value){
  for(let i=0;i<arrOb.length;i++){
    if(arrOb[i]===value){
      return i;
    }
  }
  return -1;
}

export const increase = (state, m) => {
  state.count += m
};
export const decrease = (state, n) => {
  state.count -= n
};

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

export const changeAddress = (state,data) =>{
  state.orderAddress.default.userName = data.userName;
  state.orderAddress.default.phoneNumber = data.phoneNumber;
  state.orderAddress.default.address = data.address
}

