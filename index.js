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
     console.log(i['name']);
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
     {img:"img/b_plus.png",inner:"collapse multi-collapse inner",id:"multiCollapseExample1",tog:"row",child:"col",btn:"btn btn",href:"#multiCollapseExample1",onclick:"myFunction(1)" ,name:"Toggle 1 element",data:"collapse",class:"plus",controls:"multiCollapseExample1",role:"button",src:"multiCollapseExample1",expanded:"true"
     },
     {img1:"img/b_plus.png",secondData:"collapse1",type:"button",thirdName:"Toggle 1.1.2",thirdClass:"collapse",tog:"row",child:"col",classname:"btn btn link",secondId:"multiCollapseExample11",thirdId:"demo", btn:"btn btn",data:"collapse",class:"plus",role:"button",expanded:"true",secondHref:"#multiCollapseExample11",secondControls:"multiCollapseExample11",thirdHref:"multiCollapseExample11",secondName:"Toggle 1.1 element",target:"#demo"
     },
     {img:"img/b_plus.png",inner:"collapse multi-collapse inner",id:"multiCollapseExample2",tog:"row",child:"col",btn:"btn btn", href:"#multiCollapseExample2",onclick:"myFunction(2)",name:"Toggle 2 element",data:"collapse",class:"plus",controls:"multiCollapseExample2",role:"button",src:"multiCollapseExample2",expanded:"true"
     },
     {img1:"img/b_plus.png",secondData:"collapse2",type:"button",thirdName:"Toggle 2.1.2",thirdClass:"collapse1",tog:"row",child:"col",classname:"btn btn link",secondId:"multiCollapseExample22",thirdId:"demo1",btn:"btn btn", data:"collapse",class:"plus",role:"button",expanded:"true",secondHref:"#multiCollapseExample22",secondControls:"multiCollapseExample22",thirdHref:"multiCollapseExample22",secondName:"Toggle 2.1 element",target:"#demo1"
     },
     {img:"img/b_plus.png",inner:"collapse multi-collapse inner",id:"multiCollapseExample3",tog:"row",child:"col",btn:"btn btn", href:"#multiCollapseExample3",onclick:"myFunction(3)", name:"Toggle 3 element",data:"collapse",class:"plus",controls:"multiCollapseExample3",role:"button",src:"multiCollapseExample3",expanded:"true"
     },
     {img1:"img/b_plus.png",secondData:"collapse3",type:"button",thirdName:"Toggle 3.1.2",thirdClass:"collapse3",tog:"row",child:"col", classname:"btn btn link",secondId:"multiCollapseExample33",thirdId:"demo3",btn:"btn btn", data:"collapse",class:"plus",role:"button",expanded:"true",secondHref:"#multiCollapseExample33",secondControls:"multiCollapseExample33",thirdHref:"multiCollapseExample33",secondName:"Toggle 3.1 element",target:"#demo3"
     },
 ];
 /*$('<div>',{class:i.classname,css:{width:100,height:100}}).appendTo('#all');*/
 console.log(arr[i]);
     var all=document.getElementById('all');
     $(document).ready(function(){
     for(var i of arr) {
         var p=(document.createElement('div'));
         p.setAttribute('class',i.classname);
         $(p).appendTo(all);
         var img=(document.createElement('img'));
         img.src=i.img;
         img.setAttribute('href',i.href);
         img.setAttribute('alt','');
         img.setAttribute('data-toggle',i.data);
         img.setAttribute('class',i.class);
         img.setAttribute('aria-controls',i.controls);
         img.style.width=("16px");
         img.style.height=("16px");
         $(img).appendTo(p);
         var ah=document.createElement('a');
         ah.setAttribute('class',i.btn);
         ah.setAttribute('role',i.role);
         ah.setAttribute('data-toggle',i.data);
         ah.setAttribute('aria-controls',i.src);
         ah.setAttribute('aria-expanded',i.expanded);
         ah.setAttribute('href',i.href);
         ah.setAttribute('onclick',i.onclick);
         $(ah).text(i.name);
         $(ah).appendTo(p);
         var row=(document.createElement('div'));
         row.setAttribute('class',i.tog);
         $(row).appendTo(all);
         var col=(document.createElement('div'));
         col.setAttribute('class',i.child);
         $(col).appendTo(row);
         var inner1=(document.createElement('div'));
         inner1.setAttribute('id',i.id);
         inner1.setAttribute('class',i.inner);
         $(inner1).appendTo(col);
         var p1=(document.createElement('p'));
         $(p1).appendTo(inner1);
         var img11=(document.createElement('img'));
         img11.src=i.img;
         img11.setAttribute('href',i.secondHref);
         img11.setAttribute('alt','');
         img11.setAttribute('data-toggle',i.data);
         img11.setAttribute('class',i.class);
         img11.setAttribute('aria-controls',i.secondControls);
         img11.style.width=("16px");
         img11.style.height=("16px");
         $(img11).appendTo(p1);
         var ah1=document.createElement('a');
         ah1.setAttribute('class',i.btn);
         ah1.setAttribute('role',i.role);
         ah1.setAttribute('data-toggle',i.data);
         ah1.setAttribute('aria-controls',i.thirdHref);
         ah1.setAttribute('aria-expanded',i.expanded);
         ah1.setAttribute('href',i.thirdHref);
         $(ah1).text(i.secondName);
         $(ah1).appendTo(p1);
         var inner2=(document.createElement('div'));
         inner2.setAttribute('id',i.secondId);
         inner2.setAttribute('class',i.inner);
         $(inner2).appendTo(inner1);
         var button=(document.createElement('button'));
         button.setAttribute('type',i.type);
         button.setAttribute('class',i.classname);
         button.setAttribute('data-toggle',i.secondData);
         button.setAttribute('data-target',i.target);
         $(button).text(i.thirdName);
         $(button).appendTo(inner2);
         var demo=(document.createElement('div'));
         demo.setAttribute('id',i.thirdId);
         demo.setAttribute('class',i.thirdClass);
         $(demo).appendTo(inner2);
     }
     });


