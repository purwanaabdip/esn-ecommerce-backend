// Set environment to "test"
process.env.NODE_ENV = "test"

// ------------------------------------------------------
// Module Dependencies
// ------------------------------------------------------
let mongoose = require("mongoose")
let chai = require("chai")
let chaiHttp = require("chai-http")
let app = require("../../index")
let should = chai.should()
let Item = require("../../models/item")

chai.use(chaiHttp)

describe("Item API", () => {
  beforeEach((done) => {
    // Empty database before each tests
    Item.remove({}, (err) => {
     done()
    })
  })
  // ------------------------------------------------------
  // GET method
  // ------------------------------------------------------
  describe("/GET item", () => {
    it("Should GET all the items", (done) => {
      chai.request(app)
        .get("/item")
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a("object")
          done()
        })
    })
  })
  describe("/GET item with searchTerm", () => {
    it("Should GET all the items with names in searchTerm", (done) => {
      chai.request(app)
        .get("/item")
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a("object")
          done()
        })
    })
  })
  // ------------------------------------------------------
  // POST method
  // ------------------------------------------------------
  describe("/POST item", () => {
    it("Should POST an item with a complete item object", (done) => {
      let item = {
        itemId : "kocak",
        itemName : "kocak",
        itemImage : "kocak",
        itemPrice : 999999,
        itemStock : 69,
        itemDescription : "kocak",
        itemCategory : "kocak",
        itemGenre : "kocak",
      }
      chai.request(app)
        .post("/item")
        .send(item)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a("object")
          res.body.should.have.property("notification")
          res.body.notification.should.have.property("type").eql("success")
          done()
        })
    })
    it("Should NOT POST an item without the data object", (done) => {
      let item = {}
      chai.request(app)
        .post("/item")
        .send(item)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a("object")
          res.body.should.have.property("notification")
          res.body.notification.should.have.property("type").eql("error")
          done()
        })
    })
    it("Should NOT POST an item if one of the value is in wrong type (price = string)", (done) => {
      let item = {
        itemId : "kocak",
        itemName : "kocak",
        itemImage : "kocak",
        itemPrice : "kocak",
        itemStock : 69,
        itemDescription : "kocak",
        itemCategory : "kocak",
        itemGenre : "kocak",
      }
      chai.request(app)
        .post("/item")
        .send(item)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a("object")
          res.body.should.have.property("notification")
          res.body.notification.should.have.property("type").eql("error")
          done()
        })
    })
    it("Should NOT POST an item if one of the value is in wrong type (stock = string)", (done) => {
      let item = {
        itemId : "kocak",
        itemName : "kocak",
        itemImage : "kocak",
        itemPrice : 999999,
        itemStock : "kocak",
        itemDescription : "kocak",
        itemCategory : "kocak",
        itemGenre : "kocak",
      }
      chai.request(app)
        .post("/item")
        .send(item)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a("object")
          res.body.should.have.property("notification")
          res.body.notification.should.have.property("type").eql("error")
          done()
        })
    })
    it("Should NOT POST an item without a complete item object (no id)", (done) => {
      let item = {
        itemName : "kocak",
        itemImage : "kocak",
        itemPrice : 999999,
        itemStock : 69,
        itemDescription : "kocak",
        itemCategory : "kocak",
        itemGenre : "kocak",
      }
      chai.request(app)
        .post("/item")
        .send(item)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a("object")
          res.body.should.have.property("notification")
          res.body.notification.should.have.property("type").eql("error")
          done()
        })
    })
    it("Should NOT POST an item without a complete item object (no name)", (done) => {
      let item = {
        itemId : "kocak",
        itemImage : "kocak",
        itemPrice : 999999,
        itemStock : 69,
        itemDescription : "kocak",
        itemCategory : "kocak",
        itemGenre : "kocak",
      }
      chai.request(app)
        .post("/item")
        .send(item)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a("object")
          res.body.should.have.property("notification")
          res.body.notification.should.have.property("type").eql("error")
          done()
        })
    })
    it("Should NOT POST an item without a complete item object (no image)", (done) => {
      let item = {
        itemId : "kocak",
        itemName : "kocak",
        itemPrice : 999999,
        itemStock : 69,
        itemDescription : "kocak",
        itemCategory : "kocak",
        itemGenre : "kocak",
      }
      chai.request(app)
        .post("/item")
        .send(item)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a("object")
          res.body.should.have.property("notification")
          res.body.notification.should.have.property("type").eql("error")
          done()
        })
    })
    it("Should NOT POST an item without a complete item object (no price)", (done) => {
      let item = {
        itemId : "kocak",
        itemName : "kocak",
        itemImage : "kocak",
        itemStock : 69,
        itemDescription : "kocak",
        itemCategory : "kocak",
        itemGenre : "kocak",
      }
      chai.request(app)
        .post("/item")
        .send(item)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a("object")
          res.body.should.have.property("notification")
          res.body.notification.should.have.property("type").eql("error")
          done()
        })
    })
    it("Should NOT POST an item without a complete item object (no stock)", (done) => {
      let item = {
        itemId : "kocak",
        itemName : "kocak",
        itemImage : "kocak",
        itemPrice : 999999,
        itemDescription : "kocak",
        itemCategory : "kocak",
        itemGenre : "kocak",
      }
      chai.request(app)
        .post("/item")
        .send(item)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a("object")
          res.body.should.have.property("notification")
          res.body.notification.should.have.property("type").eql("error")
          done()
        })
    })
    it("Should NOT POST an item without a complete item object (no description)", (done) => {
      let item = {
        itemId : "kocak",
        itemName : "kocak",
        itemImage : "kocak",
        itemPrice : 999999,
        itemStock : 69,
        itemCategory : "kocak",
        itemGenre : "kocak",
      }
      chai.request(app)
        .post("/item")
        .send(item)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a("object")
          res.body.should.have.property("notification")
          res.body.notification.should.have.property("type").eql("error")
          done()
        })
    })
    it("Should NOT POST an item without a complete item object (no category)", (done) => {
      let item = {
        itemId : "kocak",
        itemName : "kocak",
        itemImage : "kocak",
        itemPrice : 999999,
        itemStock : 69,
        itemDescription : "kocak",
        itemGenre : "kocak",
      }
      chai.request(app)
        .post("/item")
        .send(item)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a("object")
          res.body.should.have.property("notification")
          res.body.notification.should.have.property("type").eql("error")
          done()
        })
    })
    it("Should NOT POST an item without a complete item object (no genre)", (done) => {
      let item = {
        itemId : "kocak",
        itemName : "kocak",
        itemImage : "kocak",
        itemPrice : 999999,
        itemStock : 69,
        itemDescription : "kocak",
        itemCategory : "kocak",
      }
      chai.request(app)
        .post("/item")
        .send(item)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a("object")
          res.body.should.have.property("notification")
          res.body.notification.should.have.property("type").eql("error")
          done()
        })
    })
  })
})
