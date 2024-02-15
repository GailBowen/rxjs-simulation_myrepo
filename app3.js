import readline from 'readline';

console.log('hello Cagney & Lacey');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your question: ', (question) => {
    rl.question('Enter the answer: ', (answer) => {
        console.log(`Question: ${question}`);
        console.log(`Answer: ${answer}`);
        rl.close();
    });
});

console.log('goodbye Cagney & Lacey');
