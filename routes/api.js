const { body, validationResult } = require('express-validator');

module.exports = (app) => {
    app.post('/records', [
        body('startDate')
            .exists()
            .withMessage('startDate is required')
            .isISO8601()
            .withMessage('startDate should be a proper date in the format of YYYY-MM-DD'),
        body('endDate')
            .exists()
            .withMessage('endDate is required')
            .isISO8601()
            .withMessage('endDate should be a proper date in the format of YYYY-MM-DD'),
        body('minCount')
            .exists()
            .withMessage('minCount is required')
            .isInt({ min: 1 })
            .withMessage('minCount should be a number and greater than 0'),
        body('maxCount')
            .exists()
            .withMessage('maxCount is required')
            .isInt({ min: 1 })
            .withMessage('maxCount should be a number and greater than 0')
    ], async (req, res) => {
        const errors = validationResult(req);
        let code = 2;
        if (!errors.isEmpty()) {
            const msg = errors.array()[0].msg;
            return res.status(400).json({ code, msg, records: [] });
        }
        return res.sendStatus(201);
    });

    return app;
};
