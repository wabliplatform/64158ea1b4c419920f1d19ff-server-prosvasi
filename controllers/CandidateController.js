/**
 * The CandidateController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/CandidateService');
const createcandidate = async (request, response) => {
  await Controller.handleRequest(request, response, service.createcandidate);
};

const deletecandidate = async (request, response) => {
  await Controller.handleRequest(request, response, service.deletecandidate);
};

const getAllcandidate = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllcandidate);
};

const getcandidate = async (request, response) => {
  await Controller.handleRequest(request, response, service.getcandidate);
};

const updatecandidate = async (request, response) => {
  await Controller.handleRequest(request, response, service.updatecandidate);
};


module.exports = {
  createcandidate,
  deletecandidate,
  getAllcandidate,
  getcandidate,
  updatecandidate,
};
