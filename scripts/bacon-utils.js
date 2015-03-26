function first_of_pair(clicked) {
  var double_clicks = clicked
    .bufferWithTimeOrCount(200, 2)
    .filter(function(x) { return x.length == 2 })
    .map(function(array) { return array[0]})

  return double_clicks;
}

module.exports.first_of_pair = first_of_pair;
