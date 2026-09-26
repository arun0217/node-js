function getUserById(userId) {
  if (typeof userId !== 'number' || !Number.isFinite(userId) || userId <= 0) {
    throw new Error('Invalid userId');
  }

  return {
    id: userId,
    name: 'Maya Patel',
    email: 'maya@example.com'
  };
}

try {
  console.log(getUserById(1));
} catch (error) {
  console.error(error.message);
}

try {
  console.log(getUserById(-1));
} catch (error) {
  console.error('Could not find the user:', error.message);
}
