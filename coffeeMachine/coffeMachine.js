const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

class ContentsOfTheCoffeeMachine {

    constructor(water, milk, beans, cups, money) {
        this.water = water;
        this.milk = milk;
        this.beans = beans;
        this.cups = cups;
        this.money = money;
    }

    get water() {
        return this._water;
    }

    set water(newWater) {
        this._water = newWater;
    }


    get milk() {
        return this._milk;
    }

    set milk(newMilk) {
        this._milk = newMilk;
    }

    get beans() {
        return this._beans;
    }

    set beans(newBeans) {
        this._beans = newBeans;
    }

    get cups() {
        return this._cups;
    }

    set cups(newCups) {
        this._cups = newCups;
    }

    get money() {
        return this._money;
    }

    set money(newMoney) {
        this._money = newMoney
    }

}


let contentsOfTheCoffeeMachine = new ContentsOfTheCoffeeMachine(400, 540, 120, 9, 550);

chooseAction();

function buy() {
    readline.question('What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:', (coffeeType) => {

        if (parseInt(coffeeType) === 1) {
            makeEspresso(contentsOfTheCoffeeMachine);
        }
        if (parseInt(coffeeType) === 2) {
            makeLatte(contentsOfTheCoffeeMachine);

        }
        if (parseInt(coffeeType) === 3) {
            makeCappuccino(contentsOfTheCoffeeMachine);
        }
        if (coffeeType === "back") {
            chooseAction();
        }

        function makeEspresso(contentsOfTheCoffeeMachine) {

            if (contentsOfTheCoffeeMachine.water >= 250 && contentsOfTheCoffeeMachine.beans >= 16 &&
                contentsOfTheCoffeeMachine.cups >= 1) {
                console.log("I have enough resources, making you a coffee!")
            } else if (contentsOfTheCoffeeMachine.water < 250) {
                console.log("Sorry, not enough water!")
            } else if (contentsOfTheCoffeeMachine.milk < 0) {
                console.log("Sorry, not enough milk!")
            } else if (contentsOfTheCoffeeMachine.beans < 16) {
                console.log("Sorry, not enough beans!")
            } else if (contentsOfTheCoffeeMachine.cups < 1) {
                console.log("Sorry, not enough cups!")
            }

            contentsOfTheCoffeeMachine.water = contentsOfTheCoffeeMachine.water - 250;
            contentsOfTheCoffeeMachine.milk = contentsOfTheCoffeeMachine.milk - 0;
            contentsOfTheCoffeeMachine.beans = contentsOfTheCoffeeMachine.beans - 16;
            contentsOfTheCoffeeMachine.cups = contentsOfTheCoffeeMachine.cups - 1;
            contentsOfTheCoffeeMachine.money = contentsOfTheCoffeeMachine.money + 4;
            chooseAction();

        }


        function makeLatte(contentsOfTheCoffeeMachine) {

            if (contentsOfTheCoffeeMachine.water >= 350 && contentsOfTheCoffeeMachine.milk >= 75 && contentsOfTheCoffeeMachine.beans >= 20 &&
                contentsOfTheCoffeeMachine.cups >= 1) {
                console.log("I have enough resources, making you a coffee!")
            } else if (contentsOfTheCoffeeMachine.water < 350) {
                console.log("Sorry, not enough water!")
            } else if (contentsOfTheCoffeeMachine.milk < 75) {
                console.log("Sorry, not enough milk!")
            } else if (contentsOfTheCoffeeMachine.beans < 20) {
                console.log("Sorry, not enough beans!")
            } else if (contentsOfTheCoffeeMachine.cups < 1) {
                console.log("Sorry, not enough cups!")
            }

            contentsOfTheCoffeeMachine.water = contentsOfTheCoffeeMachine.water - 350;
            contentsOfTheCoffeeMachine.milk = contentsOfTheCoffeeMachine.milk - 75;
            contentsOfTheCoffeeMachine.beans = contentsOfTheCoffeeMachine.beans - 20;
            contentsOfTheCoffeeMachine.cups = contentsOfTheCoffeeMachine.cups - 1;
            contentsOfTheCoffeeMachine.money = contentsOfTheCoffeeMachine.money - 7;
            chooseAction();

        }

        function makeCappuccino(contentsOfTheCoffeeMachine) {

            if (contentsOfTheCoffeeMachine.water >= 200 && contentsOfTheCoffeeMachine.milk >= 100 && contentsOfTheCoffeeMachine.beans >= 12 &&
                contentsOfTheCoffeeMachine.cups >= 1) {
                console.log("I have enough resources, making you a coffee!")
            } else if (contentsOfTheCoffeeMachine.water < 200) {
                console.log("Sorry, not enough water!")
            } else if (contentsOfTheCoffeeMachine.milk < 100) {
                console.log("Sorry, not enough milk!")
            } else if (contentsOfTheCoffeeMachine.beans < 12) {
                console.log("Sorry, not enough beans!")
            } else if (contentsOfTheCoffeeMachine.cups < 1) {
                console.log("Sorry, not enough cups!")
            }

            contentsOfTheCoffeeMachine.water = contentsOfTheCoffeeMachine.water - 200;
            contentsOfTheCoffeeMachine.milk = contentsOfTheCoffeeMachine.milk - 100;
            contentsOfTheCoffeeMachine.beans = contentsOfTheCoffeeMachine.beans - 12;
            contentsOfTheCoffeeMachine.cups = contentsOfTheCoffeeMachine.cups - 1;
            contentsOfTheCoffeeMachine.money = contentsOfTheCoffeeMachine.money - 6;
            chooseAction();

        }
    });
}

