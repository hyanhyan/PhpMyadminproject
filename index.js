function myFunction(x) {
    if (x === 1) {
        table2.style.display = "none";
        table3.style.display = "none";
        table1.style.display = "block";
        document.getElementById('general').style.display = "none";
        document.getElementById('create').style.display = "none";

    } else if (x === 2) {
        table2.style.display = "block";
        table1.style.display = "none";
        table3.style.display = "none";
        document.getElementById('general').style.display = "none";
        document.getElementById('create').style.display = "none";


    } else if (x === 3) {
        table3.style.display = "block";
        table2.style.display = "none";
        table1.style.display = "none";
        document.getElementById('general').style.display = "none";
        document.getElementById('create').style.display = "none";

    } else if (x === 4) {
        table3.style.display = "none";
        table2.style.display = "none";
        table1.style.display = "none";
        document.getElementById('general').style.display = "none";
        document.getElementById('create').style.display = "block";

    } else if (x === 0) {
        table2.style.display = "none";
        table1.style.display = "none";
        table3.style.display = "none";
        document.getElementById('general').style.display = "block";
        document.getElementById('create').style.display = "none";
    }
    else {
        console.log('error');
    }
}

var parent = document.getElementById('navigate');
$(document).ready(function () {
    $.ajax({
        url: "ajax/db.json",
        dataType: "json",
        success: function (data) {
            for (var i of data.menus) {
                var li = document.createElement('li');
                li.setAttribute('class', i.name);
                parent.appendChild(li);
                var img = document.createElement('img');
                img.src = i.img;
                img.setAttribute('class',i.class);
                img.setAttribute('alt', '');
                li.appendChild(img);
                var ah = document.createElement('a');
                ah.setAttribute('class', 'nav-link btn btn');
                ah.setAttribute('href', '#');
                ah.setAttribute('role', 'button');
                ah.innerHTML = i.title;
                li.appendChild(ah);
            }
        },
        error: function (xhr, status, error) {
            var ttt = document.createElement('p');
            ttt.innerText = 'you cant enter to your page';
            parent.appendChild(ttt);
        }
    });
});
var all = document.getElementById('all');
$(document).ready(function () {
    $.ajax({
        url: "ajax/aside.json",
        dataType: "json",
        success: function (data) {
            for (var i of data.arr) {
                var p = (document.createElement('p'));
                $(p).appendTo(all);
                var img = (document.createElement('img'));
                img.src = i.img;
                img.setAttribute('href', i.href);
                img.setAttribute('data-toggle', i.data);
                $(img).appendTo(p);
                var ah = document.createElement('a');
                ah.setAttribute('data-toggle', i.data);
                ah.setAttribute('onclick', i.onclick);
                $(ah).text(i.name);
                $(ah).appendTo(p);
                var row = (document.createElement('div'));
                row.setAttribute('class', i.tog);
                $(row).appendTo(all);
                var col = (document.createElement('div'));
                col.setAttribute('class', i.child);
                $(col).appendTo(row);
                var inner1 = (document.createElement('div'));
                inner1.setAttribute('id', i.id);
                inner1.setAttribute('class', i.inner);
                var p1 = (document.createElement('p'));
                $(p1).appendTo(inner1);
                var img11 = (document.createElement('img'));
                img11.src = i.img;
                img11.setAttribute('href', i.secondHref);
                img11.setAttribute('data-toggle', i.data);
                $(img11).appendTo(p1);
                var ah1 = document.createElement('a');
                ah1.setAttribute('data-toggle', i.data);
                ah1.setAttribute('onclick', i.click);
                $(ah1).text(i.secondName);
                $(ah1).appendTo(p1);
                $(inner1).appendTo(col);
                var row1 = (document.createElement('div'));
                row1.setAttribute('class', i.tog);
                $(row1).appendTo(inner1);
                var col1 = (document.createElement('div'));
                col1.setAttribute('class', i.child);
                $(col1).appendTo(row1);
                var inner2 = (document.createElement('div'));
                inner2.setAttribute('id', i.secondId);
                inner2.setAttribute('class', i.inner);
                var p2 = (document.createElement('p'));
                $(p2).appendTo(inner2);
                var img22 = (document.createElement('img'));
                img22.src = i.img;
                img22.setAttribute('href', i.secondHref);
                img22.setAttribute('data-toggle', i.data);
                $(img22).appendTo(p2);
                var ah2 = document.createElement('a');
                ah2.setAttribute('data-toggle', i.data);
                ah2.setAttribute('id', i.thirdId);
                ah2.setAttribute('onclick', i.onclick);
                $(ah2).text(i.thirdName);
                $(ah2).appendTo(p2);
                $(inner2).appendTo(inner1);
            }
        },
        error: function (xhr, status, error) {
            var ddt = document.createElement('p');
            ddt.innerText = 'you cant enter to your page';
            all.appendChild(ddt);
        }
    });
});
var table1 = document.getElementById('table1');
table1.style.display = "none";
$(document).ready(function () {
    $.ajax({
        url: "ajax/table.json",
        dataType: "json",
        success: function (data) {
            var table = document.createElement('table');
            var thead = document.createElement('thead');
            $(thead).appendTo(table);
            var tbody = document.createElement('tbody');
            $(tbody).appendTo(table);
            for (var i of data.tableArr) {
                var trh = document.createElement('tr');
                var th1 = document.createElement('th');
                var a = document.createElement('a');
                $(a).text(i.name);
                $(a).appendTo(th1);
                $(th1).appendTo(trh);
                $(trh).appendTo(thead);
                var tr = document.createElement('tr');
                $(tr).appendTo(tbody);
                var td = document.createElement('td');
                $(td).text(i.titleSec);
                var input = document.createElement('input');
                $(input).appendTo(td);
                input.setAttribute('type', i.type);
                var img = document.createElement('img');
                $(img).appendTo(td);
                img.src = i.img;
                $(td).appendTo(tr);
                var td1 = document.createElement('td');
                $(td1).appendTo(tr);
                var a1 = document.createElement('a');
                $(a1).text(i.secTitle);
                $(a1).appendTo(td);
                var a2 = document.createElement('a');
                $(a2).text(i.secondName);
                $(a2).appendTo(td1);
                var input = document.createElement('input');
                $(input).appendTo(td);
                input.setAttribute('type', i.type);
            }
            $(table).appendTo(table1);
        }
    });
});
var table2 = document.getElementById('table2');
table2.style.display = "none";
$(document).ready(function () {
    $.ajax({
        url: "ajax/table.json",
        dataType: "json",
        success: function (data) {
            var table = document.createElement('table');
            var thead = document.createElement('thead');
            $(thead).appendTo(table);
            var tbody = document.createElement('tbody');
            $(tbody).appendTo(table);
            for (var i of data.Arr) {
                var trh = document.createElement('tr');
                var th1 = document.createElement('th');
                var a = document.createElement('a');
                $(a).text(i.name);
                $(a).appendTo(th1);
                $(th1).appendTo(trh);
                $(trh).appendTo(thead);
                var tr = document.createElement('tr');
                $(tr).appendTo(tbody);
                var td = document.createElement('td');
                $(td).text(i.titleSec);
                var input = document.createElement('input');
                $(input).appendTo(td);
                input.setAttribute('type', i.type);
                var img = document.createElement('img');
                $(img).appendTo(td);
                img.src = i.img;
                $(td).appendTo(tr);
                var td1 = document.createElement('td');
                $(td1).appendTo(tr);
                var a1 = document.createElement('a');
                $(a1).text(i.secTitle);
                $(a1).appendTo(td);
                var a2 = document.createElement('a');
                $(a2).text(i.secondName);
                $(a2).appendTo(td1);
                var input = document.createElement('input');
                $(input).appendTo(td);
                input.setAttribute('type', i.type);
                var img = document.createElement('img');
                $(img).appendTo(td);
                img.src = i.image;
            }
            $(table).appendTo(table2);
        }
    });
});
var table3 = document.getElementById('table3');
table3.style.display = "none";
$(document).ready(function () {
    $.ajax({
        url: "ajax/table.json",
        dataType: "json",
        success: function (data) {
            var table = document.createElement('table');
            var thead = document.createElement('thead');
            $(thead).appendTo(table);
            var tbody = document.createElement('tbody');
            $(tbody).appendTo(table);
            for (var i of data.Array) {
                var tr = document.createElement('tr');
                $(tr).appendTo(tbody);
                var td = document.createElement('td');
                $(td).text(i.titleSec);
                var input = document.createElement('input');
                $(input).appendTo(td);
                input.setAttribute('type', i.type);
                $(td).appendTo(tr);
                var td1 = document.createElement('td');
                $(td1).appendTo(tr);
                var a1 = document.createElement('a');
                $(a1).text(i.secTitle);
                $(a1).appendTo(td);
                var a2 = document.createElement('a');
                $(a2).text(i.secondName);
                $(a2).appendTo(td1);
                var input = document.createElement('input');
                $(input).appendTo(td);
                input.setAttribute('type', i.type);
                var img = document.createElement('img');
                $(img).appendTo(td);
                img.src = i.img;
            }
            $(table).appendTo(table3);
        }
    });
});

