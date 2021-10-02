const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Events extends Model {}

Events.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          len: [1, 50] // limits the amount of characters for title
      }
    },
    entry: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    date_published: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    author: {
        type: DataTypes.STRING,
        references: {
            model: 'user',
            key: 'id'
        }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = Events 