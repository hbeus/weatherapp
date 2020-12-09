import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

const dbConnect = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log('DB Connection successful!');
  } catch (error) {
    console.log('Error while connecting to DB: ', error);
    process.exit();
  }
};

const dbPort = (app) => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

export default {
  dbConnect,
  dbPort,
};
