
const axios = require("axios")
const csvtojson = require("csvtojson")

var data = []

csvtojson()
.fromFile("vwm_sb_wa.csv")
.then(csvData => {
  data = csvData
  for (const d of data){
      console.log(d)
      axios.post("http://localhost:8000/api/business", {
          nameOfFirm: d.name_of_firm,
          tradeName: d.tradeName,
          category: d.category,
          owner: d.owner,
          address: d.address,
          city: d.city,
          state: d.state,
          zipCode: d.zip,
          description: d.description,
      })
        .then()
        .catch(err => console.log("There was an error: ", err))
  }
})