$(document).ready(function(){
        
        
    let firstNum = "";                
    let secondNum = "";               
    let operator;
    let result;
    let selectedOperator;            
    let selectedEquals;             
    let calc = {
      plus: function(u,t) {
        return u + t;
      },
      minus: function(u,t) {
        return u - t;
      },
      times: function(u,t) {
        return u * t;
      },
      divide: function(u,t) {
        return u / t;
      },
      power: function(u,t) {
        return u * t;
      }
    };
    function reset() {
      $("#display h1").text("");
      firstNum = "";
      secondNum = "";
      operator = "";
      result = "";
      selectedOperator = false;
      selectedEquals = false;
    }
    
    $("#calculator").on("click","button",function() {
      
      if (selectedEquals) {
        reset();
      }
      
      let input = $(this).val("value");
      
      switch ($(this).val("class").split(" ")[2]) {
        case "number":
          if (!selectedEquals) {
            if (!selectedOperator) {
              firstNum += input;
              $("#first-number").text(firstNum);
            } else {
              secondNum += input;
              $("#second-number").text(secondNum);
            }
          }
          break;
        case "operator":
          if (!selectedEquals && firstNum !== "") {
            selectedOperator = true;
            operator = input;
            $("#operator").text($(this).text());
          }
          break;
        case "equal":
          if (selectedOperator) {
            selectedEquals = true;
            // result = eval(firstNum + operator + secondNum);
            result = calc[operator](parseInt(firstNum), parseInt(secondNum));
            $("#result").text(result);
          }
          break;
        case "clear":
          reset();
          break;
        default:
          break;
      }
    });
  });
