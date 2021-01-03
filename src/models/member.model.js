const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const { ranks } = require('../config/rank');

const memberSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      default: '',
    },
    lastName: {
      type: String,
      default: '',
    },
    cardId: {
      type: String,
      default: '',
    },
    addressNo: {
      type: String,
      default: '',
    },
    villageNo: {
      type: String,
      default: '',
    },
    subDistrict: {
      type: String,
      default: '',
    },
    district: {
      type: String,
      default: '',
    },
    province: {
      type: String,
      default: '',
    },
    phoneNo: {
      type: String,
      default: '',
    },
    postalCode: {
      type: String,
      default: '',
    },
    officer: {
      type: String,
      default: '',
    },
    rank: {
      type: String,
      enum: ranks,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
memberSchema.plugin(toJSON);
memberSchema.plugin(paginate);
/**
 * @typedef Member
 */
const Member = mongoose.model('Member', memberSchema);

module.exports = Member;
