module.exports = {
  friendlyName: "New",

  description: "New products.",

  inputs: {
  },

  exits: {
    success: {
      statusCode: 201,
      description: "The product was successfully listed in the inventory",
    },
    error: {
      statusCode: 500,
      description: "Something went wrong",
    },
  },

  fn: async function (_, exits) {
    // try {
    //   let newUser = await Product.create({
    //     name: inputs.name,
    //     description: inputs.description,
    //     stock: 0,
    //     price: inputs.price,
    //   }).fetch();
    //   // All done.
    //   return exits.success({
    //     message: "The product was successfully listed in the inventory",
    //   });
    // } catch (error) {
    //   if (error.code === "E_UNIQUE") {
    //     return exits.existentProduct({
    //       message: "The product already present in the inventory",
    //     });
    //   }

    //   return exits.error({
    //     message: "Oops :) an error occurred",
    //     error: error.message,
    //   });
    // }
    return
  },
};
