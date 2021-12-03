const router = require("express").Router();
const db = require("../models");

router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        res.json(err);
    });
});

router.get("api/workouts", (req, res) => {
    db.Workout.find({})
    .then((data) => {
        data.forEach((workout) => {
            var total = 0;
            workout.exercises.forEach((e) => {
                total += e.duration;
            });
            workout.totalDuration = total;
        });
        res.json(data);
    })
    .catch((err) => {
        res.json(err);
    });
});


module.exports = router;