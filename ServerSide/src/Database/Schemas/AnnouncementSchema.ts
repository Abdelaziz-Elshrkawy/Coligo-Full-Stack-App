import { Schema } from 'mongoose';

const announcementSchema = new Schema({
  name: String,
  imageLink: String,
  subject: String,
  message: String,
});
export default announcementSchema;
