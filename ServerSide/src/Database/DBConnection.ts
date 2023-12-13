import mongoose from 'mongoose';
import { MONGODB_URL } from '../env';

const Connection = mongoose.createConnection(MONGODB_URL as string);
export default Connection;
