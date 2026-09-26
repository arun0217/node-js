# Session 8: Files, Local Modules, and Validation

Install the dependency with `npm install`, then run an example from this directory:

- `npm run playlist` reads and displays the five lines in `playlist.txt`.
- `npm start` applies a 10% discount to a ₹1500 cart, then applies the `SAVE100` coupon.
- `npm run email` prompts for an email address and reports whether `validator` accepts it.

`discountCalculator.js` exports both `calculateDiscount(price, percent)` and `applyCoupon(price, couponCode)` for use by `app.js`.
