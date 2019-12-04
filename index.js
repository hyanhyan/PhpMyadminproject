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


let menus=[
    {name:"nav-item", img:"img/s_db.png", title:"Databases"
    },
    {name:"nav-item", img:"img/b_sql.png", title:"Sql"
    },
    {name: "nav-item", img: "img/s_status.png", title: "Status"
    },
    {name: "nav-item", img: "img/s_host.png", title: "Users"
    },
    {name: "nav-item", img: "img/b_export.png", title: "Export"
    },
    {name:"nav-item", img:"img/b_import.png", title:"Import"
    },
    {name: "nav-item", img: "img/b_tblops.png", title: "Settings"
    }
];
var parent = document.getElementById('navigate');
for (var i of menus){
    // console.log(i['name']);
    var li=document.createElement('li');
    li.setAttribute('class', i.name);
    parent.appendChild(li);
    var img = document.createElement('img');
    img.src =i.img;
    img.setAttribute('class','home');
    img.setAttribute('alt','');
    img.style.width=("16px");
    img.style.height=("16px");
    li.appendChild(img);
    var ah=document.createElement('a');
    ah.setAttribute('class', 'nav-link btn btn');
    ah.setAttribute('href', '#');
    ah.setAttribute('role', 'button');
    ah.innerHTML=i.title;
    li.appendChild(ah);
}
var arr=[
    {img:"img/b_plus.png", href:"#multiCollapseExample1", name:"toggle 1 element"
    },
    {img:"img/b_plus.png", href:"#multiCollapseExample2", name:"toggle 2 element"
    },
    {img:"img/b_plus.png", href:"#multiCollapseExample3", name:"toggle 3 element"
    },
    {img:"img/b_plus.png", href:"#multiCollapseExample4", name:"toggle 4 element"
    },
    {img:"img/b_plus.png", href:"#multiCollapseExample5", name:"toggle 5 element"
    },
    {img:"img/b_plus.png", href:"#multiCollapseExample6", name:"toggle 6 element"
    }
];
var newDiv=document.getElementById('all');
for (var i of arr) {

}
