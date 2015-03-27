function send_to_socket(outgoing_socket, message) {
  outgoing_socket.emit("message", message);
}

function database_create_message(create_details) {
  var message = {
    "action": "create",
    "type"  : "node",
    "args"  : create_details
  }
  return message;
}

function extract_position(click_event) {
  return {
    "x": click_event.clientX,
    "y": click_event.clientY
  };
}

function new_node_details(position) {
  return {
    "x": position.x,
    "y": position.y,
    "label": "untitled"
  }
}

module.exports.send_to_socket = send_to_socket;
module.exports.database_create_message = database_create_message;
module.exports.extract_position = extract_position;
module.exports.new_node_details = new_node_details;
