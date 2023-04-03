/**
 * The ConsultantController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ConsultantService');
const createconsultant = async (request, response) => {
  await Controller.handleRequest(request, response, service.createconsultant);
};

const deleteconsultant = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteconsultant);
};

const getAllconsultant = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllconsultant);
};

const getconsultant = async (request, response) => {
  await Controller.handleRequest(request, response, service.getconsultant);
};

const updateconsultant = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateconsultant);
};


module.exports = {
  createconsultant,
  deleteconsultant,
  getAllconsultant,
  getconsultant,
  updateconsultant,
};
