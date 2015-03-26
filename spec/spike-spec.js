the_module = require("../spike.js");

describe("send_create_node", function() {
  it("sends the given node details to the given socket", function() {
    fake_socket = jasmine.createSpyObj("fake_socket", ["emit"]);
    message = "foo";
    the_module.send_create_node(fake_socket, message);
    expect(fake_socket.emit).toHaveBeenCalledWith("message", message);
  });
});

describe("database_create_message", function() {
  it("makes a database update message from a create event", function() {
    details = "foo";
    result = the_module.database_create_message(details);
    expected = {
      "action": "create",
      "type": "node",
      "args": details
    }
    expect(result).toEqual(expected);
  });

});