function fill() {
    readline.question('Write how much ml of water do you want to add: ', (howMuchWater) => {
        contentsOfTheCoffeeMachine.water = contentsOfTheCoffeeMachine.water + parseInt(howMuchWater);

        readline.question('Write how much ml of milk do you want to add: ', (howMuchMilk) => {
            contentsOfTheCoffeeMachine.milk = contentsOfTheCoffeeMachine.milk + parseInt(howMuchMilk);

            readline.question('Write how many of beans do you want to add: ', (howManyBeans) => {
                contentsOfTheCoffeeMachine.beans = contentsOfTheCoffeeMachine.beans + parseInt(howManyBeans);

                readline.question('Write how many of cups do you want to add: ', (howManyCups) => {
                    contentsOfTheCoffeeMachine.cups = contentsOfTheCoffeeMachine.cups + parseInt(howManyCups);

                    readline.question('Write how much of money do you want to add: ', (howMuchMoney) => {
                        contentsOfTheCoffeeMachine.money = contentsOfTheCoffeeMachine.money + parseInt(howMuchMoney);

                        chooseAction();

                    });
                });
            });
        });
    });
}

function chooseAction() {
    readline.question('Write action (buy, fill, take, remaining, exit): ', (userInput) => {
        if (userInput === "buy") {
            buy();
        }
        if (userInput === "fill") {
            fill();
        }
        if (userInput === "take") {
            take();
        }
        if (userInput === "remaining") {
            remaining();
        }
        if (userInput === "exit") {
            exit();
        }
    });
}

function exit() {
    process.exit(0);
}

function take() {
    readline.question('I give you: ', (howMuchMoney) => {
        contentsOfTheCoffeeMachine.money = contentsOfTheCoffeeMachine.money - howMuchMoney;
        chooseAction();
    });
}

function remaining() {
    console.log("The coffee machine has:");
    console.log(contentsOfTheCoffeeMachine.water + "g of water");
    console.log(contentsOfTheCoffeeMachine.milk + "g of milk");
    console.log(contentsOfTheCoffeeMachine.beans + "g of coffee beans");
    console.log(contentsOfTheCoffeeMachine.cups + " of cups");
    console.log(contentsOfTheCoffeeMachine.money + " of money");
    chooseAction();
}


