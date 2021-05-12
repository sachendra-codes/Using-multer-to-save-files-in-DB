const Product = require('../model/product')

module.exports.createProduct = async (req, res) => {
  product = new Product(req.body)
  console.log(req.file)
  try {
    console.log(product)
    product = await product.save()

    res.json(product)
  } catch (err) {
    res.status(400).json({
      message: 'Unable to save',
    })
  }
}
