import mongoose, { Document, Schema, Types } from 'mongoose';

// Interface para item de carrinho
interface ICartItem {
  product: Types.ObjectId;
  name: string;
  size?: string;
  color?: string;
  image: string;
  price: number;
  quantity: number;
  _id?: Types.ObjectId;
}

// Interface para documento Cart
export interface ICart extends Document {
  user: Types.ObjectId;
  items: mongoose.Types.DocumentArray<ICartItem & Document>;
}

const cartItemSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  size: String,
  color: String,
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
});

const cartSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    items: [cartItemSchema],
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model<ICart>('Cart', cartSchema);

export default Cart;