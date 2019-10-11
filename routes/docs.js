const express=require('express');
const router=express.Router();
const model=require('../models/index');
const checkAuth=require('../middleware/check-auth');
const DocumentsController=require('../controllers/docs');


//middleware to hanlde errors
const awaitErorrHandlerFactory = middleware => {
  return async (req, res, next) => {
    try {
      await middleware(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};


/* GET all documents listing. */
router.get('/',checkAuth,DocumentsController.get_documents
);

// Get particular document by id
router.get('/:id',checkAuth,DocumentsController.get_document);

/* POST a document. */
router.post('/',checkAuth,DocumentsController.create_document
);


/* update a particular documents name,attachment, using its id. */
router.put('/:id', checkAuth,DocumentsController.update_document
);


/* GET delete a particular document. */
router.delete('/:id',checkAuth, DocumentsController.delete_document);

module.exports = router;
