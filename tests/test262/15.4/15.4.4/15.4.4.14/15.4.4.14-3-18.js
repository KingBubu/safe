  function testcase() 
  {
    var obj = {
      0 : true,
      100 : true,
      length : "one"
    };
    return Array.prototype.indexOf.call(obj, true) === - 1;
  }
  {
    var __result1 = testcase();
    var __expect1 = true;
  }
  