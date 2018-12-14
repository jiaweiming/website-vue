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
  if(data === false){
    state.selectedInCart = [];
    console.log(state.addedToCart)
    state.addedToCart.map((item)=>{
      state.selectedInCart.push(item)
    });
  }else{
    state.selectedInCart.length = 0
  }
};


export const deleteSingleInCart = (state, item) => {  //单个选择取消
  if(state.selectedInCart.includes(item)){
    state.selectedInCart.splice(searchArray(state.selectedInCart,item),1)
  }
  console.log(state.selectedInCart)
};


export const removeSingleInList = (state, item) => {  //删除整行
  if(state.addedToCart.includes(item)){
    state.addedToCart.splice(searchArray(state.addedToCart,item),1)
  }
  if(state.selectedInCart.includes(item)){
    state.selectedInCart.splice(searchArray(state.selectedInCart,item),1)
  }
};

export const selectSingleInCart = function (state, data) {  //单选
  if(!state.selectedInCart.includes(data)){
    state.selectedInCart.push(data)
  }
  console.log(state.selectedInCart+'添加')
};
