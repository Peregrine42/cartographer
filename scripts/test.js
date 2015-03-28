var Raphael  = require("raphael");
var graph_shim = require("./raphael-connection.js");
window.onload = function() {


  var start = function () {
    this.ox = this.attr("cx");
    this.oy = this.attr("cy");
    this.animate({r: 70, opacity: .25}, 500, ">");
  },
  move = function (dx, dy) {
    this.attr({cx: this.ox + dx, cy: this.oy + dy});
  },
  up = function () {
    this.animate({r: 50, opacity: .5}, 500, ">");
  };

  var r = Raphael("graph-target", 500, 500);

  var circle  = r.ellipse(190, 100, 30, 30).attr("fill", "#333");
  var circle2 = r.ellipse(450, 100, 20, 20).attr("fill", "#333");

  //circle.drag(move, start, up);

  var connection = graph_shim.connection(r, circle, circle2, "#4ff")
  Raphael.st.draggable = function() {
    var me = this,
        lx = 0,
        ly = 0,
        ox = 0,
        oy = 0,
        moveFnc = function(dx, dy) {
            graph_shim.connection(r, connection);
            lx = dx + ox;
            ly = dy + oy;
            me.transform('t' + lx + ',' + ly);
        },
        startFnc = function() {},
        endFnc = function() {
            ox = lx;
            oy = ly;
        };

    this.drag(moveFnc, startFnc, endFnc);
  };
  var my_set = r.set();
  my_set.push(circle);
  my_set.push(circle2);
  my_set.draggable();
}
