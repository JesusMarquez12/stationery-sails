module.exports = {


  friendlyName: 'Edit',


  description: 'Edit products.',


  inputs: {
    name: {
      type: 'string',
      required: true
    }
  },


  exits: {
    success: {
      statusCode: 200,
      description: 'The product was successfully retrieved from the inventory',
    },
    productNotFound: {
      statusCode: 404,
      description: 'The product was not found in the inventory',
    },
    error: {
      statusCode: 500,
      description: 'Something went wrong',
    },
  },


  fn: async function (inputs, exits) {
    try {
      const product = await Product.findOne({ name: inputs.name });
      
      if (product === undefined) {
        return exits.productNotFound({
          message: 'The product was not found in the inventory',
        });
      }

      // All done.
      return exits.success(product);

    } catch (error){

      return exits.error({
        message: 'Oops :) an error occurred',
        error: error.message,
      });
    }
  }
};