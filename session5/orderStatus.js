function getOrderStatus(orderId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!orderId) {
        reject(new Error('An order ID is required.'));
        return;
      }

      resolve({ orderId, status: 'Shipped' });
    }, 1000);
  });
}

async function showOrderStatus(orderId) {
  try {
    const order = await getOrderStatus(orderId);
    console.log(`Order ${order.orderId}: ${order.status}`);
  } catch (error) {
    console.error('Could not get the order status:', error.message);
  }
}

showOrderStatus('ORD-2048');
showOrderStatus();
