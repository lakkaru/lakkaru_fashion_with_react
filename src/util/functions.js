export const priceValueFormat=value=>{
    return value ? 'LKR: ' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')+ '.00':'';
}