"use strict"
// Module Dependencies
const router = require("express").Router()
const codeDictionary = require("../responseCodes.json")
const appVer = require("../app.json")
const Item = require("../models/item")

// Set metadata
let meta = {
	createdAt: new Date(),
	createdBy: "",
	updatedAt: new Date(),
	updatedBy: "",
	deletedAt: "",
	deletedBy: ""
}
let response = {}
response.api = appVer
// ---------------------------------
// Item routes (/item)
// ---------------------------------
router.get("/", (req, res) => {
	let searchTerm = req.query.search !== undefined ? req.query.search : ""
	let query = {
		"meta.deletedBy": "",
		"data.itemName" : {
			$regex : ".*" + searchTerm + ".*",
			$options: "i"
		}
	}
	Item.find(query, (err, items) => {
		if (err) {
			res.send(err)
		}
		else {
			response.data = items
			response.notification = codeDictionary.MDB0001
			res.send(response)
		}
	})
})

router.get("/:itemId", (req, res) => {
	Item.findOne({_id: req.params.itemId}, (err, item) => {
		if (err) {
			res.send(err)
		}
		else {
			response.data = item
			response.notification = codeDictionary.MDB0001
			res.send(response)
		}
	})
})

router.put("/", (req, res) => {
	Item.findByIdAndUpdate(req.body._id, req.body, { new: true }, (err, item) => {
		if (err) {
			res.send(err)
		}
		else {
			response.data = item
			response.notification = codeDictionary.MDB0003
			res.send(response)
    }
  })
})

router.post("/", ({ body }, res) => {
	let newItem = {}
	if (body.itemId && body.itemName && body.itemImage && body.itemPrice && body.itemStock && body.itemDescription && body.itemCategory && body.itemGenre) {
		newItem.meta = meta
		newItem.data = body
		Item.findOneAndUpdate({"data.itemId": body.itemId, "meta.deletedBy": ""}, newItem, {upsert: true, new: true, runValidators: true}, (err, item) => {
			if (err) {
				response.notification = codeDictionary.MDB0000
				res.send(response)
			}
			else {
				response.data = item.ops
				response.notification = codeDictionary.MDB0002
				res.send(response)
			}
		})
	} else {
		response.notification = codeDictionary.MDB0000
		res.send(response)
	}
})

module.exports = router
