const mongoose = require('mongoose');
const utils = require('../lib/utils');

const StopTime = mongoose.model('StopTime', new mongoose.Schema({
  agency_key: {
    type: String,
    required: true,
    index: true
  },
  trip_id: {
    type: String,
    required: true,
    index: true
  },
  arrival_time: {
    type: String,
    required: true
  },
  departure_time: {
    type: String,
    required: true
  },
  stop_id: {
    type: String,
    required: true
  },
  stop_sequence: {
    type: Number,
    required: true,
    index: true,
    min: 0
  },
  stop_headsign: String,
  pickup_type: {
    type: Number,
    index: true,
    min: 0,
    max: 3
  },
  drop_off_type: {
    type: Number,
    index: true,
    min: 0,
    max: 3
  },
  shape_dist_traveled: Number,
  timepoint: {
    type: Number,
    min: 0,
    max: 1
  }
}));

module.exports = StopTime;
