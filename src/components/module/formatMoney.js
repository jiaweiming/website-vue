
import store from '../../vuex/stores'
const formatMoney = (money) => {

  const formatter = new Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: store.state.currencyType,
    minimumFractionDigits: 2
  })
  return formatter.format(money*store.state.currencyRate / 100)
}

export default formatMoney



