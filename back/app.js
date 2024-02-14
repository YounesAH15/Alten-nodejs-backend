const express = require('express')
const app = express()
const port = 3000

const mgdb = require('mongodb')
const client = mgdb.MongoClient 

const psw = "uhw8inVMxDRBtgmw"
const url = "mongodb+srv://younesharrat5896:"+psw+"@cluster-alten.qqnnpgu.mongodb.net/?retryWrites=true&w=majority"


client.connect(url, (err, c) => {

  console.log("yes connected", {
    client: c,
  })
  
  
})



app.listen(port)

