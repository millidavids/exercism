Bob = ->

Bob::hey = (input) ->
  response = "Whatever."
  if not input.match(/[a-zäöü]/) and input.match(/[A-ZÄÖÜß]/)
    response = "Whoa, chill out!"
  else if input.charAt(input.length - 1) is "?"
    response = "Sure."
  else response = "Fine. Be that way!"  unless input.match(/[a-z1-9]/i)
  response

module.exports = Bob
