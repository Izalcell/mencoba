// Display current date and time
const date = new Date();
const dateOptions = { day: '2-digit', month: 'short', year: 'numeric' };
const currentDate = document.getElementById('currentDate');
const currentTime = document.getElementById('currentTime');
currentDate.textContent = date.toLocaleDateString('en-GB', dateOptions);
const hours = String(date.getHours()).padStart(2, '0');
const minutes = String(date.getMinutes()).padStart(2, '0');
currentTime.textContent = `${hours}:${minutes} WIB`; // Menambahkan WIB di akhir

// Function to generate random 16-digit reference number
function generatenoreff() {
    let noreff = 'No Ref. ';
    for (let i = 0; i < 16; i++) {
        noreff += Math.floor(Math.random() * 10);
    }
    return noreff;
}

// Function to generate random 3-digit account number
function generatenorek() {
    let norek = 'xxx xxx ';
    for (let i = 0; i < 3; i++) {
        norek += Math.floor(Math.random() * 10);
    }
    return norek;
}

let firstSet = generatenorek(); // 3 digit random
let lastNumber = Math.floor(Math.random() * 10); // 1 digit random

// Function to display text and image
function displayText() {
    const userInput0 = document.getElementById("textInput0").value;
    const userInput1 = document.getElementById("textInput1").value;
    const userInput2 = document.getElementById("textInput2").value;
    const userInput3 = document.getElementById("textInput3").value;
    const userInput4 = document.getElementById("textInput4").value;

    // Display user inputs on the image
    document.getElementById("text-overlay-0").textContent = userInput0;
    document.getElementById("text-overlay-1").textContent = userInput1;
    document.getElementById("text-overlay-2").textContent = userInput2;
    document.getElementById("text-overlay-3").textContent = userInput3;
    document.getElementById("text-overlay-4").textContent = userInput4;
    document.getElementById('noreff').textContent = generatenoreff();
    document.getElementById("norek").textContent = `${firstSet} ${lastNumber}`;

    // Show image container and hide input container
    document.getElementById("image-container").style.display = "flex";
    document.getElementById("input-container").style.display = "none";

    // Add download feature on hold (for mobile)
    const imageContainer = document.getElementById("image-container");
    imageContainer.addEventListener('touchstart', downloadImage);
}

// Function to download the image when user holds
function downloadImage() {
    const canvas = document.createElement('canvas');
    const image = document.querySelector('.background-image');
    const imageContainer = document.getElementById('image-container');

    // Set canvas size to match image
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    const ctx = canvas.getContext('2d');

    // Draw the image on the canvas
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    // Draw the text overlays on the canvas
    const overlays = document.querySelectorAll('.text-overlay');
    overlays.forEach(overlay => {
        const style = window.getComputedStyle(overlay);
        const fontSize = parseFloat(style.fontSize);
        const color = style.color;
        const fontFamily = style.fontFamily;
        const left = parseFloat(style.left);
        const top = parseFloat(style.top);
        const text = overlay.textContent;

        ctx.font = `${fontSize}px ${fontFamily}`;
        ctx.fillStyle = color;
        ctx.fillText(text, left / 100 * canvas.width, top / 100 * canvas.height);
    });

    // Convert the canvas to a data URL and trigger download
    const imageURL = canvas.toDataURL('image/png');
    const downloadLink = document.createElement('a');
    downloadLink.href = imageURL;
    downloadLink.download = 'image-with-text.png';
    downloadLink.click();
}
