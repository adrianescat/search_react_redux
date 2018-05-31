import express from 'express';
//import controller file
import * as searchController from '../controllers/search.server.controller';

// get an instance of express router
const router = express.Router();
router.route('/items')
     .get(searchController.getItems);
router.route('/items/:id')
      .get(searchController.getItem);

export default router;