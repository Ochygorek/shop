import { Schema, model, models } from 'mongoose'

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  soldOut: {
    type: Boolean,
    default: false,
  }
}, { timestamps: true })

const ItemModel = models.item || model('item', itemSchema)

export default ItemModel