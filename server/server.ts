const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app: any = express();
const PORT: number | string = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.listen(PORT, (): void => {
    console.log(`Server is running on port: ${PORT}`);
});