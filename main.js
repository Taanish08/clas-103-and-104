Webcam.set ( {
    width : 350,
    height : 200,
image_format : 'png' ,
png_quality : 90


});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function CaptureImg() {
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="photo"src="'+data_uri+'"/>'
});
}

classifier = ml5.imageClassifier('',modelloaded);

function modelloaded() {
    console.log("Model loaded");
}