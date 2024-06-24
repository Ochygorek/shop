'use server'

import ItemModel from "@/app/models/itemModel"
import UserModel from "@/app/models/userModel"
import connectDB from "@/app/lib/database"
import { unstable_noStore as noStore, revalidatePath } from "next/cache"
import ContestantModel from "@/app/models/contestantModel"
import OrderModel from "./models/orderModel"

export async function getItems() {
  noStore()

  try {
    await connectDB()

    const data = await ItemModel.find().limit(18)
    // console.log(data)

    revalidatePath('/')

    return data
  } catch (error: any) {
    return { errorMessage: error.message }
  }
}

// add user (do not use)
export async function sendCredentials(formData: FormData) {
  const { email, password } = Object.fromEntries(formData)

  try {
    await connectDB()

    const newUser = new UserModel({
      email,
      password
    })

    await newUser.save()
  } catch (error) {
    console.error(error)
  }
}

export async function getContestans() {
  noStore()

  try {
    await connectDB()

    const data = await ContestantModel.find()
    console.log(data)

    return data
  } catch (error: any) {
    return { errorMessage: error.message }
  }
}

export async function orderPlaced(formData: FormData) {
  noStore()

  const { boughtBy, products, productId, quantity, price } = Object.fromEntries(formData)

  console.log(products)

  try {
    await connectDB()

    const orderFields: any = {
      boughtBy: boughtBy,
      products: [{
        productId: productId,
        quantity: quantity,
        price: price
      }],
    }

    Object.keys(orderFields).forEach(key => {
      if (orderFields[key] === "" || orderFields[key] === undefined) {
        delete orderFields[key];
      }
    });

    await new Promise((resolve) => setTimeout(resolve, 500));

    const order = new OrderModel(orderFields);

    // update by id and only fields that are not empty
    const data = await order.save()

  } catch (error: any) {
    return { errorMessage: error.message }
  }
}