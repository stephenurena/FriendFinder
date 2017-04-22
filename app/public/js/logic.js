//this is logic
$("#matchMe").on("click", function(event) {
  event.preventDefault();

  // Here we grab the form elements
  var newFriend = {
    name: $("#newName").val(),
    photo: $("#newPhoto").val(),
    scores: [
    parseInt($("#questionOne").val()),
    parseInt($("#questionTwo").val()),
    parseInt($("#questionThree").val()),
    parseInt($("#questionFour").val()),
    parseInt($("#questionFive").val()),
    parseInt($("#questionSix").val()),
    parseInt($("#questionSeven").val()),
    parseInt($("#questionEight").val()),
    parseInt($("#questionNine").val()),
    parseInt($("#questionTen").val())
    ]
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
