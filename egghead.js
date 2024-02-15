
// ES6 code
import { from } from 'rxjs';
import { map, filter } from 'rxjs/operators';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const observable = from(data);

observable
  .pipe(
    filter(item => item % 2 === 1),
    map(item => item + '!'),
  )
  .subscribe(result => {
    console.log(result); 
 });
