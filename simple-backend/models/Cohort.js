const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CohortSchema = new Schema({
  number: Number
});

const cohortModel = mongoose.model("Cohortt", CohortSchema);
module.exports = cohortModel;
