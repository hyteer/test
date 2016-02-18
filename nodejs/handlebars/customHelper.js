
var Handlebars=require('handlebars');

var contextObj = {score:85, userName:"Mike"};

Handlebars.registerHelper ("theNameOfTheHelper", function (theScore) {
    console.log("Grade: " + theScore );
    var userGrade = "C";

   if (theScore >= 90) {
       return "A" ;
   }
   else if (theScore >= 80 && theScore < 90) {
       return "B" ;
   }
   else if (theScore >= 70 && theScore < 80) {
       return "C" ;
   }
   else {
       return "D" ;
   }
   
});