let CreateArr=[
    {
        secondName: "Structure",
        secTitle: "Show",
        name: "Database",
        type: "Checkbox",
        titleSec: "Database",
        img: "img/s_host.png",
        image: "img/s_cancel.png"
    },
        {
            secondName: "Structure",
            secTitle: "Show",
            name: "Compare",
            type: "Checkbox",
            titleSec: "Database",
            img: "img/s_host.png",
            image: "img/s_cancel.png"
        },
        {
            secondName: "Structure",
            secTitle: "Show",
            name: "Replication",
            type: "Checkbox",
            titleSec: "Database",
            img: "img/s_host.png",
            image: "img/s_cancel.png"
        },
        {
            secondName: "Structure",
            secTitle: "Show",
            name: "Doing",
            type: "Checkbox",
            titleSec: "Database",
            img: "img/s_host.png",
            image: "img/s_cancel.png"
        },
        {
            secondName: "Structure",
            secTitle: "Show",
            name: "Type",
            type: "Checkbox",
            titleSec: "Database",
            img: "img/s_host.png",
            image: "img/s_cancel.png"
        }
];

var cr = document.getElementById('create');
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    $(thead).appendTo(table);
    var tbody = document.createElement('tbody');
    $(tbody).appendTo(table);
for(var i of CreateArr){
        var trh = document.createElement('tr');
        var th1 = document.createElement('th');
        var a = document.createElement('a');
        $(a).text(i.name);
        $(a).appendTo(th1);
        $(th1).appendTo(trh);
        $(trh).appendTo(thead);
        var tr = document.createElement('tr');
        $(tr).appendTo(tbody);
        var td = document.createElement('td');
        $(td).text(i.titleSec);
        var input = document.createElement('input');
        $(input).appendTo(td);
        input.setAttribute('type', i.type);
        var img = document.createElement('img');
        $(img).appendTo(td);
        img.src = i.img;
        $(td).appendTo(tr);
        var td1 = document.createElement('td');
        $(td1).appendTo(tr);
        var a1 = document.createElement('a');
        $(a1).text(i.secTitle);
        $(a1).appendTo(td);
        var a2 = document.createElement('a');
        $(a2).text(i.secondName);
        $(a2).appendTo(td1);
        var input = document.createElement('input');
        $(input).appendTo(td);
        input.setAttribute('type', i.type);
        var img = document.createElement('img');
        $(img).appendTo(td);
        img.src = i.image;
    }
    $(table).appendTo(cr);


