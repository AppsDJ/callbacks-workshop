$.get("https://async-workshops-api.herokuapp.com/people", function(peopleResponse) {
  peopleResponse.forEach(function(person) {
    $.get("https://async-workshops-api.herokuapp.com/people/" + person.id, function(personResponse) {
      console.log(personResponse.favouriteMusic);
    });
  });
});

// QUESTION 1
// var clickEvent;
// console.log(1);
//
// $(document).click(function(event) {
//   console.log(3);
//   clickEvent = event;
//   console.log("Mouse click event object:", clickEvent);
//   console.log(4);
// });
// console.log(2);
// QUESTION 1 END


// // QUESTION 2
// $.get("https://async-workshops-api.herokuapp.com/people", function(peopleResponse) {
//   console.log(1);
//   console.log(peopleResponse);
//   console.log(2);
// });



// QUESTION 3
var people;
console.log(1);
$.get("https://async-workshops-api.herokuapp.com/people", function(peopleResponse) {
  console.log(3);
  people = peopleResponse;
  console.log(4);

});

setTimeout(
  function()
  {
    //do something special

    console.log(people);
    console.log("done");
    console.log(2);
  }, 5000);


// QUESTION 3 END
