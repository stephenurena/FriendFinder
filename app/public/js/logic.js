//this is logic
$("#matchMe").on("click", function(event) {
  event.preventDefault();

  // Here we grab the form elements
  var newFriend = {
    name: $("#newName").val(),
    photo: $("#newPhoto").val(),
    scores: [
    $("#questionOne").val(),
    $("#questionTwo").val(),
    $("#questionThree").val(),
    $("#questionFour").val(),
    $("#questionFive").val(),
    $("#questionSix").val(),
    $("#questionSeven").val(),
    $("#questionEight").val(),
    $("#questionNine").val(),
    $("#questionTen").val()
    ]
  }

  console.log(newFriend);
  
  var pageURL = window.location.origin;

  $.post(pageURL + "/api/friends", newFriend,
    function(data) {
       console.log(data.name);
       console.log(data.photo);
  
    // $(#).text(data.name);
    // $(#).attr("src", data.photo);

    });
});

$.post({
    url: '/api/friends', 
    data: JSON.stringify(newFriend),
    contentType: 'application/json; charset=utf-8'
})
.then(function(response) {console.log(response)});
