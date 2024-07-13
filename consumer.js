const { kafka } = require('./client')

async function init(){
    const consumer = kafka.consumer({ groupId: 'cgroup-1'});
    await consumer.connect();

    await consumer.subscribe({
        topics: 
            ["public.kuber.driver.tracker"],
        fromBeginning: true,
        });

        await consumer.run({
            eachMessage: async ({ topic, partition, message, heartbeat, pause }) => 
            console.log(`[${topic}]: PART${partition}: message:`, message.value.toString())
            },
);
}       

init();