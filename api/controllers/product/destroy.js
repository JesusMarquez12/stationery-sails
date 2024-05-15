module.exports = {


  friendlyName: 'Destroy',


  description: 'Destroy product.',


  inputs: {
    name: {
      type: 'string',
      required: true
    },
  },


  exits: {
    success: {
      statusCode: 204,
      description: 'The product was successfully unlisted in the inventory',
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
      const destroyedProduct = await Product.destroyOne({ name: inputs.name });
      
      if (destroyedProduct === undefined) {
        return exits.productNotFound({
          message: 'The product was not found in the inventory',
        });
      }

      // All done.
      return exits.success({});
    } catch (error){

      return exits.error({
        message: 'Oops :) an error occurred',
        error: error.message,
      });
    }
  }
};
