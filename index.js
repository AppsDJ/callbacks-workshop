$.get("https://async-workshops-api.herokuapp.com/people", function(peopleResponse) {
  peopleResponse.forEach(function(person) {
    $.get("https://async-workshops-api.herokuapp.com/people/" + person.id, function(personResponse) {
      console.log(personResponse.favouriteMusic);
    });
  });
});


var clickEvent;
console.log(1);

$(document).click(function(event) {
  console.log(3);
  clickEvent = event;
  console.log("Mouse click event object:", clickEvent);
  console.log(4);
});
console.log(2);
