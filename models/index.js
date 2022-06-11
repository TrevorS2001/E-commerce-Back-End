// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foriegnKey: 'category_id'
})

// Categories have many Products
Category.belongsTo(Product, {
  foriegnKey: 'category_id'
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Product, {
  through: ProductTag,
  foriegnKey: 'tag_id'
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foriegnKey: 'tag_id'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};