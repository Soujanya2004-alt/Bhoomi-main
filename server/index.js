import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import clientRoutes from './routes/client.js';
import generalRoutes from './routes/general.js';
import managementRoutes from './routes/management.js';
import salesRoutes from './routes/sales.js';

/* CONFIG */
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* Custom Middleware for Cross-Origin-Embedder-Policy */
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-same-origin');
  next();
});
// backendservice.js

const getAllMarketdata = async () => {
  const API_KEY = '579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b'; // Replace this with your API key
  const url = `https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json
`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch market data');
    }
    const data = await response.json();
    
    // Parse and map the data to fit your component's expected structure
    const marketData = data.records.map(item => ({
      id: item.commodity_id,
      name: item.commodity,
      year: item.date, // or another available field
      price: item.modal_price,
      image: 'tractor', // map an image based on the commodity type if needed
    }));

    return marketData;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

/* ROUTES */
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);
app.use("/marketdata/getall", getAllMarketdata);

const PORT = 9000;
mongoose
  .connect('mongodb+srv://agrinew:agri1234@cluster0.fqp8f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

  }).catch((error) => console.log(`${error} did not connect`));
