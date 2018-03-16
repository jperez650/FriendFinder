

var friends = require("../data/friends.js");

console.log(friends)
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    
    var newUser = req.body
    var smallestDiff = 100000;
    var match = {}

    for (var i = 0; i < friends.length; i++) {
      var difference = 0;
      for (var j = 0; j < friends[i].score.length; j++) {
        difference += (Math.abs(parseInt(friends[i].score[j])-parseInt(newUser.score[j])))
        if(difference< smallestDiff){
          smallestDiff = difference;
          match.name = friends[i].name;
          match.photo = friends[i].photo;
        }
      }
    }
    friends.push(newUser);
    res.json(match);
  });

  app.post("/api/clear", function() {
    friends = [];
    console.log(friends);
  });
};


