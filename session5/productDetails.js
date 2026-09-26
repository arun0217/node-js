const products = [
  { id: 'FL-101', name: 'Wireless Headphones', price: 2499 },
  { id: 'FL-102', name: 'Portable Speaker', price: 1899 }
];

function fakeFlipkartApi(productId) {
  if (!productId) {
    throw new Error('A product ID is required.');
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((item) => item.id === productId);
      if (!product) {
        reject(new Error(`Product ${productId} was not found.`));
        return;
      }

      resolve(product);
    }, 800);
  });
}

async function fetchProductDetails(productId) {
  try {
    const product = await fakeFlipkartApi(productId);
    return { success: true, product };
  } catch (error) {
    return {
      success: false,
      message: 'Sorry, we could not load this product. Please try again later.'
    };
  }
}

async function showProductDetails(productId) {
  const result = await fetchProductDetails(productId);

  if (result.success) {
    console.log('Product details:', result.product);
  } else {
    console.log(result.message);
  }
}

showProductDetails('FL-101');
showProductDetails('FL-999');
showProductDetails();
