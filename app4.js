//Simulating rxjs, a fix for: https://dev.to/creeland/intro-to-rxjs-concepts-with-vanilla-javascript-4aji?utm_campaign=an-intro-to-rxjs-concepts-with-vanilla-j
import process from 'process';

var stdin = process.openStdin();
stdin.resume();

const consumer = {
    next: x => {
        console.log(x)
    },
    error: err => {
        console.log(err)
    },
    complete: () => {
        console.log("done")
    }
}

const producer = {
    subscribe: consumer => {
        stdin.on('data', data => {

            data = data.toString().trim();

            //convert data to a number or error
            if (isNaN(data)) {
                consumer.error('Not a number')
            }

            data = parseInt(data);

            consumer.next({ data });
        })
    },
    pipe: function (operator) {
        return operator(this)
    }
}


const bigProducer = {
    subscribe: consumer => {
        stdin.on('data', data => {

            data = data.toString().trim();

            //convert data to a number or error
            if (isNaN(data)) {
                consumer.error('Not a number')
            }

            data = parseInt(data);

            data = data * 100;

            consumer.next({ data });
        })
    },
    pipe: function (operator) {
        return operator(this)
    }
}




const map = function (f) {
    return producer => {
        return {
            subscribe: consumer => {
                producer.subscribe({
                    next: x => {
                        consumer.next(f(x))
                    },
                    error: err => {
                        console.error(err)
                    },
                    complete: () => {
                        console.log("finished")
                    }
                })
            },
            pipe: function (operator) {
                return operator(this)
            },
        }
    }
}


// producer
//     .pipe(map(z => z.data + 1))
//     .pipe(map(y => y * 2))
//     .pipe(map(x => x * 100))
//     .subscribe(consumer)


bigProducer
    .pipe(map(z => z.data + 1))
    .pipe(map(z => z + 2))
    .pipe(map(z => z - 10))
    .subscribe(consumer);



///Original:
// observable
// .pipe(map(bob => { return {...bob, pipe1: { data: 'cagney', cat2: 'Lacey'}} }))
// .pipe(map(bob => { return {...bob, data: 7} }))
// .pipe(map(bob => { return {...bob, pipe2: 'what is for dinner tonight?'} }))
// .subscribe(observer)