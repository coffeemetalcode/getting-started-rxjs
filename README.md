# Getting Started with RxJS

## Project Files for [Pluralsight Course](https://app.pluralsight.com/library/courses/reactive-programming-rxjs-getting-started/table-of-contents)

### See [RxJS Documentation](https://rxjs-dev.firebaseapp.com/) for full docs
***
#### Formal implementation of Observer
```typescript
import { from, Observer } from 'rxjs';

let numbers = [1, 5, 10];

let source = from(numbers);

class myObserver implements Observer<number> {
  next(val) { // next method
    console.log(val);
  }
  
  error(err) { // error method
    console.log(err);
  }

  complete() { // complete method
    console.log('complete');
  };
}

source.subscribe(new myObserver); // subscribe to the observer
```
***
#### Less formal implementation
```typescript
import { Observable } from 'rxjs';

let numbers = [1, 5, 10];

let source = new Observable((subscriber) => {
  // some logic to process data
  for (let n of numbers) {
    subscriber.next(n);
  }

  subscriber.complete();
});

source.subscribe(
  (value) => console.log(`value: ${value}`), // corresponds to 'next'

  (error) => console.log(`error: ${error}`), // corresponds to 'error'

  () => console.log('complete') // corresponds to 'complete'
);
```
