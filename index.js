function myFunction(x) {
     if (x === 1) {
         ddd.style.display="none";
        nnn.style.display="block";
        document.getElementById('general').innerHTML = "<div id=\"nnn\"></div>";
    }
    else if (x === 2) {
         ddd.style.display="block";
        nnn.style.display="none";
        document.getElementById('general').innerHTML = "<div id=\"ddd\"></div>";

    }
    else if (x === 3) {
         ddd.style.display="none";
        nnn.style.display="block";
        document.getElementById('general').innerHTML = "<div id=\"nnn\"></div>";
    }
else if(x===0) {
         ddd.style.display="none";
         nnn.style.display="none";
         var gen=(document.getElementById('general').innerHTML ="<div id=\"general\">\n" +
             "        <div class=\"row\">\n" +
             "            <div class=\"col-8\">\n" +
             "                 <div class=\"gen\"><div id=\"nnt\"></div>\n" +
             "                     <div class=\"child\">\n" +
             "                         <h5>Demo server phpMyAdmin</h5>\n" +
             "                         <p class=\"desc\">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text\n" +
             "                             ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n" +
             "                     </div>\n" +
             "                 </div>\n" +
             "                 <div class=\"gen1\">\n" +
             "                     <div class=\"child\">\n" +
             "                         <h5>General settings</h5>\n" +
             "                     </div>\n" +
             "                     <img src=\"img/s_passwd.png\"  alt=\"\">\n" +
             "                         <a href=\"#\">Change password</a>\n" +
             "                     <br>\n" +
             "                     <img src=\"img/s_asci.png\"  alt=\"\">\n" +
             "                     <a href=\"#\">Server connection collation</a>\n" +
             "                     <img src=\"img/b_docs.png\"  alt=\"\">\n" +
             "                     <select>\n" +
             "                         <option>\n" +
             "                             All that you need\n" +
             "                         </option>\n" +
             "                         <option>\n" +
             "                             All\n" +
             "                         </option>\n" +
             "                     </select>\n" +
             "                 </div>\n" +
             "                     <div class=\"gen2\">\n" +
             "                         <div class=\"child\">\n" +
             "                        <h5>Appearance Settings</h5>\n" +
             "                     </div>\n" +
             "                         <img src=\"img/s_lang.png\"  alt=\"\">\n" +
             "                         <a href=\"#\">Server connection collation</a>\n" +
             "                         <img src=\"img/b_docs.png\"  alt=\"\">\n" +
             "                         <select>\n" +
             "                             <option>\n" +
             "                                 Language\n" +
             "                             </option>\n" +
             "                             <option>\n" +
             "                                 English\n" +
             "                             </option>\n" +
             "                             <option>\n" +
             "                                 Russian\n" +
             "                             </option>\n" +
             "                         </select>\n" +
             "                         <br>\n" +
             "                         <img src=\"img/s_theme.png\" alt=\"\">\n" +
             "                         <a href=\"#\">Theme:</a>\n" +
             "                         <select>\n" +
             "                             <option>\n" +
             "                                 Language\n" +
             "                             </option>\n" +
             "                             <option>\n" +
             "                                 English\n" +
             "                             </option>\n" +
             "                             <option>\n" +
             "                                 Russian\n" +
             "                             </option>\n" +
             "                         </select>\n" +
             "                         <br>\n" +
             "                             <li class=\"aa\"></li>\n" +
             "                             <select class=\"bbb\">\n" +
             "                                 <option>\n" +
             "                                     Font size\n" +
             "                                 </option>\n" +
             "                                 <option>\n" +
             "                                     All\n" +
             "                                 </option>\n" +
             "                             </select>\n" +
             "                         <br>\n" +
             "                         <img src=\"img/b_tblops.png\" alt=\"\">\n" +
             "                         <a href=\"#\">More settings</a>\n" +
             "                 </div>\n" +
             "                <div class=\"alert alert-primary\" role=\"alert\">\n" +
             "                    <img src=\"img/s_notice.png\" title=\"\" alt=\"\" class=\"icon ic_s_notice\"> <a href=\"/\">Демо-сервер phpMyAdmin</a>: Запущена Git ревизия <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/phpmyadmin/phpmyadmin/commit/ef7a121c84d8bdb4d045517b732cfad68231fb05\">RELEASE_5_0_0RC1-631-gef7a121c84</a> из ветки <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/phpmyadmin/phpmyadmin/tree/master\">master</a>.\n" +
             "                </div>\n" +
             "             </div>\n" +
             "\n" +
             "            <div class=\"col-4\">\n" +
             "                <div class=\"general\">\n" +
             "                        <div class=\"card mt-4\">\n" +
             "                            <div class=\"card-header\">\n" +
             "                                Server database            </div>\n" +
             "                            <div class=\"card-body\">\n" +
             "                                <ul>\n" +
             "                                    <li id=\"li_server_info\">\n" +
             "                                        Сервер:                phpMyAdmin demo - MySQL (192.168.30.23 via TCP/IP)\n" +
             "                                    </li>\n" +
             "                                    <li id=\"li_server_type\">\n" +
             "                                        Тип сервера:                MySQL\n" +
             "                                    </li>\n" +
             "                                    <li id=\"li_server_connection\">\n" +
             "                                        Соединение сервера:                <span class=\"caution\">SSL не используется</span> <a href=\"./url.php?url=https%3A%2F%2Fdocs.phpmyadmin.net%2Fen%2Flatest%2Fsetup.html%23ssl\" target=\"documentation\"><img src=\"img/b_docs.png\" title=\"Документация\" alt=\"Документация\" class=\"icon ic_b_help\"></a>\n" +
             "                                    </li>\n" +
             "                                    <li id=\"li_server_version\">\n" +
             "                                        Версия сервера:                8.0.18 - MySQL Community Server - GPL\n" +
             "                                    </li>\n" +
             "                                    <li id=\"li_mysql_proto\">\n" +
             "                                        Версия протокола:                10\n" +
             "                                    </li>\n" +
             "                                    <li id=\"li_user_info\">\n" +
             "                                        Пользователь:                root@192.168.30.20\n" +
             "                                    </li>\n" +
             "                                    <li id=\"li_mysql_charset\">\n" +
             "                                        Кодировка сервера:                <span lang=\"en\" dir=\"ltr\">\n" +
             "                  UTF-8 Unicode (utf8mb4)\n" +
             "                </span>\n" +
             "                                    </li>\n" +
             "                                </ul>\n" +
             "                            </div>\n" +
             "                        </div>\n" +
             "\n" +
             "                        <div class=\"card mt-4\">\n" +
             "                            <div class=\"card-header\">\n" +
             "                                Web server           </div>\n" +
             "                            <div class=\"card-body\">\n" +
             "                                <ul>\n" +
             "                                    <li id=\"li_web_server_software\">\n" +
             "                                        nginx/1.10.3\n" +
             "                                    </li>\n" +
             "                                    <li id=\"li_mysql_client_version\">\n" +
             "                                        Версия клиента базы данных:                  libmysql - mysqlnd 7.4.0\n" +
             "                                    </li>\n" +
             "                                    <li id=\"li_used_php_extension\">\n" +
             "                                        PHP расширение:                                      mysqli\n" +
             "                                        <a href=\"./url.php?url=https%3A%2F%2Fsecure.php.net%2Fmanual%2Fru%2Fbook.mysqli.php\" target=\"documentation\"><img src=\"img/b_docs.png\" title=\"Документация\" alt=\"Документация\" class=\"icon ic_b_help\"></a>\n" +
             "                                        curl\n" +
             "                                        <a href=\"./url.php?url=https%3A%2F%2Fsecure.php.net%2Fmanual%2Fru%2Fbook.curl.php\" target=\"documentation\"><img src=\"img/b_docs.png\" title=\"Документация\" alt=\"Документация\" class=\"icon ic_b_help\"></a>\n" +
             "                                        mbstring\n" +
             "                                        <a href=\"./url.php?url=https%3A%2F%2Fsecure.php.net%2Fmanual%2Fru%2Fbook.mbstring.php\" target=\"documentation\"><img src=\"img/b_docs.png\" title=\"Документация\" alt=\"Документация\" class=\"icon ic_b_help\"></a>\n" +
             "                                    </li>\n" +
             "                                    <li id=\"li_used_php_version\">\n" +
             "                                        Версия PHP:                  7.4.0\n" +
             "                                    </li>\n" +
             "                                </ul>\n" +
             "                            </div>\n" +
             "                        </div>\n" +
             "\n" +
             "                        <div class=\"card mt-4\">\n" +
             "                            <div class=\"card-header\">\n" +
             "                                phpMyAdmin\n" +
             "                            </div>\n" +
             "                            <div class=\"card-body\">\n" +
             "                                <ul>\n" +
             "                                    <li id=\"li_pma_version\" class=\"jsversioncheck\">\n" +
             "                                        Информация о версии:                <span class=\"version\">5.1.0-dev</span><span class=\"latest\">, последняя стабильная версия: <a href=\"https://www.phpmyadmin.net/files/4.9.2/\" class=\"disableAjax\">4.9.2</a></span></li><li id=\"li_pma_version_git\">\n" +
             "\n" +
             "                                    Git ревизия: <a href=\"./url.php?url=https%3A%2F%2Fgithub.com%2Fphpmyadmin%2Fphpmyadmin%2Fcommit%2F72ddaccdab9bc870e0296b09908333c218cee521\" rel=\"noopener noreferrer\" target=\"_blank\"><strong title=\"Merge pull request #15647 from gurrrung/15618\n" +
             "\n" +
             "fixed the font size\n" +
             "\n" +
             "fixes #15618\n" +
             "\n" +
             "earlier font-size:1em was used which was\n" +
             "being overrided by a default BS styling\n" +
             "reverted back to old styling by overriding\n" +
             "it.\n" +
             "\n" +
             "Closes #15645\">72ddacc</strong></a> из <a href=\"./url.php?url=https%3A%2F%2Fgithub.com%2Fphpmyadmin%2Fphpmyadmin%2Ftree%2Fmaster\" rel=\"noopener noreferrer\" target=\"_blank\">master</a> ветки,<br> отправлено Дек 15 2019 г., 15:40, <a href=\"mailto:noreply@github.com\">GitHub</a>, <br>создано Дек 15 2019 г., 15:40, <a href=\"mailto:mauricio@fauth.dev\">Maurício Meneghini Fauth</a>\n" +
             "                                </li>\n" +
             "                                    <li id=\"li_pma_docs\">\n" +
             "                                        <a href=\"./url.php?url=https%3A%2F%2Fdocs.phpmyadmin.net%2Fen%2Flatest%2Findex.html\" target=\"_blank\" rel=\"noopener noreferrer\">\n" +
             "                                            Документация                </a>\n" +
             "                                    </li>\n" +
             "                                    <li id=\"li_pma_homepage\">\n" +
             "                                        <a href=\"./url.php?url=https%3A%2F%2Fwww.phpmyadmin.net%2F\" target=\"_blank\" rel=\"noopener noreferrer\">\n" +
             "                                            Официальная страница phpMyAdmin                </a>\n" +
             "                                    </li>\n" +
             "                                    <li id=\"li_pma_contribute\">\n" +
             "                                        <a href=\"./url.php?url=https%3A%2F%2Fwww.phpmyadmin.net%2Fcontribute%2F\" target=\"_blank\" rel=\"noopener noreferrer\">\n" +
             "                                            Пожертвовать                </a>\n" +
             "                                    </li>\n" +
             "                                    <li id=\"li_pma_support\">\n" +
             "                                        <a href=\"./url.php?url=https%3A%2F%2Fwww.phpmyadmin.net%2Fsupport%2F\" target=\"_blank\" rel=\"noopener noreferrer\">\n" +
             "                                            Получить помощь                </a>\n" +
             "                                    </li>\n" +
             "                                    <li id=\"li_pma_changes\">\n" +
             "                                        <a href=\"index.php?route=/changelog\" target=\"_blank\">\n" +
             "                                            Список изменений                </a>\n" +
             "                                    </li>\n" +
             "                                    <li id=\"li_pma_license\">\n" +
             "                                        <a href=\"index.php?route=/license\" target=\"_blank\">\n" +
             "                                            Лицензия                </a>\n" +
             "                                    </li>\n" +
             "                                </ul>\n" +
             "                            </div>\n" +
             "                        </div>\n" +
             "\n" +
             "                    </div>\n" +
             "        </div>\n" +
             "        </div>\n" +
             "        </div>")
     }
else{
    console.log('hi');
}
}
var parent = document.getElementById('navigate');
$(document).ready(function() {
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
                img.setAttribute('class', 'home');
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
        error:function(xhr,status,error) {
            var ttt=document.createElement('p');
            ttt.innerText='you cant enter to your page';
            parent.appendChild(ttt);
    }
    });
    });
