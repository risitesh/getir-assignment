const Records = require("./schemas/records")

/**
 * 
 * @param {Date} queryFilter.startDate
 * @param {Date} queryFilter.endDate
 * @param {Number} queryFilter.minCount
 * @param {Number} queryFilter.maxCount
 * @returns {Array}
 */
const getRecordsByCount = async (queryFilter) => {
    const result = await Records.aggregate([
        {
            $match: {
                createdAt: {
                    $gte: new Date(queryFilter.startDate),
                    $lte: new Date(queryFilter.endDate)
                },
            }
        },
        {
            $project: {
                _id: 0,
                key: 1,
                createdAt: 1,
                totalCount: { $sum: '$counts' }
            }
        },
        {
            $match: {
                totalCount: {
                    $gte: queryFilter.minCount,
                    $lte: queryFilter.maxCount
                }
            }
        }
    ]);
    return result;
};

module.exports = {
    getRecordsByCount
};
