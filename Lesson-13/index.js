import chalk from 'chalk';
import dayjs from 'dayjs';

const now = dayjs().format('YYYY-MM-DD');
const date = dayjs().format('HH:mm:ss');

//console.log('Current Date is: ', now.format('YYYY-MM-DD'));

//console.log('Current Time is: ', now.format('HH:mm:ss'));

//Execute the index.js and see the results.

// Using chalk library
console.log(chalk.blue(now));
console.log(chalk.bgRed.bold(date));
