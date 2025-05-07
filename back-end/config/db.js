import mongoose from 'mongoose';
import 'dotenv/config';

const { MONGO_URL } = process.env;

const connectDb = async () => {
        try {
        mongoose.connect(MONGO_URL);
        console.log('Conectado ao banco de dados');
    } catch (error) {
        console.log("Nao deu boa", error);
        
    }
    
} 






