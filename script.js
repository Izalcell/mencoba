document.getElementById('generate-btn').addEventListener('click', function () {
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const input3 = document.getElementById('input3').value;

    const canvas = document.getElementById('output-canvas');
    const ctx = canvas.getContext('2d');
    const image = new Image();
    
    // Set the path to your image
    image.src = 'image1.jpg'; 

    image.onload = function () {
        canvas.width = image.width;
        canvas.height = image.height;

        // Draw the image onto the canvas
        ctx.drawImage(image, 0, 0, image.width, image.height);

        // Set text styles
        ctx.font = '30px Arial';
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';

        // Draw the input text on the image
        ctx.fillText(input1, canvas.width / 2, canvas.height / 4);
        ctx.fillText(input2, canvas.width / 2, canvas.height / 2);
        ctx.fillText(input3, canvas.width / 2, (canvas.height / 4) * 3);

        // Hide the input section and show the output section
        document.getElementById('input-section').style.display = 'none';
        document.getElementById('output-section').style.display = 'block';

        // Prepare the download button
        const downloadLink = document.getElementById('download-btn');
        downloadLink.href = canvas.toDataURL('image/png');
    };
});
