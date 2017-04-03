// "use strict"
// // Module Dependencies
// const router = require("express").Router()
// const codeDictionary = require("../responseCodes.json")
// const appVer = require("../app.json")
// // Multer Configurations
// const multer = require("multer")
// const upload = multer({ dest: "../esn-ecommerce-frontend/app/uploads/" })
//
// // Set metadata
// let meta = {
// 	createdAt: new Date(),
// 	createdBy: "",
// 	updatedAt: new Date(),
// 	updatedBy: "",
// 	deletedAt: "",
// 	deletedBy: ""
// }
// let response = {}
// response.api = appVer
// // ---------------------------------
// // User routes (/user)
// // ---------------------------------
// router.post("/", (req, res) => {
//   upload.single("test")(req, res, (err) => {
//     if (err) {
//       res.send(err)
//     }
//     else {
//       response.data = req.file
//       response.notification = codeDictionary.UPL0001
//       res.send(response)
//     }
//   })
// })
// module.exports = router
