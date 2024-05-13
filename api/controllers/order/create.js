module.exports = {


  friendlyName: 'Create',


  description: 'Create order.',


  inputs: {
    products:{
      type: [
        {
          name: 'string',
          amount: 'number'
        }
      ]
    },
    description: {
      type: 'string'
    },
  },


  exits: {
    success: {
      statusCode: 201,
      description: 'Order fulfilled',
    },
    invalidAmount: {
      statusCode: 400,
      description: 'There not enough stock to fulfill the order',
    },
    invalidProduct: {
      statusCode: 404,
      description: 'The product is not present',
    },
    error: {
      statusCode: 500,
      description: 'Something went wrong',
    },
  },


  fn: async function (inputs, exits) {
  try {  
      const requestedProductNames = inputs.products.map(h => h.name);
      console.log(`The product names ${requestedProductNames}`);

      
      let requestedProductIds = await Product.find({
        where: {name: {in: requestedProductNames}},
        select: ['id']
      });
      requestedProductIds = requestedProductIds.map(h => h.id)
      console.log("The product ids are", requestedProductIds);

      // All done.
      return exits.success({
        message: "Yep"
      });
    } catch (error){
      return exits.error({
        message: 'Oops :) an error occurred',
        error: error.message,
      });
    }
  },

};
