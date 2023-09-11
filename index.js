                /* variable and data types  */

// var firstName= 'mani';
// console.log(firstName);

// var lastName='boy';
// var age=25;

// var fullAge=true;
// console.log(fullAge);

// var job;
// console.log(job);
// console.log(age);

// job='teacher';
// console.log(job);


                /**    variable motation and type coorection  ***/

// var firstName='mani';
// var age=18;

// console.log(firstName + ' ' + age );

// var job, isMarried;
// job='teacher';
// isMarried='false';

// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// age='eighteen';
// job='driver';

// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// var lastName=prompt('what is his last name?');
// console.log(firstName + '' + lastName);

                    // * Basic operators   *//

// var yearJohn=2023;

// console.log(yearJohn-22);

// var year, yearJohn, yeahmark;
// now=2018;
// ageJohn=28;
// ageMark=33;

// yearJohn=now-ageJohn;
// yeahmark=now-ageMark;

// console.log(yeahmark);

// console.log(now + 2);
// console.log(now*2);
// console.log(now/10);

// *   logical operators        *//
// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);

                    // typeof operator

// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'mark is older than john');




// * multiple operators  *//

// var now=2018;
// var yearJohn=1989;
// var fullAge=18;

// var isFullAge=now - yearJohn >= fullAge;
// console.log(isFullAge);

// var ageJohn=now-yearJohn;
// var ageMark=35;
// var average=(ageJohn + ageMark)/2;
// console.log(average);

                // multiple assignments
// var x, y;
// x=y=(3+5) * 4-6;              // 3+5 =8 * 8*4=32 - 6 = 26
// console.log(x,y);

// //   more operators    //   +,- , * , /,<=,>=,<,>,++ ,-- 
// x *=2;
// console.log(x);
// x +=10;
// console.log(x);
// x++;            //  ++   =  +1
// console.log(x);

// challenge

// var massMark=78;  
// var heightMark=1.69;  

// var massJohn=92;
// var heightJohn=1.95;

// var BMIMark=massMark/(heightMark*heightMark);
// var BMIJohn=massJohn/(heightJohn+heightJohn);

// var markHigherBMI=BMIMark>BMIJohn;
// console.log('is mark\'s BMI higher than John\'s? '+ markHigherBMI);

//   if else    //  
 

var firstName='mani';
var civilStatus ='married';
// console.log(civilStatus);

// if (civilStatus==='married') {
//     console.log(firstName + ' is married');  // false
// }else{
//     console.log(firstName+ ' will marry soon');
// }

civilStatus = 'married' ? console.log(firstName + 'is married') : console.log(firstName + 'will mary soon');


// var isMarried=true;

// if (isMarried) {
//     console.log(firstName + ' is married');
// }else{
//     console.log(firstName+ ' will marry soon');
// }

//  boolean logic  //

// var firstName='mani';
// var age= 22;

// if (age<13) {
//     console.log(firstName + ' is a boy');
// } else if (age>=13 && age<20){
//     console.log(firstName + ' is a teen age');
// }else{
//     console.log(firstName + ' is a man');
// }

//  ternary operators & switch statmnt    //

// var firstName='mani';
// var age=15;

// age >= 18? console.log(firstName +' drinks beer.'): console.log(firstName + ' drinks juice.');

// var drink =age >= 18? 'beer' : 'juice';
// console.log(drink);

// if (age>=18) {
//     var drink='beer';
// } else {
//     var drink='juice';
// }

//  *  swiitch sttement     * //
// var job='';
// switch (job) {
//     case 'teacher':
//         console.log(firstName + ' teaches kids how to code');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives an uber in AP');
//         break;
//     case 'designer':
//         console.log(firstName + ' designers beautiful websites');
//         break;
//     default:
//         console.log(firstName + ' does something else');
// }

/* truthy and falsy values  */

// var height;
// height=24;

// if (height || height == 0) {
//     console.log('variable is defined');
// } else {
//     console.log('variable has not been defined');
// }

    //  * equality operators    *//

