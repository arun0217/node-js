const http = require('node:http');

const signups = [];

function validateSignup(username, email) {
  const errors = [];

  if (typeof username !== 'string' || username.trim().length < 4) {
    errors.push('Username must be at least 4 characters long.');
  }

  if (typeof email !== 'string' || !email.includes('@') || !email.includes('.')) {
    errors.push('Email must contain both "@" and ".".');
  }

  return errors;
}

const server = http.createServer((request, response) => {
  if (request.method !== 'POST' || request.url !== '/signup') {
    response.writeHead(404, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ error: 'Route not found.' }));
    return;
  }

  let body = '';

  request.on('data', (chunk) => {
    body += chunk;
  });

  request.on('end', () => {
    let signup;

    try {
      signup = JSON.parse(body);
    } catch (error) {
      response.writeHead(400, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify({ error: 'Request body must be valid JSON.' }));
      return;
    }

    if (!signup || typeof signup !== 'object' || Array.isArray(signup)) {
      response.writeHead(400, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify({ error: 'Request body must be a JSON object.' }));
      return;
    }

    const errors = validateSignup(signup.username, signup.email);
    if (errors.length > 0) {
      response.writeHead(400, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify({ errors }));
      return;
    }

    const newSignup = {
      username: signup.username.trim(),
      email: signup.email.trim()
    };
    signups.push(newSignup);

    response.writeHead(201, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ message: 'Signup successful.', user: newSignup }));
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Signup server listening on http://localhost:${port}`);
  console.log('Send a JSON POST request to /signup with username and email.');
});
