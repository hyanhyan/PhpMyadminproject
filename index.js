function myFunction(x) {
    if (x === 1) {
        document.getElementById('general').innerHTML = "<table width='100%' border='1'><tr><td>&nbsp;</td>Table1<td>&nbsp;</td></tr></table>";
    } else if (x === 2) {
        document.getElementById('general').innerHTML = "<table width='100%' border='1'><tr><td>&nbsp;</td>Table2<td>&nbsp;</td></tr></table>";
    } else if (x === 3) {
        document.getElementById('general').innerHTML = "<table width='100%' border='1'><tr><td>&nbsp;</td>Table3<td>&nbsp;</td></tr></table>";
    } else if (x === 4) {
        document.getElementById('general').innerHTML = "<table width='100%' border='1'><tr><td>&nbsp;</td>Table4<td>&nbsp;</td></tr></table>";
    } else {
        document.getElementById('general').innerHTML = "<table width='100%' border='1'><tr><td>&nbsp;</td>Table5<td>&nbsp;</td></tr></table>";
    }
}

/*
function myFunc(number) {
    let arr1=["100px","100px","100px"];
    let arr2=["#cef500","#cbeef3","#e1bbc7"];
    for (let i = 0,j=0; i < arr1.length,j<arr2.length; i++,j++) {
        let newDiv = document.createElement("div");
        newDiv.setAttribute('id', 'square'+i);
        document.body.appendChild(newDiv);
        document.getElementById('square'+i).style.width = arr1[i];
        document.getElementById('square'+i).style.height = arr1[i];
        document.getElementById('square'+i).style.background = arr2[j];
    }
}
myFunc();
*/
