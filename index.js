// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count


// let lapsCompleted = 0;

// function increase() {
//     lapsCompleted++;
    
// }

// increase();
// increase();
// increase();
// increase();

// console.log(lapsCompleted);

let count = 0;

let countEl = document.getElementById("count-el");
// console.log(countEl);

// function increment() {
//     count = count + 1;
    
//     countEl.innerText = count;
//     // document.getElementById("count-el").innerText = count;
//     // console.log(count);
// }

const increment = () => {count++
countEl.innerHTML = count
console.log(count)};

const decrement = () => {count--
countEl.innerHTML = count
console.log(count)};

const reset = () => { count -= count
countEl.innerHTML = count
console.log(count)};




