var Bob = function() {};

Bob.prototype.hey = function(input) {
  var response = "Whatever.";
  if(!input.match(/[a-zäöü]/) && input.match(/[A-ZÄÖÜß]/)){
    response = "Whoa, chill out!";
  }else if(input.charAt(input.length - 1) === "?"){
    response = "Sure.";
  } else if(!input.match(/[a-z1-9]/i)) {
    response = "Fine. Be that way!";
  }
  return response;
};

module.exports = Bob;
