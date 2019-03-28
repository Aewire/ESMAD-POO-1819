function betweenMultiplesEven(start, finish) {
    for (let i = start; i < finish; i++) {
        //const result = 0;
        if (i % 5 === 0 && i % 2 === 0) {
            console.log(i)
        }

    }
}
betweenMultiplesEven(3, 200);