module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isNumeric: true },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    // IPN: {
    //   type: DataTypes.DECIMAL,
    //   unique: true,
    // },
    avatar: {
      type: DataTypes.STRING,
      validate: { isUrl: true },
    },
  });

  Person.associate = function (models) {
    models.Person.hasMany(models.Account, {
      foreignKey: { allowNull: false },
    });
  };

  return Person;
};