// if (height == 24) {
//     console.log('the == operator does not type coorection');
// }else{
//     console.log('the operator coorection');
// }

//  * functions   *//

// var ageJohn=calculateAge(2001);
// var ageSai=calculateAge(2005);
// var ageRavi=calculateAge(2009);

// function calculateAge(birthYear) {
//     return 2023 - birthYear;
// }

// console.log(ageJohn,ageRavi);

// function yearsUntilRetirement(year,firstName) {
//     var age=calculateAge(year);
//     var retirment=65-age;
//     console.log(firstName + ' retires in ' + retirment +' years');
// }

// yearsUntilRetirement(2001, 'mani');
// yearsUntilRetirement(2005, 'sai');
// yearsUntilRetirement(1985, 'ravi');


// var whatDoYouDo=function(job,firstName){
//     switch(job){
//         case 'teacher':
//             return firstName + ' teaches kids how to code';
//         case 'driver':
//             return firstName + ' drives a cab in AP';
//         case 'designer':
//             return firstName + ' design beautiful websites';
//         default:
//             return firstName + ' does something else'
//     }
// }

// console.log(whatDoYouDo('teacher', 'john'));
// console.log(whatDoYouDo('designer', 'jane'));
// console.log(whatDoYouDo('retired', 'mark'));

//   * ARRAYS *//

// var names=['mani', 'sai', 'ravi'];
// var years=new Array(2001,2005,1998);

// console.log(names[1]);
// console.log(names.length);

// names[1]='boy';
// names[5]='fruits';
// console.log(names);
// console.log(names.length);

// var boys=['mani', 'sai', 2001, 'designer', false];

// boys.push('black');
// boys.unshift('mr.');
// console.log(boys);

// boys.pop();
// boys.pop();
// boys.shift();
// console.log(boys);

// console.log(boys.indexOf(22));

// var isDesigner = boys.indexOf('designer') === -1 ?
//  'mani is not designer' : 'mani is a designer';
//  console.log(isDesigner);

// * objects and properties

// var boys ={
//     firstName:'mani',
//     lastName:'kanta',
//     birthYear:2001,
//     family:['sai', 'ravi', 'boss'],
//     job:'none',
//     isMarried:false
// };
// console.log(boys.job);
// console.log(boys['firstName']);
// var x='birthYear';
// console.log(boys[x]);

// boys.job='designer';
// boys['isMarried']=true;
// console.log(boys);

//  * objects and methods  *//

// var boy={
//     firstName:'mani',
//     lastName:'kanta',
//     birthYear:2001,
//     family:['sai', 'ravi', 'roy'],
//     job:'none',
//     isMarried:false,
//     calcAge:function (){
//         this.age= 2023-this.birthYear;
//     }
// };

// boy.calcAge();
// console.log(boy);


//           * LOOPS    *//

// for (var i=1; i<= 50; i += 2){
//     console.log(i);
// }

// var boy=['mani', 'sai', 2001, 'designer', false];

// for (var i=0; i<boy.length; i++){
//     console.log(boy[i]);
// }


// var i=0;
// while (i<boy.length) {
//     console.log(boy[i]);
//     i++;
// }

//      *continue and break points  *//

// var boy=['mani', 'sai', 2001, 'designer', false, 'blue'];
// for (var i=0; i<boy.length; i++){
//     if (typeof boy[i] !== 'string') continue;
//     console.log(boy[i]);
// }

// var boy=['mani', 'sai', 2001, 'designer', false];
// for (var i=0; i<boy.length; i++){
//     if (typeof boy[i] !== 'string') break;
//     console.log(boy[i]);
// }

// // *   LOOPING  Backwards  *  //

// for(var i=boy.length-1; i>=0; i--){
//     console.log(boy[i]);
// }


// for (var i=1; i<=500; i++){
//     console.log(i);
// }


// *     FUNCTIONS  SEC:2        *//

// calculateAge(1965);

// function calculateAge(year){
//     console.log(2016-year);
// }



// retirment(1991);
// var retirment =function(year){
//     console.log(65-(2016-year));
// }


//        * VARIABLES    *//

