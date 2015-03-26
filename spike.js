function send_create_node(outgoing_socket, create_details) {
  // create_details = { "x": 4, "y": 2, "label": "blah" }
  var message = {
    "action": "create",
    "type"  : "node",
    "args"  : create_details
  }
  outgoing_socket.emit("message", message);
}

//gui_node_create.onValue(send_create_node, outgoing_socket);
//gui_node_delete.onValue(send_delete_node, outgoing_socket);
//gui_node_update.onValue(send_update_node, outgoing_socket);

//send_read_all();

module.exports.send_create_node = send_create_node;
