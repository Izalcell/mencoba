// Display current date and time
const date = new Date();

// Function to get month in Indonesian
function getIndonesianMonth(month) {
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 
        'Jul', 'Agt', 'Sep', 'Okt', 'Nov', 'Des'
    ];
    return months[month];
}

// Format the date as DD-MMM-YYYY in Indonesian
const day = String(date.getDate()).padStart(2, '0');
const month = getIndonesianMonth(date.getMonth()); // Get month in Indonesian
const year = date.getFullYear();
const formattedDate = `${day} ${month} ${year}`;

const currentDate = document.getElementById('currentDate');
const currentTime = document.getElementById('currentTime');
currentDate.textContent = formattedDate;

const hours = String(date.getHours()).padStart(2, '0');
const minutes = String(date.getMinutes()).padStart(2, '0');
currentTime.textContent = `${hours}:${minutes} WIB`; // Menambahkan WIB di akhir

// Function to generate a random 16-digit number
function generatenoreff() {
    let noreff = 'No Ref. ';
    for (let i = 0; i < 16; i++) {
        noreff += Math.floor(Math.random() * 10);
    }
    return noreff;
}

// Function to generate a random 3-digit number
function generatenorek() {
    let norek = 'xxx xxx ';
    for (let i = 0; i < 3; i++){
        norek += Math.floor(Math.random() * 10);
    }
    return norek;
}

let firstSet = generatenorek(); // 3 random numbers
let lastNumber = Math.floor(Math.random() * 10); // 1 random number

function displayText() {
    // Get text from user input
    const userInput0 = document.getElementById("textInput0").value;
    const userInput1 = document.getElementById("textInput1").value;
    const userInput2 = document.getElementById("textInput2").value;
    const userInput3 = document.getElementById("textInput3").value;
    const userInput4 = document.getElementById("textInput4").value;

    // Display text on the image
    document.getElementById("text-overlay-0").textContent = userInput0;
    document.getElementById("text-overlay-1").textContent = userInput1;
    document.getElementById("text-overlay-2").textContent = userInput2;
    document.getElementById("text-overlay-3").textContent = userInput3;
    document.getElementById("text-overlay-4").textContent = userInput4;
    document.getElementById('noreff').textContent = generatenoreff();
    document.getElementById("norek").innerHTML = `${firstSet} ${lastNumber}`;

    // Show the image and text, hide input and button
    document.getElementById("image-container").style.display = "flex";
    document.getElementById("input-container").style.display = "none";
}

// Add event listeners for long press on image
let pressTimer; // Timer for detecting long press
const image = document.getElementById("downloadable-image");

// Function to download the image
function downloadImage() {
    const link = document.createElement('a');
    link.href = image.src; // Use the image's src as the link
    link.download = 'downloaded-image.jpg'; // Set the download file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

image.addEventListener('mousedown', function() {
    pressTimer = setTimeout(downloadImage, 2000); // 2000 ms = 2 seconds
});

image.addEventListener('mouseup', function() {
    clearTimeout(pressTimer); // Clear the timer if the mouse is released
});

image.addEventListener('mouseleave', function() {
    clearTimeout(pressTimer); // Clear the timer if the mouse leaves the image
});
