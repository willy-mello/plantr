const sequelize= require('sequelize');
const db= new sequelize('postgres://localhost:5432/plantr');


module.exports= db;


const Gardener = db.define('Gardeners', {

  name:{
    type: sequelize.STRING,
    allowNull: false
  },

  age: {
    type:sequelize.INTEGER,
    allowNull: false
  }

});

const Plot = db.define('Plots', {

  size: {
  type: sequelize.INTEGER,
  allowNull: false
  },

  shaded: {
    type: sequelize.BOOLEAN,
  }
});

const Vegetable = db.define('Vegetables', {

  name: {
    type: sequelize.STRING,
    allowNull: false
  },

  color: {
    type: sequelize.STRING,
    allowNull: false
  },

  planted_on:{
    type: sequelize.DATE,
    allowNull: false
  },
});

Vegetable.belongsToMany(Plot, {through:'vegetablePlot'});
Plot.belongsToMany(Vegetable, {through:'vegetablePlot'});

Plot.belongsTo(Gardener);
Gardener.hasOne(Plot);

Gardener.belongsTo(Vegetable, {as:'favorite_vegetable'});