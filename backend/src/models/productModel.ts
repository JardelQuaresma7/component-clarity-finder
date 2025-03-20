
import mongoose from 'mongoose';

const colorSchema = new mongoose.Schema({
  name: String,
  code: String,
});

const sizeChartSchema = new mongoose.Schema({
  size: String,
  bust: Number,
  waist: Number,
  hip: Number,
  length: Number,
});

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    discount: {
      type: Number,
      required: true,
      default: 0,
    },
    images: [String],
    colors: [colorSchema],
    sizes: [String],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    reviewCount: {
      type: Number,
      required: true,
      default: 0,
    },
    description: String,
    shortDescription: String,
    category: {
      name: {
        type: String,
        required: true,
      },
      slug: {
        type: String,
        required: true,
      },
    },
    material: String,
    composition: String,
    care: String,
    sku: {
      type: String,
      required: true,
    },
    sizeChart: [sizeChartSchema],
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',
      },
    ],
    isNewArrival: {
      type: Boolean,
      default: false,
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Índices para pesquisa eficiente
productSchema.index({ name: 'text', description: 'text' });
productSchema.index({ slug: 1 });
productSchema.index({ 'category.slug': 1 });

const Product = mongoose.model('Product', productSchema);

export default Product;
