const router = require('express').Router()
const categoryController = require('../controller/categoryController')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')
const authA = require('../middleware/authAdmin')

router.route('/category')
      .get(categoryController.getCategories)
      .post(auth, authAdmin, categoryController.createcategory)

router.route('/category/:id')
      .delete(auth, authAdmin, categoryController.deletecategory)
      .put(auth, authAdmin, categoryController.updatecategory)
module.exports = router      