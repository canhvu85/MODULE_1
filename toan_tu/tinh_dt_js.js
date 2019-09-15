let inputWidth;
let inputHeight;

inputWidth = prompt("Enter the width");
inputHeight = prompt("Enter the height");

let width = parseInt(inputWidth);
let height = parseInt(inputHeight);

let area = width * height;

document.write("Enter Width:");
document.write('<br/>');
document.write(width);

document.write('<br/>');
document.write("Enter Height:");

document.write('<br/>');
document.write(height);

document.write('<br/>');
document.write(" The Area is: " + area);