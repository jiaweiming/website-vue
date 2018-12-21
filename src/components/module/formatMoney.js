
const formatMoney = (money, country, currency) => {
  const formatter = new Intl.NumberFormat(country ? country : 'cn-CN', {
    style: 'currency',
    currency: currency ? currency : 'CNY',
    minimumFractionDigits: 2
  })
  return formatter.format(money / 100)
}

export default formatMoney



