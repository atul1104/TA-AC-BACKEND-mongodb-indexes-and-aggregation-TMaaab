var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: { type: String, unique: true },
    userName: String,
    email: { type: String, unique: true },
    address: {
      city: String,
      state: String,
      country: String,
      pin: Number,
    },
  },
  { timestamps: true }
);

userSchema.index({ country: 1, state: 1 });

module.exports = mongoose.model('User', userSchema);
