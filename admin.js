const { kafka } = require('./client')

async function init() {
    const admin = kafka.admin();
    console.log("Admin connecting...")
    admin.connect();
    console.log("Admin connection success!")

    console.log("Creating topic to track driver")
    await admin.createTopics({
        topics: [{
            topic: "public.kuber.driver.tracker",
        numPartitions: 2
        }],
    });
    console.log("Topic created.")
}

init();