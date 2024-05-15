module.exports = {


  friendlyName: 'Index',


  description: 'Index product.',


  inputs: {
  },


  exits: {
    success: {
      statusCode: 200,
      description: 'Products successfully retrieved from the inventory',
    },
    error: {
      statusCode: 500,
      description: 'Something went wrong',
    },
  },


  fn: async function (_, exits) {
    try {
      const products = await Product.find({});

      // All done.
      return exits.success(products);
    } catch (error){
      return exits.error({
        message: 'Oops :) an error occurred',
        error: error.message,
      });
    }
  }
};
