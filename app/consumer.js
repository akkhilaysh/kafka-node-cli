const { kafka } = require('./client/client')
const group = process.argv[2];

async function init(){
    // Create a new consumer with the group id passed on as a cli argument
    const consumer = kafka.consumer({ groupId: group});
    await consumer.connect();

    await consumer.subscribe({
        topics: 
            ["public.kuber.driver.tracker"],
        fromBeginning: true,
        });

        await consumer.run({
            eachMessage: async ({ topic, partition, message, heartbeat, pause }) => 
            console.log(`${group}: [${topic}]: PART${partition}: message:`, message.value.toString())
            },
);
}       

init();