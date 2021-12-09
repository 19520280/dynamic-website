const numberWithCommas = (num) => `đ${num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`

export default numberWithCommas