const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//47.151950, 5.771348
const markerSchema = new Schema({
  lieu: {
    type: String,
    required: true,
  },
  longitude: {
    type: String,
    required: true,
  },
  latitude: {
    type: String,
    required: true,
  },
  pays: {
    type: String,
    required: true,
  },
  ville: {
    type: String,
    required: true,
  },
  categorie: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Marker', markerSchema);
