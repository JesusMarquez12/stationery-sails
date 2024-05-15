module.exports = {
  friendlyName: "New",

  description: "New products.",

  inputs: {
  },

  exits: {
    success: {
      statusCode: 200,
      description: "Here some product placeholder",
    },
    error: {
      statusCode: 500,
      description: "Something went wrong",
    },
  },

  fn: async function (_, exits) {
    try {
      const placeholderProduct = Product.placeholderInstance;

      console.log('New product:', placeholderProduct);
      // All done.

      return exits.success(placeholderProduct);
    } catch (error) {
      return exits.error({
        message: "Oops :) an error occurred",
        error: error.message,
      });
    }
  },
};
