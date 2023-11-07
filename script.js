var heading;
var executeButton;
var outputParagraph;
var inputElement;

const clothingClickBox = document.getElementById('clothingClickBox');
const topImage = document.getElementById('topImage');
const bottomImage = document.getElementById('bottomImage');
const sneakerImage = document.getElementById('sneakerImage');

const tops = ["greentop.png", "bluetop.png", "orangetop.png", "multishirt.png", "greensweater.png"]; // Add URLs of top images
const bottoms = ["brownskirt.png", "blackskirt.png", "jeanskirt.png", "cargos.png", "skirt.png"]; // Add URLs of bottom images
const sneakers = ["newbalance.png", "brownconverse.png", "blackconverse.png"]; // Add URLs of sneaker images

clothingClickBox.addEventListener('click', function () {
    const randomTop = tops[Math.floor(Math.random() * tops.length)];
    const randomBottom = bottoms[Math.floor(Math.random() * bottoms.length)];
    const randomSneaker = sneakers[Math.floor(Math.random() * sneakers.length)];

    topImage.src = randomTop;
    bottomImage.src = randomBottom;
    sneakerImage.src = randomSneaker;
    topImage.style.display = 'block';
    bottomImage.style.display = 'block';
    sneakerImage.style.display = 'block';
});


const foodMessages = [
    {text: "dumplings", image: "dumplings.png"},
    {text: "sushi", image: "sushi.png"},
    {text: "tacos", image: "tacos.png"},
    {text: "ramen", image: "ramen.png"},
    {text: "spaghetti", image: "spaghetti.png"}
    // Add more food options as needed
];



document.addEventListener("DOMContentLoaded", function(){

  heading = document.getElementById("title");
  executeButton = document.getElementById("executeButton");
  outputParagraph = document.getElementById("otheroutputText");
  // outputParagraph = document.getElementById("outputText");
  inputElement = document.getElementById("myInput");

  executeButton.addEventListener("click", function(){
    final_message();
  });

  document.addEventListener("mousemove", function(event) {
    mouseMovedFunc(event);
  })

});


const foodClickBox = document.getElementById('foodClickBox');
const foodOutputText = document.getElementById('foodOutputText');
const foodOutputImage = document.getElementById('foodOutputImage');



foodClickBox.addEventListener('click', function() {
    const randomFoodMessage = getRandomMessages(foodMessages);
    foodOutputText.textContent = randomFoodMessage.text;

    if (randomFoodMessage.image) {
        foodOutputImage.src = randomFoodMessage.image;
        foodOutputImage.style.display = 'block';
    } else {
        foodOutputImage.style.display = 'none';
    }
});

function final_message(){
  var currentInputText = inputElement.value;
  outputParagraph.innerText = currentInputText + ", you will be paying :)";
  restyleOutput();

}

function restyleOutput() {

  var randomRed = Math.random() * 255;
  var randomGreen = Math.random() * 255;
  var randomBlue = Math.random() * 255;
  var outputColorString = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";

  outputParagraph.style.color = outputColorString;

  var randomFontSize = Math.floor(Math.random() * 40) + 10; // Random font size between 10 and 50 pixels
  outputParagraph.style.fontSize = randomFontSize + 'px';

  var randomBackgroundRed = Math.random() * 255;
  var randomBackgroundGreen = Math.random() * 255;
  var randomBackgroundBlue = Math.random() * 255;
  var backgroundColorString = "rgb(" + randomBackgroundRed + "," + randomBackgroundGreen + "," + randomBackgroundBlue + ")";
}

const messages = [
            {text: "we're going to the movies", image:"movie.gif"},
            {text: "we're going to get boba",image:"boba.png"},
            {text:"we're going for a  walk in the park",image:"park.gif"},
            {text:"we're going to a cat cafe",image:"cat.gif"},
            {text:"we're going to a concert",image:"concert.gif"},
            {text:"we're going to the beach",image:"beach.gif"},
            {text:"we're going to the mall",image:"shopping.gif"},
            {text:"we're going to get coffee",image:"coffee.gif"},
            {text:"we're going ice skating",image:"iceskate.gif"},
            {text:"we're going biking",image:"biking.gif"},
            {text:"we're going for a long drive",image:"drive.gif"}
        ];

        const clickBox = document.getElementById('clickBox');
        const outputText = document.getElementById('outputText');
         const outputImage = document.getElementById('outputImage');

        function getRandomMessage() {
            const randomIndex = Math.floor(Math.random() * messages.length);
            return messages[randomIndex];
        }

        clickBox.addEventListener('click', function() {
            const randomMessage = getRandomMessage();
            outputText.textContent = randomMessage.text;

            if (randomMessage.image) {
                outputImage.src = randomMessage.image;
                outputImage.style.display = 'block';
            } else {
                outputImage.style.display = 'none';
            }
        });

document.addEventListener("DOMContentLoaded", function(){
    const executeButton = document.getElementById("executeButton");
    const cashElement = document.querySelector(".cash");
    const outputText = document.getElementById("otheroutputText");
    const inputElement = document.getElementById("myInput");

    executeButton.addEventListener("click", function(){
        const name = inputElement.value;
        outputText.textContent = name + ", you're not invited for a second date :p";
        toggleCashVisibility(); // Toggle cash image visibility
    });

    function toggleCashVisibility() {
        if (outputText.textContent.trim() !== "") {
            cashElement.style.display = "block"; // Show cash image
        } else {
            cashElement.style.display = "none"; // Hide cash image
        }
    }


     function getRandomMessage() {
            const randomIndex = Math.floor(Math.random() * messages.length);
            return messages[randomIndex];
        }
});

function getRandomMessages(messagesArray) {
    const randomIndex = Math.floor(Math.random() * messagesArray.length);
    return messagesArray[randomIndex];
}





