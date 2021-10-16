const router = require('express').Router()
const paymentController = require ('../controller/paymentController')
const auth = require ('../middleware/auth')
const authAdmin = require ('../middleware/authAdmin')


router.route('/payment')
      .get(auth, authAdmin, paymentController.getPayments)
      .post(auth, authAdmin, paymentController.createpayment)


module.exports = router      