const express = require('express')
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const router = express.Router()

const url = 'mongodb+srv://crazy_pro:sdsadas@cluster0-ntrwp.mongodb.net/locations?retryWrites=true&majority'


const client = new MongoClient(url)

const locationStorage = {
    locations: []
}

router.post('/add-location', (request, response, next) => {
    // const id = Math.random()
    client.connect(function (err, client) {
        const db = client.db(dbName)

        db.collection('user-locations').insertOne({
            adress: request.body.adress,
            coordinates: {
                lat: request.body.lat,
                lng: request.body.lng
            }
        },
            function (err, r) {
                response.json({
                    message: 'Stored location!',
                    locationId: r.insertedId
                })
            })
    })
    locationStorage.locations.push({
        id: id,
        adress: request.body.adress,
        coordinates: {
            lat: request.body.lat,
            lng: request.body.lng
        }
    })
})


router.post('/location/:locationId', (request, response, next) => {
    const locationId = +request.params.locationId

    client.connect(function (err, client) {
        const db = client.db(dbName)

        db.collection('user-locations').findOne({
            _id: new mongodb.ObjectId(locationId),
            adress: request.body.adress,
            coordinates: {
                lat: request.body.lat,
                lng: request.body.lng
            }
        },
            function (err, doc) {
                if (!doc) {
                    return response
                        .status(404)
                        .json({
                            message: 'Not Found'
                        })
                }
                response.json({
                    adress: doc.adress,
                    coordinates: doc.coordinates
                })
            },
        )
    })
    const location = locationStorage.locations.find(loc => {
        return loc.id === locationId
    })
    if (!location) {
        response
            .status(404)
            .json({
                message: 'Not Found!'
            })
    }
    response.json({
        adress: location.adress,
        coordinates: location.coordinates
    })
})

module.exports = router
