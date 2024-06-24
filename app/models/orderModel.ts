import { Schema, model, models } from 'mongoose'

export const orderSchema = new Schema({
  boughtBy: {
    type: String,
    required: true
  },
  products: [{
    productId: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      min: 1
    }
  }],
}, { timestamps: true })

const OrderModel = models.orders || model('orders', orderSchema)

export default OrderModel