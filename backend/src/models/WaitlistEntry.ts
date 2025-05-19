import mongoose from 'mongoose';

const waitlistEntrySchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  }
}, { timestamps: true });

export const WaitlistEntry = mongoose.model('WaitlistEntry', waitlistEntrySchema);
