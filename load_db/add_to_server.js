const csvtojson = require("csvtojson")
const axios = require("axios")

var dbEntries = []

axios.get("http://localhost:8000/api/businesses")
    .then(res => {
        dbEntries = res.data
        let firmNames = {}
        for (const entry of dbEntries.Businesses){
            firmNames[entry.nameOfFirm] = entry.nameOfFirm
        }
        csvtojson()
            .fromFile("all_sb_wa.csv")
            .then(csvData => {
                data = csvData
                for (const d of data){
                    if (!firmNames[d.name_of_firm]){
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
                }
            })
    })
    .catch(err => console.log("There was an error: ", err))