var all=document.getElementById('all');
$(document).ready(function(){
    $.ajax({url: "ajax/aside.json",
        dataType:"json",
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
                ah.setAttribute('href', i.href);
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
                ah1.setAttribute('href', i.secondHref);
                ah1.setAttribute('onclick', i.onclick);
                $(ah1).text(i.secondName);
                $(ah1).appendTo(p1);
                $(inner1).appendTo(col);
                var inner2 = (document.createElement('div'));
                inner2.setAttribute('id', i.secondId);
                inner2.setAttribute('class', i.inner);
                $(inner2).appendTo(inner1);
                var a2 = (document.createElement('a'));
                $(a2).text(i.thirdName);
                $(a2).appendTo(inner2);
                var a3 = (document.createElement('a'));
                a3.setAttribute('id', i.thirdId);
                a3.setAttribute('onclick', i.onclick);
                $(a3).appendTo(inner2);
            }

        },
        error:function(xhr,status,error) {
            var ddt=document.createElement('p');
            ddt.innerText='you cant enter to your page';
            all.appendChild(ddt);
        }
});
});
var nnn=document.getElementById('nnn');
nnn.style.display="none";
$(document).ready(function () {
    $.ajax({
        url: "ajax/table.json",
        dataType: "json",
        success: function (data) {
            var table = document.createElement('table');
            var thead = document.createElement('thead');
            $(thead).appendTo(table);
            var tbody=document.createElement('tbody');
            $(tbody).appendTo(table);
            for (var i of data.tableArr) {
                var trh=document.createElement('tr');
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
                var td1=document.createElement('td');
                $(td1).appendTo(tr);
                var a1=document.createElement('a');
                $(a1).text(i.secTitle);
                $(a1).appendTo(td);
                var a2=document.createElement('a');
                $(a2).text(i.secondName);
                $(a2).appendTo(td1);
                var input = document.createElement('input');
                $(input).appendTo(td);
                input.setAttribute('type', i.type);
                var img = document.createElement('img');
                $(img).appendTo(td);
                img.src = i.img;
            }
            $(table).appendTo(nnn);
        }
    });
});
var ddd=document.getElementById('ddd');
ddd.style.display="none";
$(document).ready(function () {
    $.ajax({
        url: "ajax/table2.json",
        dataType: "json",
        success: function (data) {
            var table = document.createElement('table');
            var thead = document.createElement('thead');
            $(thead).appendTo(table);
            var tbody=document.createElement('tbody');
            $(tbody).appendTo(table);
            for (var i of data.Arr) {
                var trh=document.createElement('tr');
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
                var td1=document.createElement('td');
                $(td1).appendTo(tr);
                var a1=document.createElement('a');
                $(a1).text(i.secTitle);
                $(a1).appendTo(td);
                var a2=document.createElement('a');
                $(a2).text(i.secondName);
                $(a2).appendTo(td1);
                var input = document.createElement('input');
                $(input).appendTo(td);
                input.setAttribute('type', i.type);
                var img = document.createElement('img');
                $(img).appendTo(td);
                img.src = i.img;
            }
            $(table).appendTo(ddd);
        }
    });
});
function switchVisible() {
    if (document.getElementById('Div1')) {

        if (document.getElementById('Div1').style.display == 'none') {
            document.getElementById('Div1').style.display = 'block';
            document.getElementById('Div2').style.display = 'none';
        }
        else {
            document.getElementById('Div1').style.display = 'none';
            document.getElementById('Div2').style.display = 'block';
        }
    }
}