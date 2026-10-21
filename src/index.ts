let money: number = 300000
while (true) {
    console.log(`you have: ${money} money`)
    let Userinput = prompt("please enter number")
    let Userinput1 = prompt("money")
    let y: number = Number(Userinput);
    let x: number = Number(Userinput1)
    if (Number.isNaN(x) || x > money) {
        x = money
        console.log("TOOOOOOOOOOOO MUCHHHHHHHH YOUUUUUU BROKKKKKKIIIIIIIIIEEEEEEEEEEEE")
    }
    if (Number.isNaN(y) || y > 2) {
        y = getRandomInt(0, 2)
        console.log("number has to be 0-2")
    }
    console.log(`your number is ${y}`)
    money = money - x


    function getRandomInt(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        let a: number = Math.random();
        let b: number = max - min + 1;
        let c: number = Math.floor(a * b);
        return c + min
        //   return Math.floor(Math.random() * (max - min + 1)) + min;
    }



    let randomInt = getRandomInt(0, 2);
    console.log(randomInt)

    if (randomInt === 0) {
        console.log("grün")
    }

    else if (randomInt % 2 === 1) {
        console.log("rot")
    }
    else {
        console.log("schwarz")
    }

    if (y === randomInt) {
        console.log("win");
        x *= 2;
    }
    else {
        console.log("lose")
        x = 0
    }
    money += x


    if (money <= 0) {
        money = 3000001
    }
}