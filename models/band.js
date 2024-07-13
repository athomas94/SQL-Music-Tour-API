'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate( { MeetGreet, SetTimes }) {
      Band.hasMany(MeetGreet, {
        foreignKey: "band_id",
        as: "meet_greets"
      })

      Band.hasMany(SetTimes, {
        foreignKey: "band_id",
        as: "set_times"
      })
    }
  }
  Band.init({
    name: DataTypes.STRING,
    totalMembers: DataTypes.INTEGER,
    genre: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Band',
    tableName: 'bands',
    timestamps: false
  });
  return Band;
};