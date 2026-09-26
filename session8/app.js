const { calculateDiscount, applyCoupon } = require('./discountCalculator');

const cartTotal = 1500;
const discountedTotal = calculateDiscount(cartTotal, 10);
const finalTotal = applyCoupon(discountedTotal, 'SAVE100');

console.log(`Cart total: \u20B9${cartTotal}`);
console.log(`After 10% discount: \u20B9${discountedTotal}`);
console.log(`After SAVE100 coupon: \u20B9${finalTotal}`);
