

export default {
    'javascript' : `const options = {
  method: 'POST',
  headers: {
    'X-App-ID': 'YOUR_APP_ID',
    Authorization: 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({email:"emailtoadd@gmail.com"})
};

fetch('https://waitlyst.vercel.app/api/waitlyst/join', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));`,
} as {[x: string] : string}