// let CrArr=[
//     {
//         name:z.value
//     }
//     ];
// for(var i of CrArr) {
//     var trh = document.createElement('tr');
//     var th1 = document.createElement('th');
//     var a = document.createElement('a');
//     $(a).text(i.name);
//     $(a).appendTo(th1);
//     $(th1).appendTo(trh);
//     $(trh).appendTo(thead);
//     var tr = document.createElement('tr');
//     $(tr).appendTo(tbody);
//     var td = document.createElement('td');
//     $(td).text(i.titleSec);
//     var input = document.createElement('input');
//     $(input).appendTo(td);
//     input.setAttribute('type', i.type);
//     var img = document.createElement('img');
//     $(img).appendTo(td);
//     img.src = i.img;
//     $(td).appendTo(tr);
// }
// let CrObj=
//     {
//         "name":document.getElementById('text_create_db').value,
//
//     };



//    for(var i of CrArr) {
//     var tr = document.createElement('tr');
//     var td = document.createElement('td');
//     $(td).text(i.name);
//     var input = document.createElement('input');
//     $(input).appendTo(td);
//     input.setAttribute('type', i.type);
//     var img = document.createElement('img');
//     $(img).appendTo(td);
//     img.src = i.img;
//     $(td).appendTo(tr);
//     var td1 = document.createElement('td');
//     $(td1).appendTo(tr);
//     var a1 = document.createElement('a');
//     $(a1).text(i.secTitle);
//     $(a1).appendTo(td);
//     var a2 = document.createElement('a');
//     $(a2).text(i.secondName);
//     $(a2).appendTo(td1);
//     var input = document.createElement('input');
//     $(input).appendTo(td);
//     input.setAttribute('type', i.type);
//
// }


    // "name":document.getElementById('text_create_db').value,
    // console.log(z);
    // CreateArr[i].push(CrObj.name);


function pushObj() {
    let myNewObjElement = {
        "name": document.getElementById('text_create_db').value,
        "select": document.getElementsByClassName('select').value,
        type:"Checkbox",
        secondName: "Structure",
        secTitle: "Show",
        img: "img/s_host.png",
    };
    var tr = document.createElement('tr');
    $(tr).appendTo(tbody);
    for(let key in myNewObjElement) {
        var td = document.createElement('td');
        $(td).text(myNewObjElement.name);
        var input = document.createElement('input');
        $(input).appendTo(td);
        input.setAttribute('type', i.type);
        var img = document.createElement('img');
        $(img).appendTo(td);
        img.src = i.img;
        $(td).appendTo(tr);
    }
    CreateArr.push(myNewObjElement);
    console.log(CreateArr);
}
function switchVisible() {
    if (document.getElementById('Div1')) {

        if (document.getElementById('Div1').style.display == 'none') {
            document.getElementById('Div1').style.display = 'block';
            document.getElementById('Div2').style.display = 'none';
        } else {
            document.getElementById('Div1').style.display = 'none';
            document.getElementById('Div2').style.display = 'block';
        }
    }
}



