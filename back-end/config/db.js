import mongoose from 'mongoose';

const connectDb = async () => {
  const MONGO_URI = process.env.MONGO_URI;

  if (!MONGO_URI) {
    console.error("MONGO_URI não está definida!");
    return;
  }

  try {
    await mongoose.connect(MONGO_URI);
    console.log("Conectado ao MongoDB com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error); 
  }
};

export default connectDb;
