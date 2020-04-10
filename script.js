let imgs = [];

function preload() {
    //i should be less than the number of total images
    for (let i = 0; i < 47; i++) {
        imgs[i] = loadImage("assets/shutterstock_" + i + ".jpg");
    }
}

function setup() {
    createCanvas(displayWidth, displayHeight);
}

function draw() {

    //map the mousex and y values to fit the number of images in the array
    let ax = round(map(mouseX, 0, width, 0, 47));
    let ay = round(map(mouseY, 0, height, 0, 47));
    console.log('ax is ' +
        ax);
    console.log('ay is ' +
        ay);

    //set the variable to the image in the array corresponding to mouse position
    let mountains = imgs[ax];
    let bricks = imgs[ay];

    //blend two images together, and display them
    mountains.blend(bricks, 0, 0, displayWidth, displayHeight, 0, 0, displayWidth, displayHeight, BURN);
    image(bricks, 0, 0);
    image(mountains, 0, 0);
}

//when the mouse is clicked, save a screenshot
function mouseClicked() {
    saveCanvas();
}