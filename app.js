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

// //3
// function deleteRow(){
//     var val=document.getElementById('rec0');
//     var ref=val.parentNode.parentNode;
//     ref.remove();
// }

// //4
// function onMouseOver(){
//     var val=document.getElementById('image');
//     val.src = 'images/2.png';
// }

// function onMouseOut(){
//     var val=document.getElementById('image');
//     val.src = 'images/1.png';
// }

// //5
// function dec(){
//     var val=document.getElementById('counter');
//     var val1=document.getElementById('inc');
//     val.innerHTML=parseInt(val.innerHTML)-1;
// }

// function inc(){
//     var val=document.getElementById('counter');
//     var val1=document.getElementById('dec');
//     val.innerHTML=parseInt(val.innerHTML)+1;
// }

//Chapter 49-52
// //1
// function submit(){
//     var StuName=document.getElementById ('stuName').value;
//     var FatName=document.getElementById ('fatName');
//     var Email=document.getElementById ('email');
//     var MobNo=document.getElementById ('mobNo');
//     //var sub=document.getElementById('sub');
//     var obj1=[
//         "Studnent Name: "+ StuName, "<br>" + "<br>"
//         +"Father's Name: " + FatName.value, "<br>" + "<br>"
//         + "Email Address: " + Email.value, "<br>" + "<br>"
//         + "Mobile Number: " + MobNo.value
//     ]
//     document.write(obj1);
// }

// //2
// function paragraph(){
//     var full="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque consequuntur voluptatem id assumenda quasi, nobis alias qui ipsam consequatur maiores. Cum, iste deleniti. Corporis rerum ratione eius similique nemo soluta?"
//     var short=document.getElementById('para')
//     console.log(short);
//     short.innerHTML=full;
// }

// //3
// function deleteRow(no){
//     var val=document.getElementById('del'+no);
//     var ref=val.parentNode.parentNode;
//     ref.remove();
// }

// function EditRow(no){
//     document.getElementById('edit'+no).style.display='none'
//     document.getElementById('save'+no).style.display=''
    
//     var index=document.getElementById('index'+no);
//     var name=document.getElementById('name'+no);
//     var class1=document.getElementById('class'+no);

//     var index_val=index.innerHTML
//     var name_val=name.innerHTML
//     var class_val=class1.innerHTML
        
//     index.innerHTML="<input type='text' value='"+index_val+"' id='new_index"+no+"'>"
//     name.innerHTML="<input type='text' value='"+name_val+"' id='new_name"+no+"'>"
//     class1.innerHTML="<input type='text' value='"+class_val+"' id='new_class"+no+"'>"
// }

// function SaveRow(no){
//     var new_index=document.getElementById('new_index'+no).value
//     var new_name=document.getElementById('new_name'+no).value
//     var new_class=document.getElementById('new_class'+no).value
//     //console.log(new_name) 

//     document.getElementById('index'+no).innerHTML=new_index
//     document.getElementById('name'+no).innerHTML=new_name
//     document.getElementById('class'+no).innerHTML=new_class
    
//     document.getElementById('edit'+no).style.display=''
// }

//Chapter 53-57
// //1
// function show(e){
// var modal = document.getElementById("myModal");
// var modalImg = document.getElementById("img01")
// var img=e.src

// modal.style.display = "block";
// modalImg.src = img;

// console.log(modalImg)
// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }
// }

// //2
// var fontSize=10;
// function ZoomIn(){
//     fontSize+=10;
//     document.getElementById('para').style.fontSize = fontSize + 'px'   
// }

// function ZoomOut(){
//     fontSize-=10;
//     document.getElementById('para').style.fontSize = fontSize + 'px'
// }

//Chapters 58-67
// //Part A
// //1
// var mainContent=document.getElementById('main-content');

// //2
// var mainContentChild=mainContent.childNodes;

// for (var i=0;i<=mainContentChild.length;i++){
//     var j=mainContentChild[i].innerHTML;
//     document.write(j+'<br>')
// }

// //3
// var mainContent2=document.getElementsByClassName('render')
// for (var i=0;i<=mainContent2.length;i++){
//         var j=mainContent2[i].innerHTML;
//         document.write(j+'<br>')
//     }

// //4
// var valfname=document.getElementById('first-name').value="Muhammad Danish"

// //5
// var vallname=document.getElementById('last-name').value="Muhammad Younus"
// var valemail=document.getElementById('email').value="abc@gmail.com"

// console.log(mainContent)

// //Part B
// //1
// var val=document.getElementById('form-content').nodeType
// //2
// var val2=document.getElementById('lastName').nodeType
// var val3=document.getElementById('lastName').childNodes
// //3
// var vall=document.getElementById('lastName').value="Younus"
// //4
// var val4=document.getElementById('main-content').firstChild
// var val5=document.getElementById('main-content').lastChild
// //5
// var val6=document.getElementById('lastName').nextSibling
// var val7=document.getElementById('lastName').previousSibling
// //6
// var val8=document.getElementById('email').parentNode
// var val9=document.getElementById('email').nodeType
// console.log(val9)
