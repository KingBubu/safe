// Syntax error
//   function testcase() 
//   {
//     var obj = {
      
//     };
//     try
// {      eval("function obj.tt() {};");
//       return false;}
//     catch (e)
// {      return e instanceof SyntaxError;}

//   }
//   {
//     var __result1 = testcase();
//     var __expect1 = true;
//   }
  