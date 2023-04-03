/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Candidate } = require('../models/Candidate');

/**
* Creates the data
*
* candidate Candidate data to be created
* returns candidate
* */
const createcandidate = ({ candidate }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Candidate(candidate).save();
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
* candidateId String the Id parameter
* no response value expected for this operation
* */
const deletecandidate = ({ candidateId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Candidate.findOneAndDelete({ _id:candidateId }).exec();
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
const getAllcandidate = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Candidate.find().populate(['cconsultants']).exec();
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
* candidateId String the Id parameter
* returns candidate
* */
const getcandidate = ({ candidateId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Candidate.findById(candidateId)
      .populate(['cconsultants']).exec();
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
* candidateId String the Id parameter
* candidate Candidate data to be updated (optional)
* returns candidate
* */
const updatecandidate = ({ candidateId, candidate }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Candidate.findOneAndUpdate({ _id:candidateId },candidate).exec();
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
  createcandidate,
  deletecandidate,
  getAllcandidate,
  getcandidate,
  updatecandidate,
};
