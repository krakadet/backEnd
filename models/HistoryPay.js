module.exports = (sequelize, DataTypes) => {
  const HistoryPay = sequelize.define('HistoryPay', {
    comments: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    card: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    commissionOfBank: {
      type: DataTypes.INTEGER,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    accountSender: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    transactionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    totalSum: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  HistoryPay.associate = function (models) {
    models.HistoryPay.belongsTo(models.Account, {
      foreignKey: { allowNull: true },
    });
  };

  return HistoryPay;
};
