module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    accNumber: {
      type: DataTypes.INTEGER,
    },
    card: {
      type: DataTypes.INTEGER,
    },
    PersonId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    lastDayUse: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    balance: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    CVV: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    commissionOfCard: {
      type: DataTypes.INTEGER,
    },
  });

  Account.associate = function (models) {
    models.Account.hasMany(models.HistoryPay, {
      foreignKey: {
        allowNull: false,
      },
    });
    models.Account.belongsTo(models.Person, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Account;
};
