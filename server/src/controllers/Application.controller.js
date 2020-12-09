import ApplicationModel from '../models/Application.model.js';
import StatusCode from '../../config/StatusCode.js';

const createApplication = async (req, res) => {
  const application = new ApplicationModel({
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
    message: req.body.message,
  });
  try {
    const response = await application.save();
    res.status(StatusCode.CREATED).send(response);
  } catch (error) {
    res
      .status(StatusCode.INTERNAL_SERVER_ERROR)
      .send({ message: error.message });
  }
};

const getAllApplications = async (req, res) => {
  try {
    const response = await ApplicationModel.find();
    res.status(StatusCode.OK).send(response);
  } catch (error) {
    res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
      message: error.message,
    });
  }
};

const getApplicationWithEmailQuery = async (req, res) => {
  try {
    const response = await ApplicationModel.find({ email: req.query.email });
    response.length !== 0
      ? res.status(200).send(response)
      : res.status(404).send({
          message: 'Could not find application for email ' + req.query.email,
        });
  } catch (error) {
    res.status(500).send({
      message:
        'Error while trying to find application for email ' + req.query.email,
      error: error.message,
    });
  }
};

const updateApplication = async (req, res) => {
  try {
    if (!req.body) {
      return res
        .status(StatusCode.BAD_REQUEST)
        .send({ message: 'Cannot update empty values.' });
    }
    const response = await ApplicationModel.findByIdAndUpdate(
      req.params.applicationID,
      {
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        message: req.body.message,
      },
      { new: true },
    );
    res.status(StatusCode.OK).send(response);
  } catch (error) {
    res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
      message:
        'Error occured whiel trying to update application ' +
        req.params.applicationID,
      error: error.message,
    });
  }
};

const deleteApplication = async (req, res) => {
  try {
    const response = await ApplicationModel.findByIdAndDelete(
      req.params.applicationID,
    );
    res.status(StatusCode.OK).send({
      message: `Succesfully deleted the application for ${response.name} with e-mail ${response.email}.`,
    });
  } catch (error) {
    res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
      message:
        'Error occured while trying to delete application for ' +
        req.params.name,
      error: error.message,
    });
  }
};

export default {
  createApplication,
  getAllApplications,
  getApplicationWithEmailQuery,
  updateApplication,
  deleteApplication,
};
