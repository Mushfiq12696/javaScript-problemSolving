var string = "amikichulikhbona";

function reverseString(speech) {
    var newSpeech = "";
    for (var i = 0; i < speech.length; i++) {
        var char = speech[i];
        newSpeech = char + newSpeech;
    }
    return newSpeech;
}

var reverseSpeech = reverseString(string);
console.log(reverseSpeech);