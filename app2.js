
const myobj = {
    a: 'herher',
    b: () => {
       console.log(this.a)
    }
}

myobj.b();
