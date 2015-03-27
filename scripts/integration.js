var f        = require("./functions.js");
var u        = require("./bacon-utils.js");
var $        = require("jquery-browserify");
var Bacon    = require("./Bacon.js");
var highland = require("../node_modules/highland/lib/index.js");

function request_read_all() {
  return { "action": "read", "type": "node", "args": [] };
}

window.onload = function() {
  // TODO: stub socket
  var outgoing_socket = {
    "emit": function(channel, message) {
      console.log("sending to outgoing socket:", channel, message);
    }
  }

  var click_events = highland("click", $(document));
  var create_events = u.first_of_pair(click_events)
    .map(f.extract_position)
    .map(f.new_node_details)
    .map(f.database_create_message)

  var for_database = highland([create_events, highland([request_read_all()])]).merge();

  for_database
    .each(highland.partial(f.send_to_socket, outgoing_socket));
}

