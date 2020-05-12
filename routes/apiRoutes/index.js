const router = require('express').Router();
const { getWorkout, createWorkout, deleteWorkout } = require('./../../controllers/workoutController');


// '/api' prepended
router.route('/workout')
    .get(getWorkout)
    .post(createWorkout)

router.route('/workout/:workoutId')
    .delete(deleteWorkout)

module.exports = router;