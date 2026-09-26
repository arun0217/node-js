function calculateDiscount(price, percent) {
  return price - (price * percent) / 100;
}

function applyCoupon(price, couponCode) {
  if (couponCode === 'SAVE100') {
    return Math.max(0, price - 100);
  }

  return price;
}

module.exports = { calculateDiscount, applyCoupon };
