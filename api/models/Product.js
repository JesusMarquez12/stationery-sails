/**
 * Product.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "Product",
  attributes: {
    name: {
      type: 'string',
      columnName: 'name',
      required: true,
      unique: true,
    },
    description: {
      type: 'string',
      columnName: 'description',
    },
    stock: {
      type: 'number',
      columnName: 'stock',
      required: true
    },
    price: {
      type: 'number',
      columnName: 'price',
      required: true
    },

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    orders:{
      collection: 'order',
      via: 'product',
      through: 'productorder'
    }

  },

  // ASCII ART FONT: Calvin S
  //  ╔═╗╦ ╦╔═╗╔╦╗╔═╗╔╦╗  ╔═╗╔═╗╔╗╔╔═╗╔╦╗╔═╗╔╗╔╔╦╗╔═╗
  //  ║  ║ ║╚═╗ ║ ║ ║║║║  ║  ║ ║║║║╚═╗ ║ ╠═╣║║║ ║ ╚═╗
  //  ╚═╝╚═╝╚═╝ ╩ ╚═╝╩ ╩  ╚═╝╚═╝╝╚╝╚═╝ ╩ ╩ ╩╝╚╝ ╩ ╚═╝

  placeholderInstance: {
    createdAt: 0,
    updatedAt: 0,
    id: 0,
    name: "",
    description: "",
    stock: 0,
    price: 0
  },

  //  ╔═╗╦ ╦╔═╗╔╦╗╔═╗╔╦╗  ╔╦╗╔═╗╔╦╗╦ ╦╔═╗╔╦╗╔═╗
  //  ║  ║ ║╚═╗ ║ ║ ║║║║  ║║║║╣  ║ ╠═╣║ ║ ║║╚═╗
  //  ╚═╝╚═╝╚═╝ ╩ ╚═╝╩ ╩  ╩ ╩╚═╝ ╩ ╩ ╩╚═╝═╩╝╚═╝

  customToJSON: function() {
    // Return a shallow copy of this record with the database data removed
    return _.omit(this, ['id', 'createdAt', 'updatedAt'])
  },
};

