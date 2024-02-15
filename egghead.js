
// ES6 code
import { from, interval } from 'rxjs';
import { map, filter, take } from 'rxjs/operators';

console.clear();

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const observable = from(data);

var source = interval(500).pipe(take(10));

source
  .pipe(
    filter(item => item % 2 === 1),
    map(item => item + '!'),
  )
  .subscribe(result => {
    console.log(result); 
 });
