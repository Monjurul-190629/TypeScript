function getTime(): number {
    return new Date().getTime();
}

console.log(getTime())

/// Time related (Extra)
const d = new Date();


const day = d.getDate();
const Month = d.getMonth() + 1;
const year = d.getFullYear();


const date1 = () => {
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();

    console.log(`${hours}:${minutes}: ${seconds}`)

}

console.log(`${day}-${Month}-${year}`)


function time(h: any, m: any, s: any): void {
    console.log(`${h}:${m}:${s}`)
}

setInterval(() => {
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();

    console.log(`${hours}:${minutes}: ${seconds}`)
}, 1000)



//// Default parameter
function pow(value: number, exponent: number = 10) {
    return value ** exponent;
  }



//// Rest Parameters

function add(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
  }