// console.log(age);
// var age=23;

// function foo(){
//     var age=65;
//     console.log(age);
// }
// foo();
// console.log(age);


  ///            \ \ \ \

// var a='hello';
// first();

// function first(){
//     var b='hi';
//     second();

//     function second(){
//         var c='hey!';
//         third()
//     }
// }

// function third(){
//     var d='john';
//     // console.log(c);
//     console.log(a + ' ' +d);
// }


// calculateAge(1985);

// function calculateAge(year){
//     console.log(2016-year);
//     console.log(this);
// }


// var john={
//     name:'mani',
//     yearOfBirth:2001,
//     calculateAge:function(){
//         console.log(this);
//         console.log(2023-this.yearOfBirth);
//     }
// }

// john.calculateAge();




//    * PIG GAME    *  //


var scores, roundScore, activePlayer;

 scores=[0,0];
 roundScore=0;
 activePlayer=0;

// document.querySelector('#score-0').textContent;
//  console.log(x);

document.querySelector('.dice').style.display='none';

document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';

document.querySelector('.btn-roll').addEventListener('click', function(){

// var dice=Math.floor(Math.random() *6) + 1;

    // 1.RANDOM NUMBERS
    var dice=Math.floor(Math.random() * 6) +1;

    // 2. Display the result
    var diceDom=document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src ='dice-' + dice + '.png';

    // 3. update the round score if the rolled number was not a 1

    if (dice !==1 ){
        // ADD SCORE
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else{
        // NEXT PLAYER
        nextPlayer();
    }

});

document.querySelector('.btn-hold').addEventListener('click', function(){
    // ADD CURRENT SCORE TO GLOBAL SCORE 
    scores[activePlayer] += roundScore;

    // UPDATE THE UI
    document.querySelector('#score-' + activePlayer).textContent=scores[activePlayer];

    // CHEcK if PLAYER WON THE GAME

    if (scores[activePlayer] >= 20 ){
        document.querySelector('#name-' + activePlayer).textContent='winner!';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    }else{
        // NEXT PLAYER
        nextPlayer();
    }

});
   

function nextPlayer(){
    // NEXT PLAYER
    activePlayer === 0 ? activePlayer = 1 : activePlayer =0 ;
    roundScore=0;

    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.dice').style.display='none';
}

        // * FUNCTION CONSTRUCTOR   *//

// var john={
//     name:'mani',
//     yearOfBirth:2001,
//     job:'none'
// };

// var Person=function(name,yearOfBirth,job) {
//     this.name=name;
//     this.yearOfBirth=yearOfBirth;
//     this.job=job;
//     this.calculateAge=function(){
//         console.log(2023-this.yearOfBirth);
//     }
// }

// Person.prototype.calculateAge=function(){
//     console.log(2023-this.yearOfBirth);
// };

// Person.prototype.lastName='smith';

// var john=new Person('mani', 2001, 'none');
// var jane=new Person('sai', 2005, 'electr')

// jane.calculateAge();
// john.calculateAge();

// console.log(john.lastName);
// console.log(jane.lastName);


// var name = 'mani'
// {
//     var name = 'sai'

//     var fun = function(){
//         var name = 'kumsr'
//         console.log(this.fun);
//     }
//     fun()
// }


// var john={
//     name:'mani',
//     yearOfBirth:2001,
//     job:'none'
// };

// var Person=function(name,yearOfBirth,job){
//     this.name=name;
//     this.yearOfBirth=yearOfBirth;
//     this.job=job;
//     this.calculateAge=function(){
//         console.log(`my name is ${this.name} my age: ${2023 - this.yearOfBirth}`);
//     }
// }




// var mark = new Person('john', 2001, 'none');
// var john = new Person('mark', 2006, 'js');

// mark.calculateAge();
// john.calculateAge();
// console.log(mark.name);

               /*

var name='radar';


let v = name.split('').reverse().join('')
console.log(v);

v === name ? console.log('true') : console.log('false');

                */

        //  OBJECT.CREATE   

// var personProto = {
//     calculateAge: function(){
//         console.log(2023-this.yearOfBirth);
//     }
// };

// var mani=Object.create(personProto);
// mani.name = 'mani';
// mani.yearOfBirth = 2001;
// mani.job = 'none';

// var sai=Object.create(personProto,{
//     name:{value:'sai'},
//     yearOfBirth:{value:2005},
//     job:{value:'designer'}
// });

            //  PRIMITIVES VS OBJECTS
    
            // PRIMITIVES
// var a=23;
// var b=a;
// a=46;
// console.log(a);
// console.log(b);

//         // OBJECTS
// var obj1={
//     name:'mani',
//     age:22
// };
// var obj2=obj1;
// obj1.age=30;
// console.log(obj1.age);
// console.log(obj2.age);

//         // FUNCTIONS

// var age=18;
// var obj={
//     name:'kdnkc',
//     city:'pend'
// };

// function change(a, b){
//     a=22;
//     b.city='vizag';
// }

// change(age,obj);

// console.log(age);
// console.log(obj.city);


            //  functions as argument

// var years=[1982, 1965, 1937, 2005, 2001];

// function arrayCalc(arr, fn) {
//     var arrRes =[];
//     for (var i=0; i<arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }
// function calculateAge(el) {
//     return 2023 - el;
// }

// function isFullAge(el){
//     return el >= 18;
// }

// function maxHeartRate(el) {
//     if (el>=18 && el <=81){
//         return Math.round(206.9- (0.67 * el));
//     }else{
//         return -1;
//     }
// }

// var age=arrayCalc(years,calculateAge);
// var fullAge=arrayCalc(age,isFullAge);
// var rates=arrayCalc(age,maxHeartRate);

// console.log(age);
// console.log(rates);


        // FUNCTION RETURNING

// function interviewQuestion(job){
//     if(job === 'designer') {
//         return function(name){
//             console.log(name + ',can you explain what ux design is?');
//         }
//     }else if (job === 'teacher') {
//         return function(name){
//             console.log('what subject do you teach' + name + '?');
//         }
//     } else {
//         return function(name){
//             console.log('hello ' + name + ', what do you do?');
//         }
//     }
// }

// // var teacherQuestion=interviewQuestion('designer');
// interviewQuestion('designer')('sai');

// teacherQuestion('mani')

            // /     IIFE

// console.log(Math.floor(Math.random()*10));


// (function(){
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// })();



// (function(goodLuck){
//     var score = Math.random() * 10;
//     console.log(score >= 5-goodLuck);
// })(5);


            //  BIND, CALL AND APPLY
            
var mani={
    name:'mani',
    age:22,
    job:'none',
    presentation: function(style, timeOfDay){
        if (style === 'formal') {
            console.log('Good '+ timeOfDay + ' Ladies and gentleman! I\'m ' +
            this.name + ' I\'m a ' + this.job + ' and I\'m a ' + this.age + ' years old.');
        }else if (style === 'friendly') {
            console.log('Hey! what\'s up? I\'m'+
            this.name + 'I\'m a' + this.job + 'and I\'m a' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
    };
    var sai = {
        name:'sai',
        age:18,
        job:'designer'        
    };

mani.presentation('formal', 'morning');
mani.presentation.call(sai, 'friendly', 'afternoon');



var maniFriendly=
 mani.presentation.bind(mani,'friendly');

 maniFriendly('morning');
 maniFriendly('night');

 var saiFormal=mani.presentation.bind(sai,'formal');
 saiFormal('afternoon');


 var years=[1982, 1965, 1937, 2005, 2001];

 function arrayCalc(arr, fn) {
     var arrRes =[];
     for (var i=0; i<arr.length; i++) {
         arrRes.push(fn(arr[i]));
     }
     return arrRes;
 }
 function calculateAge(el) {
     return 2023 - el;
 }
 
 function isFullAge(limit,el){
     return el >= limit;
 }

 var ages = arrayCalc(years,calculateAge);
 var fullJapan=arrayCalc(ages,isFullAge.bind(this, 20));
 console.log(ages);
 console.log(fullJapan);



















