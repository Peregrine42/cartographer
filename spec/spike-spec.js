the_module = require("../spike.js");

describe("sending a create node message", function() {

  it("sends the given node details to the given socket", function() {
    fake_socket = jasmine.createSpyObj("fake_socket", ["emit"]);
    message = "foo";

    the_module.send_create_node(fake_socket, message);

    expect(fake_socket.emit).toHaveBeenCalled();
  });

});
