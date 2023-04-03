/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Consultant } = require('../models/Consultant');

/**
* Creates the data
*
* consultant Consultant data to be created
* returns consultant
* */
const createconsultant = ({ consultant }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Consultant(consultant).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* consultantId String the Id parameter
* no response value expected for this operation
* */
const deleteconsultant = ({ consultantId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Consultant.findOneAndDelete({ _id:consultantId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAllconsultant = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Consultant.find().exec();
      // this is a test
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* consultantId String the Id parameter
* returns consultant
* */
const getconsultant = ({ consultantId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Consultant.findById(consultantId)
      .exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* consultantId String the Id parameter
* consultant Consultant data to be updated (optional)
* returns consultant
* */
const updateconsultant = ({ consultantId, consultant }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Consultant.findOneAndUpdate({ _id:consultantId },consultant).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createconsultant,
  deleteconsultant,
  getAllconsultant,
  getconsultant,
  updateconsultant,
};
