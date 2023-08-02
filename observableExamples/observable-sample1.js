import {Observable} from 'rxjs';

const observable2 = new Observable((subscriber)=>{
  subscriber.next('value 1 from observable');
  subscriber.next('value 2 from observable');
  setTimeout(()=>{
    subscriber.next('value 3 from observable');
  }, 1000);
  subscriber.next('value 4');
  subscriber.next('value 5');
  setTimeout(()=>{
    subscriber.error('Error occured in observable');
    subscriber.complete();
  }, 2000);
});
console.log('before subscribing values from the observable');
observable2.subscribe({
  next(value) {
    console.log(value);
  },
  error(err) {
    console.log('Inside error function');
    console.log(err);
  },
  complete() {
    console.log('observable execution completed');
  },
});
