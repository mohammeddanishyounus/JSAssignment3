//Chapter 38-52
// //1
// function power(a, b) {
//     var value = a;
//     for (var i = 1; i < b; i++) {
//         value = value * a;
//     }
//     return value;
//     //return document.write(a & "power " & b & " is " & value);
// }
// document.write(power(2, 5));

// //2
// function leapYear(year) {
//     var LeapYear = year % 4;
//     if (LeapYear == 0) {
//         alert("This is Leap Year");
//     } else {
//         alert("This is not leap year");
//     }
// }
// leapYear(2017);

// //3
// function areaOfTriangle(a, b, c) {
//     var area, s;
//     s = (a + b + c) / 2;
//     area = s(s - a)(s - b)(s - c);
//     return area;
// }
// document.write(areaOfTriangle(2, 2, 2));

// //4
// function mainFunction(sub1, sub2, sub3) {
//     var totalMarks = sub1 + sub2 + sub3;
//     var total = 300;
//     var avg = average(3, totalMarks);
//     var per = percentage(totalMarks, total);
//     return ('average is ' + avg + ' percentage is ' + per)
// }

// function average(subjects, totalMarks) {
//     return totalMarks / subjects;
// }

// function percentage(marks, totalMarks) {
//     return (marks / totalMarks) * 100;
// }
// document.write(mainFunction(90, 70, 75));

// //5
// function findIndex(string,value){
// var a=string;
// var b=value;
// var output=0;
// a=a.split('');
// for (var i = 0; i<=a.length; i++){
//     if (a[i]===b){
//         output=i;
//     }
// }
// return output;
// }
// console.log(findIndex('Pakistan', 'k'));

// //6
// function delVowels(string){
// var b=string;
// if(b.length>25){
//     console.log('string exceed the value');
// }
// else {
//     var a=b.split('');
//     for (var i=0;i<a.length;i++){
//         if((a[i]=='a'|| a[i]=='e'|| a[i]=='i'||a[i]=='o'||a[i]=='u')||(a[i]=='A'|| a[i]=='E'|| a[i]=='I'||a[i]=='O'||a[i]=='U')){
//             a.splice(i,1);
//         }
//     }
//     a=a.join('');
//    return a;
// }
// }
// console.log(delVowels('Pakistan'));

//7


// //8
// //var cityDistance=prompt("Enter distance in (KM): ");
// function meter(a){
//     return a*1000.000032;
// }
// function feet(a){
//     return a*3280.84;
// }
// function inche(a){
//     return a*39370.1;
// }
// function centimeter(a){
//     return a*100000;
// }

// console.log(meter(1));
// console.log(feet(1));
// console.log(inche(1));
// console.log(centimeter(1));

// //9
// var hours=42;
// if(hours>40){
//     var res=hours-40;
//     var pay=res*12;
// }
// console.log(pay)

// //10
// var amount=1839;
// console.log(parseInt(amount/100));
// console.log(parseInt((amount%100)/50));
// console.log(parseInt(((amount%100)%50)/10));
// console.log(parseInt(((amount%100)%50)%10));


//Chapter 43-48
// //1
// function link(){
//     //var a=document.getElementById("link");
//     alert("This is alert");
// }

// //2
// function click1(){
//     var a=document.getElementById("img");
//     alert("Thank you for purchasing phone.")
// }

