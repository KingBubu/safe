  function testcase() 
  {
    var accessed = false;
    var arr = [];
    Object.defineProperty(arr, "0", {
      get : (function () 
      {
        throw new TypeError();
      }),
      configurable : true
    });
    Object.defineProperty(arr, "1", {
      get : (function () 
      {
        accessed = true;
        return true;
      }),
      configurable : true
    });
    try
{      arr.indexOf(true);
      return false;}
    catch (e)
{      return (e instanceof TypeError) && ! accessed;}

  }
  {
    var __result1 = testcase();
    var __expect1 = true;
  }
  