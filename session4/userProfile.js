const users = [
  { username: 'maya', name: 'Maya Patel', email: 'maya@example.com' },
  { username: 'liam', name: 'Liam Chen', email: 'liam@example.com' },
  { username: 'noah', name: 'Noah Williams', email: 'noah@example.com' }
];

function getUserProfile(username, callback) {
  setTimeout(() => {
    const user = users.find((profile) => profile.username === username);
    callback(user || null);
  }, 2000);
}

getUserProfile('maya', (profile) => {
  if (profile) {
    console.log('User profile:', profile);
  } else {
    console.log('User not found.');
  }
});