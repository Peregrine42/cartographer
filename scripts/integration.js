var f     = require("./spike.js");
var u     = require("./bacon-utils.js");
var $     = require("jquery-browserify");
var Bacon = require("./Bacon.js");

window.onload = function() {
  // TODO: stub socket
  var outgoing_socket = {
    "emit": function(channel, message) {
      console.log("sending to outgoing socket:", channel, message);
    }
  }

  var click_events = Bacon.fromEventTarget($(document), "click");
  var create_events = u.first_of_pair(click_events)
    .map(f.extract_position)
    .map(f.new_node_details)
    .map(f.database_create_message)

  create_events
    .onValue(f.send_to_socket, outgoing_socket);
}

