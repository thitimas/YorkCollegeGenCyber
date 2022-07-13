const btnPrint = document.getElementById("btnPrint");
btnPrint.onclick = function() {
  let num = parseInt(document.getElementById("num").value);
  while (num > 0){
    document.getElementById("star").innerHTML = 
          document.getElementById("star").innerHTML + "* <br>";
    num = num - 1;
  }
}


const btnCheck = document.getElementById("btnCheck");
btnCheck.onclick = function() {
  let z = parseInt(document.getElementById("z").value);
  if (z > 10){
    document.getElementById("check").innerHTML = z + " is greater than 10 ";
  } else {
    document.getElementById("check").innerHTML = z + " is less than or equal to 10 ";    
  }
}



const btn = document.getElementById("btnSum");


btn.onclick = function() {
  let x = parseInt(document.getElementById("x").value);
  let y = parseInt(document.getElementById("y").value);
  document.getElementById("sum").innerHTML = "The sum is " + (x + y);
}


