(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "fable-core"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("fable-core"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.fableCore);
    global.stck = mod.exports;
  }
})(this, function (exports, _fableCore) {
  

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.error = exports.standard_library = undefined;
  exports.printerr = printerr;
  exports.push = push;
  exports.drop = drop;
  exports.swap = swap;
  exports.dup = dup;
  exports.over = over;
  exports.rot = rot;
  exports.len = len;
  exports.isInt = isInt;
  exports.math = math;
  exports.add = add;
  exports.substract = substract;
  exports.multiply = multiply;
  exports.divide = divide;
  exports.modulo = modulo;
  exports.asInt = asInt;
  exports.equal = equal;
  exports.greater = greater;
  exports.less = less;
  exports.not = not;
  exports.exec = exec;
  exports.define = define;
  exports.find = find;
  exports.tokens = tokens;
  exports.split = split;
  exports.cond = cond;
  exports.eval = eval;
  exports.evalPrint = evalPrint;
  exports.startHeapAndStack = startHeapAndStack;

  var standard_library = exports.standard_library = _fableCore.List.ofArray([["2dup", _fableCore.List.ofArray(["over", "over"])], ["rem", _fableCore.List.ofArray(["dup", "rot", "swap", "2dup", "i/", "*", "-", "1000000", "*", "swap", "i/"])], ["/", _fableCore.List.ofArray(["2dup", "i/", "rot", "rot", "rem"])], ["empty", _fableCore.List.ofArray(["len", "0", "="])], ["clear", _fableCore.List.ofArray(["empty", "?", ":", ".", "clear", ";"])], ["max", _fableCore.List.ofArray(["len", "1", "=", "not", "?", "2dup", ">", "?", "swap", ".", ":", ".", ";", "max", ":", ";"])], ["min", _fableCore.List.ofArray(["len", "1", "=", "not", "?", "2dup", "<", "?", "swap", ".", ":", ".", ";", "min", ":", ";"])]]);

  var error = exports.error = null;

  function printerr(op) {
    exports.error = error = _fableCore.String.fsFormat("Cannot %s on the stack")(function (x) {
      return x;
    })(op);
  }

  function push(e, stack) {
    return _fableCore.List.ofArray([e], stack);
  }

  function drop(stack) {
    return stack.tail != null ? function () {
      var tos = stack.head;
      var rest = stack.tail;
      return rest;
    }() : function () {
      printerr("drop");
      return stack;
    }();
  }

  function swap(stack) {
    var $target1 = function $target1() {
      printerr("swap");
      return stack;
    };

    if (stack.tail != null) {
      if (stack.tail.tail != null) {
        var a = stack.head;
        var b = stack.tail.head;
        var rest = stack.tail.tail;
        return _fableCore.List.ofArray([b, a], rest);
      } else {
        return $target1();
      }
    } else {
      return $target1();
    }
  }

  function dup(stack) {
    return stack.tail != null ? function () {
      var tos = stack.head;
      var rest = stack.tail;
      return _fableCore.List.ofArray([tos, tos], rest);
    }() : function () {
      printerr("dup");
      return stack;
    }();
  }

  function over(stack) {
    var $target1 = function $target1() {
      printerr("over");
      return stack;
    };

    if (stack.tail != null) {
      if (stack.tail.tail != null) {
        var a = stack.head;
        var b = stack.tail.head;
        var rest = stack.tail.tail;
        return _fableCore.List.ofArray([b, a, b], rest);
      } else {
        return $target1();
      }
    } else {
      return $target1();
    }
  }

  function rot(stack) {
    var $target1 = function $target1() {
      printerr("rot");
      return stack;
    };

    if (stack.tail != null) {
      if (stack.tail.tail != null) {
        if (stack.tail.tail.tail != null) {
          var a = stack.head;
          var b = stack.tail.head;
          var c = stack.tail.tail.head;
          var rest = stack.tail.tail.tail;
          return _fableCore.List.ofArray([c, a, b], rest);
        } else {
          return $target1();
        }
      } else {
        return $target1();
      }
    } else {
      return $target1();
    }
  }

  function len(stack) {
    return push(stack.length, stack);
  }

  function isInt(string) {
    return true;
  }

  function math(op, stack) {
    var $target1 = function $target1() {
      printerr("do math");
      return stack;
    };

    if (stack.tail != null) {
      if (stack.tail.tail != null) {
        var a = stack.head;
        var b = stack.tail.head;
        var rest = stack.tail.tail;
        return push(op(a)(b), rest);
      } else {
        return $target1();
      }
    } else {
      return $target1();
    }
  }

  function add(stack) {
    return math(function (a) {
      return function (b) {
        return b + a;
      };
    }, stack);
  }

  function substract(stack) {
    return math(function (a) {
      return function (b) {
        return b - a;
      };
    }, stack);
  }

  function multiply(stack) {
    return math(function (a) {
      return function (b) {
        return b * a;
      };
    }, stack);
  }

  function divide(stack) {
    return math(function (a) {
      return function (b) {
        return ~~(b / a);
      };
    }, stack);
  }

  function modulo(stack) {
    return math(function (a) {
      return function (b) {
        return b % a;
      };
    }, stack);
  }

  function asInt(b) {
    return b ? 1 : 0;
  }

  function equal(stack) {
    return math(function (a) {
      return function (b) {
        return asInt(a === b);
      };
    }, stack);
  }

  function greater(stack) {
    return math(function (a) {
      return function (b) {
        return asInt(a > b);
      };
    }, stack);
  }

  function less(stack) {
    return math(function (a) {
      return function (b) {
        return asInt(a < b);
      };
    }, stack);
  }

  function not(stack) {
    return stack.tail != null ? function () {
      var tos = stack.head;
      var rest = stack.tail;

      if (tos !== 0) {
        return _fableCore.List.ofArray([0], rest);
      } else {
        return _fableCore.List.ofArray([1], rest);
      }
    }() : function () {
      printerr("not");
      return stack;
    }();
  }

  function exec(exp, stack) {
    return exp === "." ? drop(stack) : exp === "swap" ? swap(stack) : exp === "dup" ? dup(stack) : exp === "over" ? over(stack) : exp === "rot" ? rot(stack) : exp === "len" ? len(stack) : exp === "+" ? add(stack) : exp === "-" ? substract(stack) : exp === "*" ? multiply(stack) : exp === "i/" ? divide(stack) : exp === "%" ? modulo(stack) : exp === "=" ? equal(stack) : exp === ">" ? greater(stack) : exp === "<" ? less(stack) : exp === "not" ? not(stack) : isInt(exp) ? push(Number.parseInt(exp), stack) : function () {
      printerr(exp);
      return stack;
    }();
  }

  function define(s, heap) {
    return _fableCore.List.ofArray([s], heap);
  }

  function find(s, heap) {
    return heap.tail != null ? function () {
      var tail = heap.tail;
      var head = heap.head;

      if (_fableCore.Util.equals(head[0], s)) {
        return head[1];
      } else {
        return find(s, tail);
      }
    }() : new _fableCore.List();
  }

  function tokens(s) {
    return _fableCore.Seq.toList(s.split(" "));
  }

  function split(delim, n, col, exps) {
    return exps.tail != null ? function () {
      var tail = exps.tail;
      var head = exps.head;

      if (head === "?") {
        return split(delim, n + 1, _fableCore.List.ofArray([head], col), tail);
      } else {
        if (function () {
          var d = head;
          return d === delim;
        }()) {
          var d = head;

          if (n === 0) {
            return [_fableCore.List.reverse(col), tail];
          } else {
            return split(delim, n - 1, _fableCore.List.ofArray([head], col), tail);
          }
        } else {
          return split(delim, n, _fableCore.List.ofArray([head], col), tail);
        }
      }
    }() : [_fableCore.List.reverse(col), new _fableCore.List()];
  }

  function cond(tos, exps) {
    var t = split(":", 0, new _fableCore.List(), exps);
    var f = split(";", 0, new _fableCore.List(), t[1]);
    var matchValue = tos !== 0;

    if (matchValue) {
      return _fableCore.List.append(t[0], f[1]);
    } else {
      return _fableCore.List.append(f[0], f[1]);
    }
  }

  function eval(exps, hs_0, hs_1) {
    var hs = [hs_0, hs_1];
    var heap = hs[0];
    var stack = hs[1];

    if (exps.tail != null) {
      var tail = exps.tail;
      var head = exps.head;

      if (head === "//") {
        return [heap, stack];
      } else {
        if (head === "#") {
          if (tail.tail != null) {
            var name = tail.head;
            var definition = tail.tail;
            return [define([name, definition], heap), stack];
          } else {
            return [heap, stack];
          }
        } else {
          if (head === "?") {
            if (stack.tail != null) {
              var tos = stack.head;
              var rest = stack.tail;
              return eval(cond(tos, tail), heap, rest);
            } else {
              return [heap, stack];
            }
          } else {
            var matchValue = find(head, heap);

            if (matchValue.tail == null) {
              return eval(tail, heap, exec(head, stack));
            } else {
              var def = matchValue;

              var exps_1 = _fableCore.List.append(def, tail);

              var arg10_ = hs[0];
              var arg11_ = hs[1];
              return eval(exps_1, arg10_, arg11_);
            }
          }
        }
      }
    } else {
      return [heap, stack];
    }
  }

  function evalPrint(hs_0, hs_1, line) {
    var hs = [hs_0, hs_1];
    var exps = tokens(line);
    return function (tupledArg) {
      var arg10_ = tupledArg[0];
      var arg11_ = tupledArg[1];
      return eval(exps, arg10_, arg11_);
    }(hs);
  }

  function startHeapAndStack() {
    return [standard_library, new _fableCore.List()];
  }
});