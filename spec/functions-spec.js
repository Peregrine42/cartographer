var f = require("../scripts/functions.js");

describe("send_create_node", function() {
  it("sends the given node details to the given socket", function() {
    var fake_socket = jasmine.createSpyObj("fake_socket", ["emit"]);
    var message = "foo";
    f.send_to_socket(fake_socket, message);
    expect(fake_socket.emit).toHaveBeenCalledWith("message", message);
  });
});

describe("database_create_message", function() {
  it("makes a database update message from a create event", function() {
    var details = "foo";
    var result = f.database_create_message(details);
    var expected = {
      "action": "create",
      "type": "node",
      "args": details
    }
    expect(result).toEqual(expected);
  });
});

describe("extract_position", function() {
  it("gets the position coordinates from a jquery click event", function() {
    var event = { "clientX": 5, "clientY": 10 };
    var result = f.extract_position(event);
    var expected = {
      "x": 5,
      "y": 10
    }
    expect(result).toEqual(expected);
  });
});

describe("new_node_details", function() {
  it("gets the position coordinates from a jquery click event", function() {
    var position = { "x": 5, "y": 10 };
    var result = f.new_node_details(position);
    var expected = {
      "x": 5,
      "y": 10,
      "label": "untitled"
    }
    expect(result).toEqual(expected);
  });
});

describe("create_or_update_node", function() {

  describe("when the node doesn't exist", function() {
    xit("calls the node constructor", function() {

    });
  });

});

var jsdom = require("jsdom").jsdom;
var doc = jsdom("<html><body><div id='target'></div></body></html>", {});
var window = doc.parentWindow;
var $ = require("jquery")(window);

describe("clear_nodes", function() {
  it("clears the dom of nodes", function() {
    target = $("#target");
    target.append("<div class='node'></div>");
    f.clear_nodes(target, "node")
    expect(target.is(":empty")).toBe(true);
  });
});
