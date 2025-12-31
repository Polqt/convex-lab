import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const list = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db
            .query("items")
            .withIndex('by_id')
            .order("asc")
            .collect();
    }
})

export const add = mutation({
    args: { name: v.string(), location: v.string() },
    handler: async (ctx, args) => {
        return await ctx.db.insert("items", {
            name: args.name,
            location: args.location,
            isClaimed: false,
            createdAt: new Date().toISOString(),
        })
    }
})

export const claim = mutation({
    args: { id: v.id('items') },
    handler: async (ctx, args) => {
        const item = await ctx.db.get(args.id);
        if (!item) {
            throw new Error("Item not found")
        }
        return await ctx.db.patch(args.id, {
            isClaimed: !item.isClaimed,
        })
    }
})

export const remove = mutation({
    args: { id: v.id('items') },
    handler: async (ctx, args) => {
        const item = await ctx.db.get(args.id);
        if (!item) {
            throw new Error("Item not found")
        }
        return await ctx.db.delete(args.id);
    }
})
