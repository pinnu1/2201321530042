const sendLog = require('./middleware/logsnd');

async function main() {
    const stack = "backend";
    const level = "error";
    const packageName = "handlers";
    const message = "received string";

    await sendLog(stack, level, packageName, message);
}

main().catch(err => console.error('Error in main function:', err));
