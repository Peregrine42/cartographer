f = require("../scripts/functions.js");

describe("send_create_node", function() {
  it("sends the given node details to the given socket", function() {
    fake_socket = jasmine.createSpyObj("fake_socket", ["emit"]);
    message = "foo";
    f.send_to_socket(fake_socket, message);
    expect(fake_socket.emit).toHaveBeenCalledWith("message", message);
  });
});

describe("database_create_message", function() {
  it("makes a database update message from a create event", function() {
    details = "foo";
    result = f.database_create_message(details);
    expected = {
      "action": "create",
      "type": "node",
      "args": details
    }
    expect(result).toEqual(expected);
  });
});

describe("extract_position", function() {
  it("gets the position coordinates from a jquery click event", function() {
    event = { "clientX": 5, "clientY": 10 };
    result = f.extract_position(event);
    expected = {
      "x": 5,
      "y": 10
    }
    expect(result).toEqual(expected);
  });
});

describe("new_node_details", function() {
  it("gets the position coordinates from a jquery click event", function() {
    position = { "x": 5, "y": 10 };
    result = f.new_node_details(position);
    expected = {
      "x": 5,
      "y": 10,
      "label": "untitled"
    }
    expect(result).toEqual(expected);
  });
});
