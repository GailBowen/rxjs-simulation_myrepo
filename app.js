//Simulating rxjs, a fix for: https://dev.to/creeland/intro-to-rxjs-concepts-with-vanilla-javascript-4aji?utm_campaign=an-intro-to-rxjs-concepts-with-vanilla-j
import process from 'process';

var stdin = process.openStdin();
stdin.resume();

const observer = {
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

const observable = {
    subscribe: observer => {
        stdin.on('data', data => {

            data = data.toString().trim();

            //convert data to a number or error
            if (isNaN(data)) {
                observer.error('Not a number')
            }

            data = parseInt(data);

            observer.next({ data });
        })
    },
    pipe: function (operator) {
        return operator(this)
    }
}

const map = function (f) {
    return observable => {
        return {
            subscribe: observer => {
                observable.subscribe({
                    next: x => {
                        observer.next(f(x))
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


observable
    .pipe(map(z => z.data + 1))
    .pipe(map(y => y * 2))
    .pipe(map(x => x * 100))
    .subscribe(observer)



///Original:
// observable
// .pipe(map(bob => { return {...bob, pipe1: { data: 'cagney', cat2: 'Lacey'}} }))
// .pipe(map(bob => { return {...bob, data: 7} }))
// .pipe(map(bob => { return {...bob, pipe2: 'what is for dinner tonight?'} }))
// .subscribe(observer)