module.exports = {


  friendlyName: 'Patch',


  description: 'Patch product.',


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
      statusCode: 200,
      description: 'The product was successfully updated',
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
      const updatedProduct = await Product.updateOne({ name: inputs.name})
      .set({ 
        description: inputs.description,
        price: inputs.price,
      });

      
      if (updatedProduct === undefined) {
        return exits.productNotFound({
          message: 'The product was not found in the inventory',
        });
      }

      // All done.
      return exits.success(updatedProduct);
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
