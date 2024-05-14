function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true })
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/o9k4Yi7p8/model.json', modelReady)
}
function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results)
        random_number_r = Math.floor(Math.random() * 255) + 1
        random_number_g = Math.floor(Math.random() * 255) + 1
        random_number_b = Math.floor(Math.random() * 255) + 1

        document.getElementById("result_label").innerHTML = 'Posso ouvir:' + results[0].label;
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";

        document.getElementById("result_confidence").innerHTML = 'Precisão:' + (results[0].confidence * 100).toFixed(2) + "%"
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";

        img = document.getElementById('alien1')
        img = document.getElementById('alien2')
        img = document.getElementById('alien3')
        img = document.getElementById('alien4')

        if (results[0].label == "palmas") {
            img.src = 'aliens-01.gif';
            img.src = 'aliens-02.png';
            img.src = 'aliens-03.png';
            img.src = 'aliens-04.png';
        }
        else if (results[0].label == "estalos") {
            img.src = 'aliens-01.png';
            img.src = 'aliens-02.gif';
            img.src = 'aliens-03.png';
            img.src = 'aliens-04.png';
        }
        else if (results[0].label == "muuuu") {
            img.src = 'aliens-01.png';
            img.src = 'aliens-02.png';
            img.src = 'aliens-03.gif';
            img.src = 'aliens-04.png';
        }
        else {
            img.src = 'aliens-01.png';
            img.src = 'aliens-02.png';
            img.src = 'aliens-03.png';
            img.src = 'aliens-04.gif';
        }
    }
}
