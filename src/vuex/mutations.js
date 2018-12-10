export const increase = (state,m) => {
  state.count += m
};
export const decrease = (state,n) => {
  state.count -= n
};

export const getAjaxData = (state,res)=>{
  state.data = res.data
};


