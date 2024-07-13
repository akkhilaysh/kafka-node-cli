const { kafka } =  require('./client')

async function init() {
    const producer = kafka.producer();

    console.log("Connecting Producer")
    await producer.connect();
    console.log("Producer connected successfully")

    console.log("Sending/posting message")
    await producer.send({
        topic: 'public.kuber.driver.tracker',
        messages: [
            {   partition: 0,
                key: 'location', value: JSON.stringify({id: '49882', location: '41.40338, 2.17403', region: 'north'})}
        ]
    });
    console.log("Message sent")

    await producer.disconnect();
    console.log("Producer disconnected")
}

init();