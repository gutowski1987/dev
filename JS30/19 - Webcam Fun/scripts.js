const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
    navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then(localMediaStream => {
            video.src = window.URL.createObjectURL(localMediaStream);
            video.play();
        })
        .catch(err => {
            console.error('Allow the camera!', err);
        });
}

function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
        // take pixels out
        let pixels = ctx.getImageData(0, 0, width, height);
        // mess with pixels
        pixels = redEffect(pixels);
        ctx.globalAlfa = 0.6;
        // put pixels back
        ctx.putImageData(pixels, 0, 0);
    }, 16);
}

function takePhoto() {
    // played sound
    snap.currentTime = 0;
    snap.play();

    // take the data out of the canvas
    const data = canvas.toDataURL('image/jgeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'handsome');
    link.innerHTML = `<img src="${data}" alt="Handsome" />`;
    strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i] = pixels.data[i] + 100; // r
        pixels.data[i + 1] = pixels.data[i] - 50; // g
        pixels.data[i + 2] = pixels.data[i] * 0.5; // b
    }
    return pixels;
}

function rgbplit(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i - 150] = pixels.data[i + 0]; // r
        pixels.data[i + 500] = pixels.data[i + 1]; // g
        pixels.data[i - 550] = pixels.data[i + 2]; // b
    }
    return pixels;
}

getVideo();

video.addEventListener('canplay', paintToCanvas);
