# kafka-node-cli
Kafka CLI app that creates a Kafka instance, creates a producer and consumer based on user input. You can send messages using this cli too by running producer.js. Produced messages can be read by consumers (created through the command line interface) listening to subscribed topics. You can specify consumer groups by passing the name of the group as a parameter while creating a new consumer.

# Demo:
![](./assets/kafka-node-demo.gif)

Upcoming commits:
1. Dockerize app
2. Complete readme on how to run project using docker, adding commands that will start Kafka and Zookeper in the background on their respective ports.
