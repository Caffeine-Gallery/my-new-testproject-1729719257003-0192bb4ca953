import Float "mo:base/Float";

actor Calculator {
  public query func add(x : Float, y : Float) : async Float {
    x + y
  };

  public query func subtract(x : Float, y : Float) : async Float {
    x - y
  };

  public query func multiply(x : Float, y : Float) : async Float {
    x * y
  };

  public query func divide(x : Float, y : Float) : async ?Float {
    if (y == 0) {
      null
    } else {
      ?(x / y)
    }
  };
}
