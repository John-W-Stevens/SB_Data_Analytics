const fs = require("fs")
const axios = require("axios")
const {Client, Status} = require("@googlemaps/google-maps-services-js");


axios.get("http://localhost:8000/api/businesses")
    .then(res => {
        for (const business of res.data.Businesses){
            let name = `${business.nameOfFirm}`
            let address = `${business.address} ${business.city} ${business.state} ${business.zipCode}`
            let geolocation = ""
            const client = new Client({});
            client
                .geocode({
                    params: {
                        address: address,
                        key: "AIzaSyCkv5iWhTid6y-MzbBTnojVUVPKETHaqvc",
                    },
                    timeout: 1000, // milliseconds
                })
                    .then((r) => {
                    if (r.data.status === Status.OK) { getlocation = r.data.results[0].geometry.location } 
                    else { console.log(r.data.error_message)}
                    })
                    .catch((e) => {
                        console.log(e);
                    });
          
            let entry = `{"name": "${name}", "address": "${address}", "geolocation": "${geolocation}"}`
            fs.appendFile("all_addresses.txt", entry + ",\n", (err)=>{if(err) throw err})
        }
    })
    .catch(err => console.log("There was a problem: ", err))


// for (const entry of data){
//     fs.appendFile("all_addresses.txt", entry + ",\n", (err)=>{if(err) throw err})
// }

