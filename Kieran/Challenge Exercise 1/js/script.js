"use strict";
class Person {
    constructor(name, age, location, hobbies, favoriteMusic, tagline, imgSrc, fav) {
        this.name = name;
        this.age = age;
        this.location = location;
        this.hobbies = hobbies;
        this.favMusic = favoriteMusic;
        this.tagLine = tagline;
        this.imgSrc = imgSrc;
        this.fav = false;
        // Adding card to the DOM
        this.displayCard();
        // Adding this card to an obj array
        personArr.push(this);
    }
    // Create card with the user's params
    displayCard() {
        $("#peopleList").append(`
            <div class="col-3 mb-4">
                <div class="card p-2" id="person${this.name}">
                    <img src="img/${this.imgSrc}" class="card-img-top img-fluid" style="object-fit: contain; max-height: 200px" alt="">

                    <div class="card-body">
                        <p class="card-text text-center">${this.tagLine}</p>
                    </div>

                    <p class="heart h1">&#9829</p>
                </div>        
            </div>
        `);
    }
}
// Creating an empty array to fill with each person
let personArr = [];
// Creating the users
let p1 = new Person("Tom", 25, "Vienna", ["Extereme Ironing", "Plants"], "Lo-Fi", "love Football", "person1.jpg", false);
let p2 = new Person("Ahmed", 28, "Berlin", ["Nightclubs", "Festivals"], "GOA", "Nightlife", "person2.jpg", false);
let p3 = new Person("Carol", 29, "Paris", ["Books", "Running"], "House", "Library Life", "person3.jpg", false);
let p4 = new Person("Karen", 32, "Rome", ["Netflix", "Cats"], "Pop", "A good night in", "person4.jpg", false);
let p5 = new Person("Chris", 35, "Newcastle", ["Cinema", "Dogs"], "Classic Rock", "I'd rather be coding...", "person5.jpg", false);
let p6 = new Person("Holly", 34, "London", ["Cycling"], "Pop-rock", "(AFK)", "person6.png", false);
let p7 = new Person("Ted", 22, "Amsterdamn", ["Chilling", "Cafes"], "Chillhop", "Im working in a cafe atm", "person7.jpg", false);
let p8 = new Person("Janice", 32, "America", ["Guitar"], "Whatever is on the radio", "Tabs or 4x spaces", "person8.jpg", false);
console.table(personArr);
// Getting an array of the hearts
let heartArr = $(".heart");
// black &#9829
// Red &#10084
for (let i = 0; i < heartArr.length; i++) {
    $(heartArr[i]).on("click", function () {
        if (personArr[i].fav) {
            $(heartArr[i]).css("color", "black");
            personArr[i].fav = false;
            // Add logic to remove card from favs
        }
        else {
            $(heartArr[i]).css("color", "red");
            personArr[i].fav = true;
            // Add logic to add card to favs
        }
    });
}
