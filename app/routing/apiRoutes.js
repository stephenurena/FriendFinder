// ===============================================================================
// LOAD NPM packages
// ===============================================================================
var bodyParser = require("body-parser");
var friendsData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
// ---------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    var minIndex;
    var minSum = 50;
    var sum = 0;
    var myScores = req.body.scores;

    for (var i = 0; i<friendsData.length; i++) {
      sum = 0;
      theirScores = friendsData[i].scores;
      for (var j = 0; j<theirScores.length; j++) {
        sum += Math.abs(myScores[j] - theirScores[j]);
      }
      if (sum < minSum) {
        minSum = sum;
        minIndex = i;
      }
    }
    bestMatch = friendsData[minIndex];
    console.log("Best Match: " + bestMatch.name);

      friendsData.push(req.body);

      res.send(bestMatch)
  });

/*Was going to use clear, but didn't find it useful as we are trying to find matching amigos*/
  // app.post("/api/clear", function() {
  //   // Empty out the arrays of data
  //   friendsData = [];
  //   console.log(friendsData);
  // });
};
