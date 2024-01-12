import express from 'express';
import dotenv from "dotenv";
import path from "path";

console.log(" hello podcast listeners!!! ");

const app = express();
const port = 3000; 

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (request: any, response: any) => {
    response.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

/* cache search for 1 hour = 3600s */

console.log("test");