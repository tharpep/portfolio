// Assuming the first part of cloudinary.ts looks something like this

import { ResourceApiResponse } from 'cloudinary'; // Import necessary type

// ... other imports if any

type YourOtherTypes = any; // Line 47

let someVar: ResourceApiResponse; // Line 48  - Updated from 'any' to the specific type 'ResourceApiResponse'

// Rest of the file follows...