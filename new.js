var Mathematics = 75.25;
var Biology = 65;
var Chemistry = 80;
var Physics = 35.45;
var Bangla = 99.50;
var totalMarks = Mathematics + Biology + Chemistry + Physics + Bangla;
totalMarks /= 5;
totalMarks = totalMarks.toFixed(2);
totalMarks = parseFloat(totalMarks)
console.log(totalMarks);