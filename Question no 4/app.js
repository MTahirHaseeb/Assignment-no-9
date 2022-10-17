// Question no 4
// Write a ts program to display the reading status (i.e. display book name, author name and reading status) of the following books.
// var library=[
//     {
//     author:"Bill Gates",
//     tiltle:'The road Ahead ',
//     readingStatus:true
// },
// {
//     author:'Steve Jobs',
//     title:'Walter Isaacson',
//     readingStatus:true
// },
// {
//     author:'Suzanne Collins',
//     title:''Mockingjay: The Final Book of The Hunger Games',
//     readingStatus:false
// }];
var library = [
    {
        author: 'Bill Gates',
        tiltle: 'The road Ahead ',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
];
for (var i = 0; i <= library.length; i++) {
    var student = library[i];
    console.log(student);
}
// library.forEach(librarys)=>{
//     console.log(librarys.name)
// }
