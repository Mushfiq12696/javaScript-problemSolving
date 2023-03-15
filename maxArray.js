var marks = [45, 66, 78, 99, 34];
var newMax = marks[0];
for (var i = 0; i < marks.length; i++) {
    var element = marks[i];
    if (element > newMax) {
        newMax = element;
    }
}
console.log(newMax);