const alla = [1, 4, 8, 12, 16, 20];

function max() {
    let arr = Math.max(...alla);
    console.log(arr)
}

max();

function min() {
    let arr = Math.min(...alla);
    console.log(arr)
}

min();

const all = [1, 4, 8, 12, 16, 20];

function max() {
    let arr = Math.max(...all);
    console.log(arr)
}

max();

function min() {
    let arr = Math.min(...all);
    console.log(arr)
}

min();

function mean() {
    let arr = (alla[0] + alla[1] + alla[2] + alla[3] + alla[4] + alla[5]) / 6
    console.log(Math.round(arr))
}

mean();