function myFunction(x) {
    if (x === 1) {
        document.getElementById('general').innerHTML = "<table width='100%' border='1'><tr><td>&nbsp;</td>Table1<td>&nbsp;</td></tr></table>";
    } else if (x === 2) {
        document.getElementById('general').innerHTML = "<table width='100%' border='1'><tr><td>&nbsp;</td>Table2<td>&nbsp;</td></tr></table>";
    } else {
        document.getElementById('general').innerHTML = "<table width='100%' border='1'><tr><td>&nbsp;</td>Table3<td>&nbsp;</td></tr></table>";
    }

}
/*
function togDropdown() {
    if (document.getElementsByClassName('plus')) {
        if (document.getElementById('plus').style.display == 'none') {
            document.getElementById('plus').style.display = 'block';
            document.getElementById('minus').style.display = 'none';
        } else {
            document.getElementById('plus').style.display = 'none';
            document.getElementById('minus').style.display = 'block';
        }
    }
}
togDropdown();
*/




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
    {img:"img/b_plus.png",inner:"collapse multi-collapse inner",id:"multiCollapseExample1",tog:"row",child:"col",classname:'div1',btn:"btn btn",href:"#multiCollapseExample1",onclick:"myFunction(1)" ,name:"toggle 1 element",data:"collapse",class:"plus",controls:"multiCollapseExample1",role:"button",src:"multiCollapseExample1",expanded:"true"
    },
    {img:"img/b_plus.png",inner:"collapse multi-collapse inner",id:"multiCollapseExample11",tog:"row",child:"col",classname:'div1', btn:"btn btn",href:"#multiCollapseExample11", name:"toggle 1.1 element",data:"collapse",class:"plus",controls:"multiCollapseExample11",role:"button",src:"multiCollapseExample1.1",expanded:"true"
    },
    {img:"img/b_plus.png",inner:"collapse multi-collapse inner",id:"multiCollapseExample2",tog:"row",child:"col",classname:'div1',btn:"btn btn", href:"#multiCollapseExample2",onclick:"myFunction(2)",name:"toggle 2 element",data:"collapse",class:"plus",controls:"multiCollapseExample2",role:"button",src:"multiCollapseExample2",expanded:"true"
    },
    {img:"img/b_plus.png",inner:"collapse multi-collapse inner",id:"multiCollapseExample22",tog:"row",child:"col",classname:'div1',btn:"btn btn", href:"#multiCollapseExample22", name:"toggle 2.2 element",data:"collapse",class:"plus",controls:"multiCollapseExample22",role:"button",src:"multiCollapseExample2.2",expanded:"true"
    },
    {img:"img/b_plus.png",inner:"collapse multi-collapse inner",id:"multiCollapseExample3",tog:"row",child:"col",classname:'div1',btn:"btn btn", href:"#multiCollapseExample3",onclick:"myFunction(3)", name:"toggle 3 element",data:"collapse",class:"plus",controls:"multiCollapseExample3",role:"button",src:"multiCollapseExample3",expanded:"true"
    },
    {img:"img/b_plus.png",inner:"collapse multi-collapse inner",id:"multiCollapseExample33",tog:"row",child:"col", classname:'div1',btn:"btn btn",href:"#multiCollapseExample33", name:"toggle 3.3 element",data:"collapse",class:"plus",controls:"multiCollapseExample33",role:"button",src:"multiCollapseExample3.1",expanded:"true"
    },
];
/*$('<div>',{class:i.classname,css:{width:100,height:100}}).appendTo('#all');*/
console.log(arr[i]);
    var all=document.getElementById('all');
    $(document).ready(function(){
    for(var i of arr) {
        var div1=(document.createElement('div'));
        div1.setAttribute('class',i.classname);
        div1.style.width=("300px");
        div1.style.height=("100px");
        $(div1).appendTo(all);
        var img=(document.createElement('img'));
        img.src=i.img;
        img.setAttribute('href',i.href);
        img.setAttribute('alt','');
        img.setAttribute('data-toggle',i.data);
        img.setAttribute('class',i.class);
        img.setAttribute('aria-controls',i.controls);
        img.style.width=("16px");
        img.style.height=("16px");
        $(img).appendTo(div1);
        var ah=document.createElement('a');
        ah.setAttribute('class',i.btn);
        ah.setAttribute('role',i.role);
        ah.setAttribute('data-toggle',i.data);
        ah.setAttribute('aria-controls',i.src);
        ah.setAttribute('aria-expanded',i.expanded);
        ah.setAttribute('href',i.href);
        ah.setAttribute('onclick',i.onclick);
        $(ah).text(i.name);
        $(ah).appendTo(div1);
        var row=(document.createElement('div'));
        row.setAttribute('class',i.tog);
        $(row).appendTo(all);
        var col=(document.createElement('div'));
        col.setAttribute('class',i.child);
        $(col).appendTo(row);
        var inner=(document.createElement('div'));
        inner.setAttribute('id',i.id);
        inner.setAttribute('class',i.inner);
        $(inner).appendTo(col);
    }
    });


