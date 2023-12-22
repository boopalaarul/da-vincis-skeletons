//the lesson here is this: Express is not meant to literally serve React.
//Instead, a free standing React app on a different server will contact
//an API running on Express... the server of the frontend is not the backend.


import { createRoot } from 'react-dom/client';

// Clear the existing HTML content
//document.body.innerHTML = '<div id="root"></div>';

console.log("What gives?")

// Render your React component instead
const root = createRoot(document.getElementById('root'));
root.render(<h1>Hello, world</h1>);
