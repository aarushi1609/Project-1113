function preload()
{}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.center();
    video = createCapture(VIDEO)
    video.hide();
}

function draw()
{
    image(video, 70, 50, 500, 400);

    fill("lightblue");
    stroke("lightblue");
    rect(70, 50, 500, 20);

    fill("lightblue");
    stroke("lightblue");
    rect(70, 50, 20, 400);

    fill("lightblue");
    stroke("lightblue");
    rect(570, 50, 20, 400);

    fill("lightblue");
    stroke("lightblue");
    rect(70, 450, 520, 20);
}

function take_snapshot()
{
    save("myPhotoFrame");
}


