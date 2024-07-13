const { Kafka } = require('kafkajs')

// Create a new Kafka client
exports.kafka = new Kafka({
    clientId: "kafka-node-app",
    brokers: ["localhost:9092"],
});