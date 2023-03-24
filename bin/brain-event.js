#!/usr/bin/env node
import readlineSync from 'readline-sync';

const greetingsFunction = () => {
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    return name;
};

const evenOddGame = (name) => {

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let correctAnswersCounter = 0;

    while (correctAnswersCounter < 3) {
        const num = Math.trunc(Math.random() * 100); //get random number in [0; 99]
        let correctAnswer;

        num % 2 === 0 ? correctAnswer = 'yes' : correctAnswer = 'no';
        console.log(`Question: ${num}`);

        const usersAnswer =  readlineSync.question('Your answer: ');
        
        if(usersAnswer === correctAnswer) {
            console.log('Correct!');
            correctAnswersCounter += 1;
        } else {
            console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
            correctAnswersCounter = 0;
        }
    }

    console.log(`Congratulations, ${name}!`);
};

const name = greetingsFunction();
evenOddGame(name);