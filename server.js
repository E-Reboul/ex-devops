import express from 'express';
import dotenv from 'dotenv';

const PORT = process.env.PORT || 3000;

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const app = express();

app.use(express.json());

app.listen(PORT, () => {
    try {
        console.log(`Server is running on port ${PORT}`);
    } catch(e) {
        console.error(`Error starting server: ${e.message}`);
    }
});

export default app;


