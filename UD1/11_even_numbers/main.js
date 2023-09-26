function evenNumbers() {
    for(var i = 1; i < 100; i++){
        i % 2 == 0 ? console.log(i) : console.log()
    }
}

evenNumbers();
// expected output 2,4,6,8,10......98