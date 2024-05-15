module.exports = {


  friendlyName: 'Create',


  description: 'Create product.',


  inputs: {
    name: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string'
    },
    price: {
      type: 'number'
    },
  },


  exits: {
    success: {
      statusCode: 201,
      description: 'The product was successfully listed in the inventory',
    },
    existentProduct: {
      statusCode: 400,
      description: 'The product already present in the inventory',
    },
    error: {
      statusCode: 500,
      description: 'Something went wrong',
    },
  },


  fn: async function (inputs, exits) {
    try {
      const newProduct = await Product.create({
        name: inputs.name,
        description: inputs.description,
        stock: 0,
        price: inputs.price
      }).fetch();
      // All done.
      return exits.success(newProduct);
    } catch (error){
      if (error.code === 'E_UNIQUE') {
        return exits.existentProduct({
          message: 'The product already present in the inventory',
        });
      }

      return exits.error({
        message: 'Oops :) an error occurred',
        error: error.message,
      });
    }
  }
};
