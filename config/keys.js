const { model } = require("mongoose");

module.exports = {
    MongoURI: 'mongodb://bobi:pass123abc@clusterdev-shard-00-00.ijda1.mongodb.net:27017,clusterdev-shard-00-01.ijda1.mongodb.net:27017,clusterdev-shard-00-02.ijda1.mongodb.net:27017/test?ssl=true&replicaSet=atlas-12ab21-shard-0&authSource=admin&retryWrites=true&w=majority'
    // MongoURI: 'mongodb+srv://bobi:pass123abc@clusterdev.ijda1.mongodb.net/test?retryWrites=true&w=majority&ssl=true'
}