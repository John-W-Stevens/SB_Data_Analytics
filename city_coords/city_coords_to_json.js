const csvtojson = require("csvtojson")
const fs = require("fs")


csvtojson()
    .fromFile("wa_cities_geocoords.csv")
    .then(csvData => {
        data = csvData
        fs.appendFile("city_coordinates.js", "cities = {" +"\n", (err)=>{if(err) throw err})
        for (const entry of data){
            let line = `    { "city": "${entry.city}", "lat": "${entry.latitude}", "long": "${entry.longitude}"}`
            fs.appendFile("city_coordinates.js", line + ",\n", (err)=>{if(err) throw err})
        }
        fs.appendFile("city_coordinates.js", "}", (err)=>{if(err) throw err})
    }
)
