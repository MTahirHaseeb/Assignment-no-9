//  Question no 5
//  Write a ts program to get the volume of a Cylinder with four decimal places using object classes.
//  Volumes of a cylinder : V=pi r 2 h
// where r is the radius and h is the height of the cylinder.
var cylinder = {
    radius: 10,
    height: 10
};
var pi = 3.14;
var volume = pi * cylinder.radius * cylinder.height * cylinder.height;
console.log(volume);
