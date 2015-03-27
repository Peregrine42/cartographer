function last(array) {
  return array[array.length - 1];
}

function first(array) {
  return array[0];
}

function time_filter(stream, time_window, amount) {
  return stream
    .map(function(x) {
      return { "message": x, "time_stamp": new Date().getTime() }
    })
    .batch(amount)
    .filter(function(x) {
      return (last(x).time_stamp - first(x).time_stamp) < time_window
    })
    .map(function(array) { return first(array) })
    .map(function(x) { return x.message })
}

function first_of_pair(clicked) {
  var time_window = 400;
  var click_amount = 2;
  var double_clicks = time_filter(clicked, time_window, click_amount)

  return double_clicks;
}

module.exports.first_of_pair = first_of_pair;
