import ApplicationController from '../controllers/Application.controller.js';

const route = (app) => {
  app.post('/apply', ApplicationController.createApplication);
  app.get('/apply', ApplicationController.getAllApplications);
  app.get(
    '/application/:email',
    ApplicationController.getApplicationWithEmailQuery,
  );
  app.put('/apply/:applicationID', ApplicationController.updateApplication);
  app.delete('/apply/:applicationID', ApplicationController.deleteApplication);
};

export default {
  route,
};
