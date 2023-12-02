function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
async function doWork() {
    await delay(500);
    console.log('End of work');
    
    let start = new Date().getTime();
    let now = start;
    
}

 doWork();

function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time))
}

let example1Button = document.querySelector('#example-1')
let example2Button = document.querySelector('#example-2')
let example3Button = document.querySelector('#example-3')

example1Button.addEventListener('click', function () {
    exampleOne()
    example1Button.textContent = 'Done!'
})

example2Button.addEventListener('click', function () {
    exampleTwo()
        .then(function () {
            example2Button.textContent = 'Done!'
        })
})

example3Button.addEventListener('click', function () {
    Promise.all(exampleThree())
        .then(function(){
            example3Button.textContent = 'Done!'
        })
})