//this is logic
$("#matchMe").on("click", function(event) {
  event.preventDefault();
  //validates form to ensure no "" inputs
  if(($(".formVal").val() === "") || ($("#newPhoto").val() === "")){
    alert("Please fill in all required fields")
  } 
  else {
  

  //this is where we grab the user's input
  var newName = $("#newName").val().trim();
  var newPhoto = $("#newPhoto").val().trim();
  var newScores= [
    //stores the 10 question values from element select on the html
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
    ];

  //used $.map because it was returning an array of array of scores
  var mappedScores = $.map(newScores, function(value, key){
    return value;
  });
//assign values to keys of the newFriend object to later push
  var newFriend = {
    name: newName,
    photo: newPhoto,
    scores: mappedScores
  }

  console.log(newFriend);
  var URL = window.location.origin;
  $.post(URL + "/api/friends", newFriend,
    function(data) {

      //sets matching friend's name and photo to for the modal
      $("#matchName").text(data.name);
      $('#matchImg').attr("src", data.photo);

      //on button submit, will toggle the modal to display
      $("#resultsModal").modal('toggle');

      //resets values after click
       $("#nameInput").val("");
       $("#imageInput").val("");

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

    });
}
});
