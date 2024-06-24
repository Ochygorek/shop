import { Schema, model, models } from 'mongoose'

const contestantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  amountSpent: {
    type: Number
  },
  eliminated: {
    type: Boolean,
    required: true
  }
})

const ContestantModel = models.contestants || model('contestants', contestantSchema)

export default ContestantModel