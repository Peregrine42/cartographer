var event_1 = {
  "action": "read",
  "type": "node",
  "args": [
    {
      "x": 20,
      "y": 40,
      "label": "test_node_1"
    },
    {
      "x": 100,
      "y": 140,
      "label": "test_node_2"
    }
  ]
};

var f = require("./functions.js");
var u = require("./bacon-utils.js");
var $ = require("jquery-browserify");
var highland = require("highland");

function request_read_all() {
  return { "action": "read", "type": "node", "args": [] };
}

var partial = highland.partial

window.onload = function() {
  // TODO: stub socket
  var outgoing_socket = {
    "emit": function(channel, message) {
      console.log("sending to outgoing socket:", channel, message);
    }
  }

  var target_div = $("#" + "graph-target");

  //var click_events = highland("click", $(document));
  //var create_requests = u.first_of_pair(click_events)
    //.map(f.extract_position)
    //.map(f.new_node_details)
    //.map(f.database_create_message)

  //var read_requests = highland();
  //var for_database = highland([create_requests, read_requests]).merge();

  //for_database
    //.each(highland.partial(f.send_to_socket, outgoing_socket));

  //var server_events = new EventSource("/connect");
  var server_events = highland([event_1]);
  var read_events = server_events
    .fork()
    .where({ "action": "read", "type": "node" })

  var server_events_log = server_events
    .fork()
    .each(function(message) {
    console.log("received from server:", message);
  });

  //read_requests.write(request_read_all());

}
