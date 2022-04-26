import { interval, timer, of } from 'rxjs';

// const numbers$ = interval(2000);
// numbers$.subscribe(console.log);

const delayedTime$ = timer(2500);
delayedTime$.subscribe(console.log);
