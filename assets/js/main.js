/****************************************************************************
 * OBJECTS
 * 
 * - Create an object that describes a student
 * - the student will have the following properties: name, surname and age.
 * - Print through the 'for' 'in' all properties (keys and values).
 * 
 ****************************************************************************/

$(document).ready(function() {
    
    // reference

    var student = {
        name: 'John',
        surname: 'Smith',
        age: 30
    }
    
    // print keys and values in console

    for ( var key in student ) {
        
        console.log( key + ': ' + student[key]);
    }
    




}); // end document ready