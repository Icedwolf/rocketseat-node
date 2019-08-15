const mongoose = require("mongoose");

const Product = mongoose.model("Product");

module.exports = {
  async index(req, res) {
    /* desestruturação para pegar a query de página atual
    com um valor default para a variavel @page */
    const { page = 1 } = req.query;
    const products = await Product.paginate(
      {
        //condições
      },
      //página atual | limite
      { page, limit: 10 } //page shortsyntax for page: page
    );

    return res.json(products);
  },

  async show(req, res) {
    const product = await Product.findById(req.params.id);

    return res.json(product);
  },

  async store(req, res) {
    const product = await Product.create(req.body);

    return res.json(product);
  },

  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true //retorna o produto atualizado no update, sem o new retorna o produto antigo
    });

    return res.json(product);
  },

  async destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id);

    return res.send();
  }
};
