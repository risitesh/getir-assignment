const moment = require("moment");
const { getRecordsByCount } = require("../models/records");

const getRecords = async (requestBody) => {
    try {
        const queryBody = {
            startDate: moment(requestBody.startDate).startOf('day').toDate(),
            endDate: moment(requestBody.endDate).endOf('day').toDate(),
            minCount: requestBody.minCount,
            maxCount: requestBody.maxCount
        }
        const result = await getRecordsByCount(queryBody);
        if (result && result.length > 0) {
            return { statusCode: 200, message: 'Success', data: result };
        }
        return { statusCode: 200, message: 'No Result', data: [] };
    } catch (err) {
        return { statusCode: 400, message: err.message, data: [] };
    }
};

module.exports = {
    getRecords
}