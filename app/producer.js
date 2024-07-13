const { kafka } =  require('./client/client')
const readline = require('readline');

const rl = readline.createInterface(
    process.stdin, process.stdout
);

async function init() {
    const producer = kafka.producer();

    console.log("Connecting Producer")
    await producer.connect();
    console.log("Producer connected successfully")

    rl.setPrompt('> ')
    rl.prompt();

    rl.on('line', async function(line) {
        const [driverId, region] = line.split(' ')
        const partition = region.toLowerCase() === 'north' ? 0 : 1;
        const location = '41.40338, 2.17403'    // location hardcoded

        console.log("Sending/posting message")
        await producer.send({
            topic: 'public.kuber.driver.tracker',
            messages: [
                {   partition: partition,
                    key: 'location', value: JSON.stringify({id: driverId, location: location, region: region})}
            ]
        });  
        console.log("Message sent")     
    }).on('close', async() => {
        await producer.disconnect();
        console.log("Producer disconnected")
    })
}

init();