import mongoose from 'mongoose';

const ApplicationSchema = mongoose.Schema(
  {
    name: String,
    age: Number,
    email: String,
    message: String,
  },
  { timestamps: true },
);

const ApplicationModel = mongoose.model('application', ApplicationSchema);

export default ApplicationModel;
