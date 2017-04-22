//this is logic
$("#matchMe").on("click", function(event) {
  event.preventDefault();

  // Here we grab the form elements
  var newFriend = {
    name: $("#newName").val(),
    photo: $("#newPhoto").val(),
    scores: parseInt([
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
    ])
  }

  console.log(newFriend);

  $.post("/api/friends", newFriend,
    function(data) {
       console.log(data.name);
       console.log(data.photo);
  
    // $(#).text(data.name);
    // $(#).attr("src", data.photo);

    });
});
