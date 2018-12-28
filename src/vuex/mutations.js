import axios from 'axios'
import _ from 'underscore'

function searchArray(arrOb, value) {
  for (let i = 0; i < arrOb.length; i++) {
    if (arrOb[i] === value) {
      return i;
    }
  }
  return -1;
}

export const _showMenu = (state) => {
  state.show = !state.show;
};

export const _selectAllInCart = (state, data) => {  //全选，全不选
  if (data === true) {
    state.selectedInCart = [];
    state.addedToCart.map((item) => {
      state.selectedInCart.push(item)
    });
  } else {
    state.selectedInCart = [];
  }
};

export const _selectSingleInCart = (state, data) => { //选择单个商品
  if (data) {
    state.selectedInCart.push(data.item)
  } else {
    state.selectedInCart.splice(data.index, 1)
  }
};

export const _removeSingleInList = (state, item) => {  //删除单个商品
  if (state.addedToCart.includes(item)) {
    state.addedToCart.splice(searchArray(state.addedToCart, item), 1)
  }
  if (state.selectedInCart.includes(item)) {
    state.selectedInCart.splice(searchArray(state.selectedInCart, item), 1)
  }
};

export const _changeAddress = (state, data) => {  //修改默认收货地址
  state.orderAddress.default.userName = data.userName;
  state.orderAddress.default.phoneNumber = data.phoneNumber;
  state.orderAddress.default.address = data.address
};

export const _addNewAddress = (state, data) => { //地址列表里，添加新的地址
  if (data.name.length && data.phone.length && data.address.length) {
    state.orderAddress.list.push({
      userName: data.name,
      phoneNumber: data.phone,
      address: data.address
    })
  } else {
    return false
  }
};

export const _getOderTotalPrice = (state, data) => { //支付订单页，获取store里的订单总价
  state.OrderTotalPrice = data
};

export const _showPopupHandle = (state, data) => { //详情页，点击弹出加购框
  state.showPopup = !state.showPopup;
  state.isBuyNow = data;
};

export const _hideBox = (state) => {  //弹出框组件，点击关闭弹窗
  state.showPopup = !state.showPopup;
};

export const _sendVariantToCart = (state, data) => {  //加入购物车，将选择的商品属性存入cart数据
  state.showPopup = !state.showPopup;
  if (!state.addedToCart.length) {
    state.addedToCart.push({
      name: data.name,
      count: data.count,
      price: data.price,
      image: data.image,
      size: data.size,
      color: data.color,
      id: data.id,
    })
  } else {
    state.addedToCart.map((item, index) => {
      if(item.id === data.id){ //如果id相同，则为相同商品
        if(_.isEqual(item, data)){  //完全一致，则是相同商品，无需push
          item.count += data.count
        }else{
          state.addedToCart.push({  //id一致，可能颜色尺码差异，需要push
            name: data.name,
            count: data.count,
            price: data.price,
            image: data.image,
            size: data.size,
            color: data.color,
            id: data.id,
          })
        }
      }else{ //id不同，商品不同，直接push进数组
        state.addedToCart.push({
          name: data.name,
          count: data.count,
          price: data.price,
          image: data.image,
          size: data.size,
          color: data.color,
          id: data.id,
        })
      }
    })
  }
};


export const _changeCurrency = (state, data) => {
  let base = 'USD';
  let _data = ['CNY', 'JPY', 'USD', 'GBP', 'CAD'];
  let symbols = 'CNY,JPY,USD,GBP,CAD';
  let url = 'http://data.fixer.io/api/latest?access_key=c83da9c15f0acb87196b680b91ec7c09&symbols=' + symbols;

  axios.get(url).then(function (res) {
    _data.map((item, index) => {
      if (item === data) {
        switch (index) {
          case 0:
            state.currencyType = 'CNY';
            state.currencyRate = res.data.rates.CNY;
            break;
          case 1:
            state.currencyType = 'JPY';
            state.currencyRate = res.data.rates.JPY;
            break;
          case 2:
            state.currencyType = 'USD';
            state.currencyRate = res.data.rates.USD;
            break;
          case 3:
            state.currencyType = 'GBP';
            state.currencyRate = res.data.rates.GBP;
            break;
          case 4:
            state.currencyType = 'CAD';
            state.currencyRate = res.data.rates.CAD;
            break;
          default:
            state.currencyType = '';
            state.currencyRate = ''
        }
      }
    })
  })
};

export const clearCartAfterPayed = (state) =>{ //购物车内清空已付款的商品
  state.selectedInCart.map((item,index)=>{
    if(state.addedToCart.includes(item)){
      console.log(item)
      state.addedToCart.splice(index,1)
    }
  });
  state.selectedInCart=[];
};

export const _getProductData = (state, id) => {
  axios.get('/product.json').then(function (res) {
    let myData = res.data.data;
    myData.map((item, index) => {
      if (item.id === id) {
        state.productData = item.product;
      }
    })
  })
};

