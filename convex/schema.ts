import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  products: defineTable({
    title: v.string(),
    imageId: v.string(),
    price: v.number(),
  }),
  todos: defineTable({
    text: v.string(),
    completed: v.boolean(),
  }),
  items: defineTable({
    name: v.string(),
    location: v.string(),
    isClaimed: v.boolean(),
    createdAt: v.string(),
  })
})
