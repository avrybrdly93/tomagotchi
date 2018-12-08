var inquirer = require('inquirer');
function Tomagotchi ( hungry, sleepy, bored, age, name) {
    this.hungry = hungry,
    this.sleepy = sleepy,
    this.bored = bored,
    this.age =  age,
    this.name = name,


    this.Feed = function (){
        if(hungry === true){
            console.log("That was yummy!");
            this.sleepy = true;
        }
        else{
            console.log("No thanks! I'm full.");
        }
    };
    
    this.Sleep = function (){
        if(this.sleepy === true){
            console.log("Zzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
            this.sleepy = false;
        }
        else{
            console.log("No way! I'm not tired! I'm not tired.")
            this.bored = true;
            increaseAge += 1;
        }
    };
    
    this.Play = function(){
        if(this.bored == true){
            console.log("Yay! Let's Play!");
            this.bored = false;
            this.hungry = true;
        }
        else{
            console.log("Not right now. Later?")
        }
    };
    
    this.increaseAge = function(){
        console.log("Happy Birthday to me! I am " + this.age + "old.");
    }; 
}

let dog = new Tomagotchi();
dog.outside = false;
dog.bark = function() {
    console.log("Woof Woof");
}
dog.goOutside = function() {
    if(this.outside === false) {
        console.log("Yay! I love the outdoors!");
        this.outside = true;
        this.bark();
    }
}
dog.goInside = function() {
    if(this.outside === true) {
        console.log("Do we have to? Fine...");
        this.outside = false;
    }
    else {
        console.log("I'm already inside");
    }
}
let cat = new Tomagotchi();
cat.houseCondition = 100;
cat.meow = function() {
    console.log("Meow! Meow!");
}
cat.destroyFurniture = function() {
    if(this.houseCondition > 0) {
        this.houseCondition -= 10;
        console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
        this.bored = false;
        this.sleepy = true;
    }
}
cat.buyNewfurniture = function() {
    this.houseCondition += 50;
    console.log("Are you sure?");
}

inquirer.prompt([
    {
        type: "input",
        message: "What is the name of your Tomagotchi?",
        name: "tName"
    },
    {
        type: "list",
        message: "Is your tomagotchi hungry?",
        choices: ["yes", "no"],
        name: "tHungry"
    },
    {
        type: "list",
        message: "Is your tomagotchi sleepy?",
        choices: ["yes", "no"],
        name: "tSleepy"
    },
    {
        type: "list",
        message: "is your tomagotchi bored?",
        choices: ["yes", "no"],
        name: "tBored"
    },
    {
        type: "input",
        message: "How old is your tomagotchi?",
        name: "tAge"
    }

]).then(function(response) {
    let userTomagotchi = new Tomagotchi(response.tHungry, response.tSleepy, response.tBored, response.tAge, response.tName);
    console.log("Your tomagotchi's name is " + userTomagotchi.name);
    yesOrNo(userTomagotchi.hungry, "Yes, your tomagotchi is hungry", "No, your tomagotchi isn't hungry :(");
    yesOrNo(userTomagotchi.sleepy, "Yes, your tomagotchi is sleepy", "No, your tomagotchi isn't sleepy :(");
    yesOrNo(userTomagotchi.bored, "Yes, your tomagotchi is bored", "No, your tomagotchi isn't bored :(");
    console.log("Your tomagotchi's age is " + userTomagotchi.age);
});

function yesOrNo(tomagotchiStatus, tomagotchiYes, tomagotchiNo) {
    if(tomagotchiStatus === "yes") {
        console.log(tomagotchiYes);
    }
    else {
        console.log(tomagotchiNo);
    }
}
    