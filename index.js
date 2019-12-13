function myFunction(x) {
    if (x === 0) {
        (document.getElementById('general').innerHTML = " <div id=\"general\">\n" +
            "        <div class=\"row\">\n" +
            "            <div class=\"col-8\">\n" +
            "                 <div class=\"gen\">\n" +
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
            "                     <img src=\"img/s_passwd.png\"  alt=\"\" width=\"16px\" height=\"16px\">\n" +
            "                         <a href=\"#\">Change password</a>\n" +
            "                     <br>\n" +
            "                     <img src=\"img/s_asci.png\"  alt=\"\" width=\"16px\" height=\"16px\">\n" +
            "                     <a href=\"#\">Server connection collation</a>\n" +
            "                     <img src=\"img/b_docs.png\"  alt=\"\" width=\"16px\" height=\"16px\">\n" +
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
            "                         <img src=\"img/s_lang.png\"  alt=\"\" width=\"16px\" height=\"16px\">\n" +
            "                         <a href=\"#\">Server connection collation</a>\n" +
            "                         <img src=\"img/b_docs.png\"  alt=\"\" width=\"16px\" height=\"16px\">\n" +
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
            "                         <img src=\"img/s_theme.png\" alt=\"\" width=\"16px\" height=\"16px\">\n" +
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
            "                         <img src=\"img/b_tblops.png\" alt=\"\" width=\"16px\" height=\"16px\">\n" +
            "                         <a href=\"#\">More settings</a>\n" +
            "                 </div>\n" +
            "             </div>\n" +
            "            <div class=\"col-4\">\n" +
            "                <div class=\"general\">\n" +
            "                        <div class=\"gen2\">\n" +
            "                            <div class=\"child\">\n" +
            "                                <h5>Database server</h5>\n" +
            "                            </div>\n" +
            "                            <ul>\n" +
            "                                <li>Version information</li>\n" +
            "                                <li>Version information</li>\n" +
            "                                <li>Version information</li>\n" +
            "                                <li>Version information</li>\n" +
            "                                <li>Version information</li>\n" +
            "                                <li>Version information</li>\n" +
            "                            </ul>\n" +
            "                    </div>\n" +
            "                        <div class=\"gen2\">\n" +
            "                            <div class=\"child\">\n" +
            "                                <h5>Web server</h5>\n" +
            "                            </div>\n" +
            "                            <ul>\n" +
            "                                <li>Version information</li>\n" +
            "                                <li>Version information</li>\n" +
            "                                <li>Version information</li>\n" +
            "                                <li>Version information</li>\n" +
            "                                <li>Version information</li>\n" +
            "                                <li>Version information</li>\n" +
            "\n" +
            "                            </ul>\n" +
            "                    </div>\n" +
            "                        <div class=\"gen2\">\n" +
            "                            <div class=\"child\">\n" +
            "                                <h5>phpMyAdmin</h5>\n" +
            "                            </div>\n" +
            "                            <ul>\n" +
            "                                <li>Version information</li>\n" +
            "                                <li>Version information</li>\n" +
            "                                <li>Version information</li>\n" +
            "                                <li>Version information</li>\n" +
            "                                <li>Version information</li>\n" +
            "                                <li>Version information</li>\n" +
            "\n" +
            "                            </ul>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "        </div>\n" +
            "        </div>\n" +
            "        </div>")

    }
    else if (x === 2) {
        $(".remove").remove();
        $(document).ready(function () {
            $.ajax({
                url: "ajax/table.json",
                dataType: "json",
                success: function (data) {
                    for (var i of data.tableArr) {
                        var table = document.createElement('table');
                        var th = document.createElement('th');
                        var a = document.createElement('a');
                        $(a).text(i.name);
                        $(a).appendTo(th);
                        $(th).appendTo(table);
                        var tr = document.createElement('tr');
                        $(tr).appendTo(table);
                        var td = document.createElement('td');
                        $(td).text(i.titleSec);
                        $(td).appendTo(tr);
                        var input = document.createElement('input');
                        input.setAttribute('type', i.type);
                        $(input).appendTo(td);
                        var img = document.createElement('img');
                        img.src = i.img;
                        $(img).appendTo(td);

                    }
                }
            });
        });

}
    else if (x === 3) {
        document.getElementById('general').innerHTML = "<table id=\"structureTable\" class=\"data\">Table3\n" +
            "            <thead>\n" +
            "            <tr>\n" +
            "                <th class=\"print_ignore\"></th>\n" +
            "                <th><a href=\"index.php?route=/database/structure&amp;db=information_schema&amp;pos=0&amp;sort=table&amp;sort_order=DESC\" title=\"Отсортировать\">Таблица </a></th>\n" +
            "\n" +
            "                <th colspan=\"4\" class=\"print_ignore\">\n" +
            "                    Действие</th>\n" +
            "                <th>\n" +
            "                    <a href=\"index.php?route=/database/structure&amp;db=information_schema&amp;pos=0&amp;sort=records&amp;sort_order=DESC\" title=\"Отсортировать\">Строки</a>\n" +
            "                </th>\n" +
            "                <th><a href=\"index.php?route=/database/structure&amp;db=information_schema&amp;pos=0&amp;sort=type&amp;sort_order=ASC\" title=\"Отсортировать\">Тип</a></th>\n" +
            "                <th><a href=\"index.php?route=/database/structure&amp;db=information_schema&amp;pos=0&amp;sort=collation&amp;sort_order=ASC\" title=\"Отсортировать\">Сравнение</a></th>\n" +
            "            </tr>\n" +
            "            </thead>\n" +
            "            <thbody>\n" +
            "            <tr id=\"row_tbl_1\" class=\"is_view\" data-filter-row=\"CHARACTER_SETS\">\n" +
            "                <td class=\"text-center print_ignore\">\n" +
            "                    <input type=\"checkbox\" name=\"selected_tbl[]\" class=\"checkall\" value=\"CHARACTER_SETS\" id=\"checkbox_tbl_1\">\n" +
            "                </td>\n" +
            "                <th>\n" +
            "                    <a href=\"index.php?route=/sql&amp;db=information_schema&amp;table=CHARACTER_SETS&amp;pos=0\" title=\"\">\n" +
            "                        CHARACTER_SETS\n" +
            "                    </a>\n" +
            "                </th>\n" +
            "                <td class=\"text-center print_ignore\">\n" +
            "                    <a id=\"7db57eec4b97d698ee5050078fd74dee_favorite_anchorr\" class=\"ajax favorite_table_anchor\" href=\"index.php?route=/database/structure/favorite-table&amp;db=information_schema&amp;ajax_request=1&amp;favorite_table=CHARACTER_SETS&amp;add_favorite=1\" title=\"Добавить в Избранное\" data-favtargets=\"6a7169e432a959576d70fee96ae17555\">\n" +
            "                        <span class=\"nowrap\"><img src=\"img/b_no_favorite.png\" title=\"\" alt=\"\" class=\"icon ic_b_no_favorite\">&nbsp;</span>\n" +
            "                    </a>\n" +
            "                </td>\n" +
            "                <td class=\"text-center print_ignore\">\n" +
            "                    <a href=\"index.php?route=/sql&amp;db=information_schema&amp;table=CHARACTER_SETS&amp;pos=0\">\n" +
            "                        <span class=\"nowrap\"><img src=\"img/b_browse.png\" title=\"Обзор\"  class=\"icon ic_b_browse\">&nbsp;Обзор</span>\n" +
            "                    </a>\n" +
            "                </td>\n" +
            "                <td class=\"text-center print_ignore\">\n" +
            "                    <a href=\"index.php?route=/table/structure&amp;db=information_schema&amp;table=CHARACTER_SETS\">\n" +
            "                        <span class=\"nowrap\"><img src=\"img/b_props.png\" title=\"Структура\"  class=\"icon ic_b_props\">&nbsp;Структура</span>\n" +
            "                    </a>\n" +
            "                </td>\n" +
            "                <td class=\"text-center print_ignore\">\n" +
            "                    <a href=\"index.php?route=/table/search&amp;db=information_schema&amp;table=CHARACTER_SETS\">\n" +
            "                        <span class=\"nowrap\"><img src=\"img/b_select.png\" title=\"Поиск\"  class=\"icon ic_b_select\">&nbsp;Поиск</span>\n" +
            "                    </a>\n" +
            "                </td>\n" +
            "                <td class=\"value tbl_rows\" data-table=\"CHARACTER_SETS\">\n" +
            "                    <a href=\"index.php?route=/database/structure/real-row-count&amp;ajax_request=1&amp;db=information_schema&amp;table=CHARACTER_SETS\" class=\"ajax real_row_count\">\n" +
            "                        <bdi>\n" +
            "                            ~0\n" +
            "                        </bdi>\n" +
            "                    </a>\n" +
            "                    <span class=\"pma_hint\"><img src=\"img/b_help.png\" title=\"\" alt=\"\" class=\"icon ic_b_help\"><span class=\"hide\"><a href=\"./url.php?url=https%3A%2F%2Fdocs.phpmyadmin.net%2Fen%2Flatest%2Fconfig.html%23cfg_MaxExactCountViews\" target=\"documentation\"></a></span></span>\n" +
            "                </td>\n" +
            "\n" +
            "                <td class=\"nowrap\">\n" +
            "                    Представление</td>\n" +
            "                <td class=\"nowrap\">\n" +
            "                </td>\n" +
            "            </tr>\n" +
            "            <tr id=\"row_tbl_2\" class=\"is_view\" data-filter-row=\"CHARACTER_SETS\">\n" +
            "                <td class=\"text-center print_ignore\">\n" +
            "                    <input type=\"checkbox\" name=\"selected_tbl[]\" class=\"checkall\" value=\"CHARACTER_SETS\" id=\"checkbo_tbl_1\">\n" +
            "                </td>\n" +
            "                <th>\n" +
            "                    <a href=\"index.php?route=/sql&amp;db=information_schema&amp;table=CHARACTER_SETS&amp;pos=0\" title=\"\">\n" +
            "                        CHARACTER_SETS\n" +
            "                    </a>\n" +
            "                </th>\n" +
            "                <td class=\"text-center print_ignore\">\n" +
            "                    <a id=\"7db57eec4b97d698ee5050078fd74dee_favorite_ancho\" class=\"ajax favorite_table_anchor\" href=\"index.php?route=/database/structure/favorite-table&amp;db=information_schema&amp;ajax_request=1&amp;favorite_table=CHARACTER_SETS&amp;add_favorite=1\" title=\"Добавить в Избранное\" data-favtargets=\"6a7169e432a959576d70fee96ae17555\">\n" +
            "                        <span class=\"nowrap\"><img src=\"img/b_no_favorite.png\" title=\"\" alt=\"\" class=\"icon ic_b_no_favorite\">&nbsp;</span>\n" +
            "                    </a>\n" +
            "                </td>\n" +
            "                <td class=\"text-center print_ignore\">\n" +
            "                    <a href=\"index.php?route=/sql&amp;db=information_schema&amp;table=CHARACTER_SETS&amp;pos=0\">\n" +
            "                        <span class=\"nowrap\"><img src=\"img/b_browse.png\" title=\"Обзор\"  class=\"icon ic_b_browse\">&nbsp;Обзор</span>\n" +
            "                    </a>\n" +
            "                </td>\n" +
            "                <td class=\"text-center print_ignore\">\n" +
            "                    <a href=\"index.php?route=/table/structure&amp;db=information_schema&amp;table=CHARACTER_SETS\">\n" +
            "                        <span class=\"nowrap\"><img src=\"img/b_props.png\" title=\"Структура\"  class=\"icon ic_b_props\">&nbsp;Структура</span>\n" +
            "                    </a>\n" +
            "                </td>\n" +
            "                <td class=\"text-center print_ignore\">\n" +
            "                    <a href=\"index.php?route=/table/search&amp;db=information_schema&amp;table=CHARACTER_SETS\">\n" +
            "                        <span class=\"nowrap\"><img src=\"img/b_select.png\" title=\"Поиск\"  class=\"icon ic_b_select\">&nbsp;Поиск</span>\n" +
            "                    </a>\n" +
            "                </td>\n" +
            "                <td class=\"value tbl_rows\" data-table=\"CHARACTER_SETS\">\n" +
            "                    <a href=\"index.php?route=/database/structure/real-row-count&amp;ajax_request=1&amp;db=information_schema&amp;table=CHARACTER_SETS\" class=\"ajax real_row_count\">\n" +
            "                        <bdi>\n" +
            "                            ~0\n" +
            "                        </bdi>\n" +
            "                    </a>\n" +
            "                    <span class=\"pma_hint\"><img src=\"img/b_help.png\" title=\"\" alt=\"\" class=\"icon ic_b_help\"><span class=\"hide\"><a href=\"./url.php?url=https%3A%2F%2Fdocs.phpmyadmin.net%2Fen%2Flatest%2Fconfig.html%23cfg_MaxExactCountViews\" target=\"documentation\"></a></span></span>\n" +
            "                </td>\n" +
            "\n" +
            "                <td class=\"nowrap\">\n" +
            "                    Представление</td>\n" +
            "                <td class=\"nowrap\">\n" +
            "                </td>\n" +
            "            </tr>\n" +
            "            <tr id=\"row_tbl_3\" class=\"is_view\" data-filter-row=\"CHARACTER_SETS\">\n" +
            "                <td class=\"text-center print_ignore\">\n" +
            "                    <input type=\"checkbox\" name=\"selected_tbl[]\" class=\"checkall\" value=\"CHARACTER_SETS\" id=\"checkbox_tb_1\">\n" +
            "                </td>\n" +
            "                <th>\n" +
            "                    <a href=\"index.php?route=/sql&amp;db=information_schema&amp;table=CHARACTER_SETS&amp;pos=0\" title=\"\">\n" +
            "                        CHARACTER_SETS\n" +
            "                    </a>\n" +
            "                </th>\n" +
            "                <td class=\"text-center print_ignore\">\n" +
            "                    <a id=\"7db57eec4b97d698ee5050078fd74dee_favorite_anchor\" class=\"ajax favorite_table_anchor\" href=\"index.php?route=/database/structure/favorite-table&amp;db=information_schema&amp;ajax_request=1&amp;favorite_table=CHARACTER_SETS&amp;add_favorite=1\" title=\"Добавить в Избранное\" data-favtargets=\"6a7169e432a959576d70fee96ae17555\">\n" +
            "                        <span class=\"nowrap\"><img src=\"img/b_no_favorite.png\" title=\"\" alt=\"\" class=\"icon ic_b_no_favorite\">&nbsp;</span>\n" +
            "                    </a>\n" +
            "                </td>\n" +
            "                <td class=\"text-center print_ignore\">\n" +
            "                    <a href=\"index.php?route=/sql&amp;db=information_schema&amp;table=CHARACTER_SETS&amp;pos=0\">\n" +
            "                        <span class=\"nowrap\"><img src=\"img/b_browse.png\" title=\"Обзор\"  class=\"icon ic_b_browse\">&nbsp;Обзор</span>\n" +
            "                    </a>\n" +
            "                </td>\n" +
            "                <td class=\"text-center print_ignore\">\n" +
            "                    <a href=\"index.php?route=/table/structure&amp;db=information_schema&amp;table=CHARACTER_SETS\">\n" +
            "                        <span class=\"nowrap\"><img src=\"img/b_props.png\" title=\"Структура\"  class=\"icon ic_b_props\">&nbsp;Структура</span>\n" +
            "                    </a>\n" +
            "                </td>\n" +
            "                <td class=\"text-center print_ignore\">\n" +
            "                    <a href=\"index.php?route=/table/search&amp;db=information_schema&amp;table=CHARACTER_SETS\">\n" +
            "                        <span class=\"nowrap\"><img src=\"img/b_select.png\" title=\"Поиск\"  class=\"icon ic_b_select\">&nbsp;Поиск</span>\n" +
            "                    </a>\n" +
            "                </td>\n" +
            "                <td class=\"value tbl_rows\" data-table=\"CHARACTER_SETS\">\n" +
            "                    <a href=\"index.php?route=/database/structure/real-row-count&amp;ajax_request=1&amp;db=information_schema&amp;table=CHARACTER_SETS\" class=\"ajax real_row_count\">\n" +
            "                        <bdi>\n" +
            "                            ~0\n" +
            "                        </bdi>\n" +
            "                    </a>\n" +
            "                    <span class=\"pma_hint\"><img src=\"img/b_help.png\" title=\"\" alt=\"\" class=\"icon ic_b_help\"><span class=\"hide\"><a href=\"./url.php?url=https%3A%2F%2Fdocs.phpmyadmin.net%2Fen%2Flatest%2Fconfig.html%23cfg_MaxExactCountViews\" target=\"documentation\"></a></span></span>\n" +
            "                </td>\n" +
            "\n" +
            "                <td class=\"nowrap\">\n" +
            "                    Представление</td>\n" +
            "                <td class=\"nowrap\">\n" +
            "                </td>\n" +
            "            </tr>\n" +
            "            </thbody>\n" +
            "        </table>"
    }
    else if (x === 5) {
        document.getElementById('general').innerHTML = "<table id=\"tabledatabases\" class=\"data\">\n" +
            "            <thead>\n" +
            "            <tr>\n" +
            "                <th></th>\n" +
            "                <th>\n" +
            "                    <a href=\"index.php?route=/server/databases&amp;statistics=0&amp;pos=0&amp;sort_by=SCHEMA_NAME&amp;sort_order=desc\">\n" +
            "                        База данных<img src=\"img/s_asc.png\" title=\"По возрастанию\"  class=\"icon ic_s_asc\">\n" +
            "                    </a>\n" +
            "                </th>\n" +
            "\n" +
            "                <th>\n" +
            "                    <a href=\"index.php?route=/server/databases&amp;statistics=0&amp;pos=0&amp;sort_by=DEFAULT_COLLATION_NAME&amp;sort_order=asc\">\n" +
            "                        Сравнение                                  </a>\n" +
            "                </th>\n" +
            "\n" +
            "\n" +
            "                <th>Репликация головного сервера</th>\n" +
            "\n" +
            "\n" +
            "                <th>Действие</th>\n" +
            "            </tr>\n" +
            "            </thead>\n" +
            "\n" +
            "            <tbody>\n" +
            "            <tr class=\"db-row\" data-filter-row=\"DB96\">\n" +
            "                <td class=\"tool\">\n" +
            "                    <input type=\"checkbox\" name=\"selected_dbs[]\" class=\"checkall\" title=\"db96\" value=\"db96\">\n" +
            "                </td>\n" +
            "\n" +
            "                <td class=\"name\">\n" +
            "                    <a href=\"index.php?route=/database/structure&amp;db=db96\" title=\"Перейти к базе данных 'db96'\">\n" +
            "                        db96\n" +
            "                    </a>\n" +
            "                </td>\n" +
            "\n" +
            "                <td class=\"value\">\n" +
            "                    <dfn title=\"Юникод (UCA 9.0.0), акценто-независимый, регистро-независимый\">\n" +
            "                        utf8mb4_0900_ai_ci\n" +
            "                    </dfn>\n" +
            "                </td>\n" +
            "\n" +
            "\n" +
            "                <td class=\"tool text-center\">\n" +
            "                    <span class=\"nowrap\"><img src=\"img/s_cancel.png\" title=\"Не реплицировано\"  class=\"icon ic_s_cancel\">&nbsp;Не реплицировано</span>\n" +
            "                </td>\n" +
            "\n" +
            "\n" +
            "                <td class=\"tool\">\n" +
            "                    <a class=\"server_databases\" data=\"`db96`\" href=\"index.php?route=/server/privileges&amp;db=db96&amp;checkprivsdb=db96\" title=\"Проверить привилегии для базы данных &quot;db96&quot;.\">\n" +
            "                        <span class=\"nowrap\"><img src=\"img/s_rights.png\" title=\"Проверить привилегии\" alt=\"Проверить привилегии\" class=\"icon ic_s_rights\">&nbsp;Проверить привилегии</span>\n" +
            "                    </a>\n" +
            "                </td>\n" +
            "            </tr>\n" +
            "            <tr class=\"db-row\" data-filter-row=\"DB96\">\n" +
            "                <td class=\"tool\">\n" +
            "                    <input type=\"checkbox\" name=\"selected_dbs[]\" class=\"checkall\" title=\"db96\" value=\"db96\">\n" +
            "                </td>\n" +
            "\n" +
            "                <td class=\"name\">\n" +
            "                    <a href=\"index.php?route=/database/structure&amp;db=db96\" title=\"Перейти к базе данных 'db96'\">\n" +
            "                        db96\n" +
            "                    </a>\n" +
            "                </td>\n" +
            "\n" +
            "                <td class=\"value\">\n" +
            "                    <dfn title=\"Юникод (UCA 9.0.0), акценто-независимый, регистро-независимый\">\n" +
            "                        utf8mb4_0900_ai_ci\n" +
            "                    </dfn>\n" +
            "                </td>\n" +
            "\n" +
            "\n" +
            "                <td class=\"tool text-center\">\n" +
            "                    <span class=\"nowrap\"><img src=\"img/s_cancel.png\" title=\"Не реплицировано\"  class=\"icon ic_s_cancel\">&nbsp;Не реплицировано</span>\n" +
            "                </td>\n" +
            "\n" +
            "\n" +
            "                <td class=\"tool\">\n" +
            "                    <a class=\"server_databases\" data=\"`db96`\" href=\"index.php?route=/server/privileges&amp;db=db96&amp;checkprivsdb=db96\" title=\"Проверить привилегии для базы данных &quot;db96&quot;.\">\n" +
            "                        <span class=\"nowrap\"><img src=\"img/s_rights.png\" title=\"Проверить привилегии\" alt=\"Проверить привилегии\" class=\"icon ic_s_rights\">&nbsp;Проверить привилегии</span>\n" +
            "                    </a>\n" +
            "                </td>\n" +
            "            </tr>\n" +
            "            <tr class=\"db-row\" data-filter-row=\"DB96\">\n" +
            "                <td class=\"tool\">\n" +
            "                    <input type=\"checkbox\" name=\"selected_dbs[]\" class=\"checkall\" title=\"db96\" value=\"db96\">\n" +
            "                </td>\n" +
            "\n" +
            "                <td class=\"name\">\n" +
            "                    <a href=\"index.php?route=/database/structure&amp;db=db96\" title=\"Перейти к базе данных 'db96'\">\n" +
            "                        db96\n" +
            "                    </a>\n" +
            "                </td>\n" +
            "\n" +
            "                <td class=\"value\">\n" +
            "                    <dfn title=\"Юникод (UCA 9.0.0), акценто-независимый, регистро-независимый\">\n" +
            "                        utf8mb4_0900_ai_ci\n" +
            "                    </dfn>\n" +
            "                </td>\n" +
            "\n" +
            "\n" +
            "                <td class=\"tool text-center\">\n" +
            "                    <span class=\"nowrap\"><img src=\"img/s_cancel.png\" title=\"Не реплицировано\"  class=\"icon ic_s_cancel\">&nbsp;Не реплицировано</span>\n" +
            "                </td>\n" +
            "\n" +
            "\n" +
            "                <td class=\"tool\">\n" +
            "                    <a class=\"server_databases\" data=\"`db96`\" href=\"index.php?route=/server/privileges&amp;db=db96&amp;checkprivsdb=db96\" title=\"Проверить привилегии для базы данных &quot;db96&quot;.\">\n" +
            "                        <span class=\"nowrap\"><img src=\"img/s_rights.png\" title=\"Проверить привилегии\" alt=\"Проверить привилегии\" class=\"icon ic_s_rights\">&nbsp;Проверить привилегии</span>\n" +
            "                    </a>\n" +
            "                </td>\n" +
            "            </tr>\n" +
            "            <tr class=\"db-row\" data-filter-row=\"DB96\">\n" +
            "                <td class=\"tool\">\n" +
            "                    <input type=\"checkbox\" name=\"selected_dbs[]\" class=\"checkall\" title=\"db96\" value=\"db96\">\n" +
            "                </td>\n" +
            "\n" +
            "                <td class=\"name\">\n" +
            "                    <a href=\"index.php?route=/database/structure&amp;db=db96\" title=\"Перейти к базе данных 'db96'\">\n" +
            "                        db96\n" +
            "                    </a>\n" +
            "                </td>\n" +
            "\n" +
            "                <td class=\"value\">\n" +
            "                    <dfn title=\"Юникод (UCA 9.0.0), акценто-независимый, регистро-независимый\">\n" +
            "                        utf8mb4_0900_ai_ci\n" +
            "                    </dfn>\n" +
            "                </td>\n" +
            "\n" +
            "\n" +
            "                <td class=\"tool text-center\">\n" +
            "                    <span class=\"nowrap\"><img src=\"img/s_cancel.png\" title=\"Не реплицировано\"  class=\"icon ic_s_cancel\">&nbsp;Не реплицировано</span>\n" +
            "                </td>\n" +
            "\n" +
            "\n" +
            "                <td class=\"tool\">\n" +
            "                    <a class=\"server_databases\" data=\"`db96`\" href=\"index.php?route=/server/privileges&amp;db=db96&amp;checkprivsdb=db96\" title=\"Проверить привилегии для базы данных &quot;db96&quot;.\">\n" +
            "                        <span class=\"nowrap\"><img src=\"img/s_rights.png\" title=\"Проверить привилегии\" alt=\"Проверить привилегии\" class=\"icon ic_s_rights\">&nbsp;Проверить привилегии</span>\n" +
            "                    </a>\n" +
            "                </td>\n" +
            "            </tr>\n" +
            "            <tr class=\"db-row\" data-filter-row=\"DB96\">\n" +
            "                <td class=\"tool\">\n" +
            "                    <input type=\"checkbox\" name=\"selected_dbs[]\" class=\"checkall\" title=\"db96\" value=\"db96\">\n" +
            "                </td>\n" +
            "\n" +
            "                <td class=\"name\">\n" +
            "                    <a href=\"index.php?route=/database/structure&amp;db=db96\" title=\"Перейти к базе данных 'db96'\">\n" +
            "                        db96\n" +
            "                    </a>\n" +
            "                </td>\n" +
            "\n" +
            "                <td class=\"value\">\n" +
            "                    <dfn title=\"Юникод (UCA 9.0.0), акценто-независимый, регистро-независимый\">\n" +
            "                        utf8mb4_0900_ai_ci\n" +
            "                    </dfn>\n" +
            "                </td>\n" +
            "\n" +
            "\n" +
            "                <td class=\"tool text-center\">\n" +
            "                    <span class=\"nowrap\"><img src=\"img/s_cancel.png\" title=\"Не реплицировано\"  class=\"icon ic_s_cancel\">&nbsp;Не реплицировано</span>\n" +
            "                </td>\n" +
            "\n" +
            "\n" +
            "                <td class=\"tool\">\n" +
            "                    <a class=\"server_databases\" data=\"`db96`\" href=\"index.php?route=/server/privileges&amp;db=db96&amp;checkprivsdb=db96\" title=\"Проверить привилегии для базы данных &quot;db96&quot;.\">\n" +
            "                        <span class=\"nowrap\"><img src=\"img/s_rights.png\" title=\"Проверить привилегии\" alt=\"Проверить привилегии\" class=\"icon ic_s_rights\">&nbsp;Проверить привилегии</span>\n" +
            "                    </a>\n" +
            "                </td>\n" +
            "            </tr>\n" +
            "            <tr class=\"db-row\" data-filter-row=\"DB96\">\n" +
            "                <td class=\"tool\">\n" +
            "                    <input type=\"checkbox\" name=\"selected_dbs[]\" class=\"checkall\" title=\"db96\" value=\"db96\">\n" +
            "                </td>\n" +
            "\n" +
            "                <td class=\"name\">\n" +
            "                    <a href=\"index.php?route=/database/structure&amp;db=db96\" title=\"Перейти к базе данных 'db96'\">\n" +
            "                        db96\n" +
            "                    </a>\n" +
            "                </td>\n" +
            "\n" +
            "                <td class=\"value\">\n" +
            "                    <dfn title=\"Юникод (UCA 9.0.0), акценто-независимый, регистро-независимый\">\n" +
            "                        utf8mb4_0900_ai_ci\n" +
            "                    </dfn>\n" +
            "                </td>\n" +
            "\n" +
            "\n" +
            "                <td class=\"tool text-center\">\n" +
            "                    <span class=\"nowrap\"><img src=\"img/s_cancel.png\" title=\"Не реплицировано\"  class=\"icon ic_s_cancel\">&nbsp;Не реплицировано</span>\n" +
            "                </td>\n" +
            "\n" +
            "\n" +
            "                <td class=\"tool\">\n" +
            "                    <a class=\"server_databases\" data=\"`db96`\" href=\"index.php?route=/server/privileges&amp;db=db96&amp;checkprivsdb=db96\" title=\"Проверить привилегии для базы данных &quot;db96&quot;.\">\n" +
            "                        <span class=\"nowrap\"><img src=\"img/s_rights.png\" title=\"Проверить привилегии\" alt=\"Проверить привилегии\" class=\"icon ic_s_rights\">&nbsp;Проверить привилегии</span>\n" +
            "                    </a>\n" +
            "                </td>\n" +
            "            </tr>\n" +
            "            <tr class=\"db-row\" data-filter-row=\"DB96\">\n" +
            "                <td class=\"tool\">\n" +
            "                    <input type=\"checkbox\" name=\"selected_dbs[]\" class=\"checkall\" title=\"db96\" value=\"db96\">\n" +
            "                </td>\n" +
            "\n" +
            "                <td class=\"name\">\n" +
            "                    <a href=\"index.php?route=/database/structure&amp;db=db96\" title=\"Перейти к базе данных 'db96'\">\n" +
            "                        db96\n" +
            "                    </a>\n" +
            "                </td>\n" +
            "\n" +
            "                <td class=\"value\">\n" +
            "                    <dfn title=\"Юникод (UCA 9.0.0), акценто-независимый, регистро-независимый\">\n" +
            "                        utf8mb4_0900_ai_ci\n" +
            "                    </dfn>\n" +
            "                </td>\n" +
            "\n" +
            "\n" +
            "                <td class=\"tool text-center\">\n" +
            "                    <span class=\"nowrap\"><img src=\"img/s_cancel.png\" title=\"Не реплицировано\"  class=\"icon ic_s_cancel\">&nbsp;Не реплицировано</span>\n" +
            "                </td>\n" +
            "\n" +
            "\n" +
            "                <td class=\"tool\">\n" +
            "                    <a class=\"server_databases\" data=\"`db96`\" href=\"index.php?route=/server/privileges&amp;db=db96&amp;checkprivsdb=db96\" title=\"Проверить привилегии для базы данных &quot;db96&quot;.\">\n" +
            "                        <span class=\"nowrap\"><img src=\"img/s_rights.png\" title=\"Проверить привилегии\" alt=\"Проверить привилегии\" class=\"icon ic_s_rights\">&nbsp;Проверить привилегии</span>\n" +
            "                    </a>\n" +
            "                </td>\n" +
            "            </tr>\n" +
            "            <tr class=\"db-row\" data-filter-row=\"DB96\">\n" +
            "                <td class=\"tool\">\n" +
            "                    <input type=\"checkbox\" name=\"selected_dbs[]\" class=\"checkall\" title=\"db96\" value=\"db96\">\n" +
            "                </td>\n" +
            "\n" +
            "                <td class=\"name\">\n" +
            "                    <a href=\"index.php?route=/database/structure&amp;db=db96\" title=\"Перейти к базе данных 'db96'\">\n" +
            "                        db96\n" +
            "                    </a>\n" +
            "                </td>\n" +
            "\n" +
            "                <td class=\"value\">\n" +
            "                    <dfn title=\"Юникод (UCA 9.0.0), акценто-независимый, регистро-независимый\">\n" +
            "                        utf8mb4_0900_ai_ci\n" +
            "                    </dfn>\n" +
            "                </td>\n" +
            "\n" +
            "\n" +
            "                <td class=\"tool text-center\">\n" +
            "                    <span class=\"nowrap\"><img src=\"img/s_cancel.png\" title=\"Не реплицировано\"  class=\"icon ic_s_cancel\">&nbsp;Не реплицировано</span>\n" +
            "                </td>\n" +
            "\n" +
            "\n" +
            "                <td class=\"tool\">\n" +
            "                    <a class=\"server_databases\" data=\"`db96`\" href=\"index.php?route=/server/privileges&amp;db=db96&amp;checkprivsdb=db96\" title=\"Проверить привилегии для базы данных &quot;db96&quot;.\">\n" +
            "                        <span class=\"nowrap\"><img src=\"img/s_rights.png\" title=\"Проверить привилегии\" alt=\"Проверить привилегии\" class=\"icon ic_s_rights\">&nbsp;Проверить привилегии</span>\n" +
            "                    </a>\n" +
            "                </td>\n" +
            "            </tr>\n" +
            "            <tr class=\"db-row\" data-filter-row=\"DB96\">\n" +
            "                <td class=\"tool\">\n" +
            "                    <input type=\"checkbox\" name=\"selected_dbs[]\" class=\"checkall\" title=\"db96\" value=\"db96\">\n" +
            "                </td>\n" +
            "\n" +
            "                <td class=\"name\">\n" +
            "                    <a href=\"index.php?route=/database/structure&amp;db=db96\" title=\"Перейти к базе данных 'db96'\">\n" +
            "                        db96\n" +
            "                    </a>\n" +
            "                </td>\n" +
            "\n" +
            "                <td class=\"value\">\n" +
            "                    <dfn title=\"Юникод (UCA 9.0.0), акценто-независимый, регистро-независимый\">\n" +
            "                        utf8mb4_0900_ai_ci\n" +
            "                    </dfn>\n" +
            "                </td>\n" +
            "\n" +
            "\n" +
            "                <td class=\"tool text-center\">\n" +
            "                    <span class=\"nowrap\"><img src=\"img/s_cancel.png\" title=\"Не реплицировано\"  class=\"icon ic_s_cancel\">&nbsp;Не реплицировано</span>\n" +
            "                </td>\n" +
            "\n" +
            "\n" +
            "                <td class=\"tool\">\n" +
            "                    <a class=\"server_databases\" data=\"`db96`\" href=\"index.php?route=/server/privileges&amp;db=db96&amp;checkprivsdb=db96\" title=\"Проверить привилегии для базы данных &quot;db96&quot;.\">\n" +
            "                        <span class=\"nowrap\"><img src=\"img/s_rights.png\" title=\"Проверить привилегии\" alt=\"Проверить привилегии\" class=\"icon ic_s_rights\">&nbsp;Проверить привилегии</span>\n" +
            "                    </a>\n" +
            "                </td>\n" +
            "            </tr>\n" +
            "\n" +
            "            </tbody>\n" +
            "        </table>";
    }
    else if (x === 4) {
        (document.getElementById('general').innerHTML = " <div id=\"general\">\n" +
            "        <div class=\"row\">\n" +
            "            <div class=\"col-8\">\n" +
            "                 <div class=\"gen\">\n" +
            "                     <div class=\"child\">\n" +
            "                         <h3>Demo server phpMyAdmin</h3>\n" +
            "                         <p class=\"desc\">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text\n" +
            "                             ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n" +
            "                     </div>\n" +
            "                 </div>\n" +
            "                 <div class=\"gen1\">\n" +
            "                     <div class=\"child\">\n" +
            "                         <h3>General settings</h3>\n" +
            "                     </div>\n" +
            "                     <img src=\"img/s_passwd.png\"  alt=\"\" width=\"16px\" height=\"16px\">\n" +
            "                         <a href=\"#\">Change password</a>\n" +
            "                     <br>\n" +
            "                     <img src=\"img/s_asci.png\"  alt=\"\" width=\"16px\" height=\"16px\">\n" +
            "                     <a href=\"#\">Server connection collation</a>\n" +
            "                     <img src=\"img/b_docs.png\"  alt=\"\" width=\"16px\" height=\"16px\">\n" +
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
            "                        <h3>Appearance Settings</h3>\n" +
            "                     </div>\n" +
            "                         <img src=\"img/s_lang.png\"  alt=\"\" width=\"16px\" height=\"16px\">\n" +
            "                         <a href=\"#\">Server connection collation</a>\n" +
            "                         <img src=\"img/b_docs.png\"  alt=\"\" width=\"16px\" height=\"16px\">\n" +
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
            "                         <img src=\"img/s_theme.png\" alt=\"\" width=\"16px\" height=\"16px\">\n" +
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
            "                             <li></li>\n" +
            "                             <select class=\"bbb\">\n" +
            "                                 <option>\n" +
            "                                     Font size\n" +
            "                                 </option>\n" +
            "                                 <option>\n" +
            "                                     All\n" +
            "                                 </option>\n" +
            "                             </select>\n" +
            "                         <br>\n" +
            "                         <img src=\"img/b_tblops.png\" alt=\"\" width=\"16px\" height=\"16px\">\n" +
            "                         <a href=\"#\">More settings</a>\n" +
            "                 </div>\n" +
            "             </div>\n" +
            "            <div class=\"col-4\">\n" +
            "                <div class=\"general\">\n" +
            "                        <div class=\"gen2\">\n" +
            "                            <div class=\"child\">\n" +
            "                                <h3>Database server</h3>\n" +
            "                            </div>\n" +
            "                            <ul>\n" +
            "                                <li>Version information</li>\n" +
            "                                <li>Version information</li>\n" +
            "                                <li>Version information</li>\n" +
            "                                <li>Version information</li>\n" +
            "                                <li>Version information</li>\n" +
            "                                <li>Version information</li>\n" +
            "                            </ul>\n" +
            "                    </div>\n" +
            "                        <div class=\"gen2\">\n" +
            "                            <div class=\"child\">\n" +
            "                                <h3>Web server</h3>\n" +
            "                            </div>\n" +
            "                            <ul>\n" +
            "                                <li>Version information</li>\n" +
            "                                <li>Version information</li>\n" +
            "                                <li>Version information</li>\n" +
            "                                <li>Version information</li>\n" +
            "                                <li>Version information</li>\n" +
            "                                <li>Version information</li>\n" +
            "\n" +
            "                            </ul>\n" +
            "                    </div>\n" +
            "                        <div class=\"gen2\">\n" +
            "                            <div class=\"child\">\n" +
            "                                <h3>phpMyAdmin</h3>\n" +
            "                            </div>\n" +
            "                            <ul>\n" +
            "                                <li>Version information</li>\n" +
            "                                <li>Version information</li>\n" +
            "                                <li>Version information</li>\n" +
            "                                <li>Version information</li>\n" +
            "                                <li>Version information</li>\n" +
            "                                <li>Version information</li>\n" +
            "\n" +
            "                            </ul>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "        </div>\n" +
            "        </div>\n" +
            "        </div>")


    }
    else {
        document.getElementById('general').innerHTML ="<table id=\"structureTable\" class=\"data\">Table1\n" +
            "            <thead>\n" +
            "            <tr>\n" +
            "                <th class=\"print_ignore\"></th>\n" +
            "                <th><a href=\"index.php?route=/database/structure&amp;db=information_schema&amp;pos=0&amp;sort=table&amp;sort_order=DESC\" title=\"Отсортировать\">Таблица </a></th>\n" +
            "\n" +
            "                <th colspan=\"4\" class=\"print_ignore\">\n" +
            "                    Действие</th>\n" +
            "                <th>\n" +
            "                    <a href=\"index.php?route=/database/structure&amp;db=information_schema&amp;pos=0&amp;sort=records&amp;sort_order=DESC\" title=\"Отсортировать\">Строки</a>\n" +
            "                </th>\n" +
            "                <th><a href=\"index.php?route=/database/structure&amp;db=information_schema&amp;pos=0&amp;sort=type&amp;sort_order=ASC\" title=\"Отсортировать\">Тип</a></th>\n" +
            "                <th><a href=\"index.php?route=/database/structure&amp;db=information_schema&amp;pos=0&amp;sort=collation&amp;sort_order=ASC\" title=\"Отсортировать\">Сравнение</a></th>\n" +
            "            </tr>\n" +
            "            </thead>\n" +
            "            <thbody>\n" +
            "            <tr id=\"row_tbl_1\" class=\"is_view\" data-filter-row=\"CHARACTER_SETS\">\n" +
            "                <td class=\"text-center print_ignore\">\n" +
            "                    <input type=\"checkbox\" name=\"selected_tbl[]\" class=\"checkall\" value=\"CHARACTER_SETS\" id=\"chekbox_tbl_1\">\n" +
            "                </td>\n" +
            "                <th>\n" +
            "                    <a href=\"index.php?route=/sql&amp;db=information_schema&amp;table=CHARACTER_SETS&amp;pos=0\" title=\"\">\n" +
            "                        CHARACTER_SETS\n" +
            "                    </a>\n" +
            "                </th>\n" +
            "                <td class=\"text-center print_ignore\">\n" +
            "                    <a id=\"7db57eec4b97d698ee5050078fd74dee_favrite_anchorr\" class=\"ajax favorite_table_anchor\" href=\"index.php?route=/database/structure/favorite-table&amp;db=information_schema&amp;ajax_request=1&amp;favorite_table=CHARACTER_SETS&amp;add_favorite=1\" title=\"Добавить в Избранное\" data-favtargets=\"6a7169e432a959576d70fee96ae17555\">\n" +
            "                        <span class=\"nowrap\"><img src=\"img/b_no_favorite.png\" title=\"\" alt=\"\" class=\"icon ic_b_no_favorite\">&nbsp;</span>\n" +
            "                    </a>\n" +
            "                </td>\n" +
            "                <td class=\"text-center print_ignore\">\n" +
            "                    <a href=\"index.php?route=/sql&amp;db=information_schema&amp;table=CHARACTER_SETS&amp;pos=0\">\n" +
            "                        <span class=\"nowrap\"><img src=\"img/b_browse.png\" title=\"Обзор\"  class=\"icon ic_b_browse\">&nbsp;Обзор</span>\n" +
            "                    </a>\n" +
            "                </td>\n" +
            "                <td class=\"text-center print_ignore\">\n" +
            "                    <a href=\"index.php?route=/table/structure&amp;db=information_schema&amp;table=CHARACTER_SETS\">\n" +
            "                        <span class=\"nowrap\"><img src=\"img/b_props.png\" title=\"Структура\"  class=\"icon ic_b_props\">&nbsp;Структура</span>\n" +
            "                    </a>\n" +
            "                </td>\n" +
            "                <td class=\"text-center print_ignore\">\n" +
            "                    <a href=\"index.php?route=/table/search&amp;db=information_schema&amp;table=CHARACTER_SETS\">\n" +
            "                        <span class=\"nowrap\"><img src=\"img/b_select.png\" title=\"Поиск\"  class=\"icon ic_b_select\">&nbsp;Поиск</span>\n" +
            "                    </a>\n" +
            "                </td>\n" +
            "                <td class=\"value tbl_rows\" data-table=\"CHARACTER_SETS\">\n" +
            "                    <a href=\"index.php?route=/database/structure/real-row-count&amp;ajax_request=1&amp;db=information_schema&amp;table=CHARACTER_SETS\" class=\"ajax real_row_count\">\n" +
            "                        <bdi>\n" +
            "                            ~0\n" +
            "                        </bdi>\n" +
            "                    </a>\n" +
            "                    <span class=\"pma_hint\"><img src=\"img/b_help.png\" title=\"\" alt=\"\" class=\"icon ic_b_help\"><span class=\"hide\"><a href=\"./url.php?url=https%3A%2F%2Fdocs.phpmyadmin.net%2Fen%2Flatest%2Fconfig.html%23cfg_MaxExactCountViews\" target=\"documentation\"></a></span></span>\n" +
            "                </td>\n" +
            "\n" +
            "                <td class=\"nowrap\">\n" +
            "                    Представление</td>\n" +
            "                <td class=\"nowrap\">\n" +
            "                </td>\n" +
            "            </tr>\n" +
            "                <tr id=\"row_tbl_\" class=\"is_view\" data-filter-row=\"CHARACTER_SETS\">\n" +
            "                    <td class=\"text-center print_ignore\">\n" +
            "                        <input type=\"checkbox\" name=\"selected_tbl[]\" class=\"checkall\" value=\"CHARACTER_SETS\" id=\"chckbox_tbl_1\">\n" +
            "                    </td>\n" +
            "                    <th>\n" +
            "                        <a href=\"index.php?route=/sql&amp;db=information_schema&amp;table=CHARACTER_SETS&amp;pos=0\" title=\"\">\n" +
            "                            CHARACTER_SETS\n" +
            "                        </a>\n" +
            "                    </th>\n" +
            "                    <td class=\"text-center print_ignore\">\n" +
            "                        <a id=\"7db57eec4b97d698e5050078fd74dee_favorite_anchorr\" class=\"ajax favorite_table_anchor\" href=\"index.php?route=/database/structure/favorite-table&amp;db=information_schema&amp;ajax_request=1&amp;favorite_table=CHARACTER_SETS&amp;add_favorite=1\" title=\"Добавить в Избранное\" data-favtargets=\"6a7169e432a959576d70fee96ae17555\">\n" +
            "                            <span class=\"nowrap\"><img src=\"img/b_no_favorite.png\" title=\"\" alt=\"\" class=\"icon ic_b_no_favorite\">&nbsp;</span>\n" +
            "                        </a>\n" +
            "                    </td>\n" +
            "                    <td class=\"text-center print_ignore\">\n" +
            "                        <a href=\"index.php?route=/sql&amp;db=information_schema&amp;table=CHARACTER_SETS&amp;pos=0\">\n" +
            "                            <span class=\"nowrap\"><img src=\"img/b_browse.png\" title=\"Обзор\"  class=\"icon ic_b_browse\">&nbsp;Обзор</span>\n" +
            "                        </a>\n" +
            "                    </td>\n" +
            "                    <td class=\"text-center print_ignore\">\n" +
            "                        <a href=\"index.php?route=/table/structure&amp;db=information_schema&amp;table=CHARACTER_SETS\">\n" +
            "                            <span class=\"nowrap\"><img src=\"img/b_props.png\" title=\"Структура\"  class=\"icon ic_b_props\">&nbsp;Структура</span>\n" +
            "                        </a>\n" +
            "                    </td>\n" +
            "                    <td class=\"text-center print_ignore\">\n" +
            "                        <a href=\"index.php?route=/table/search&amp;db=information_schema&amp;table=CHARACTER_SETS\">\n" +
            "                            <span class=\"nowrap\"><img src=\"img/b_select.png\" title=\"Поиск\"  class=\"icon ic_b_select\">&nbsp;Поиск</span>\n" +
            "                        </a>\n" +
            "                    </td>\n" +
            "                    <td class=\"value tbl_rows\" data-table=\"CHARACTER_SETS\">\n" +
            "                        <a href=\"index.php?route=/database/structure/real-row-count&amp;ajax_request=1&amp;db=information_schema&amp;table=CHARACTER_SETS\" class=\"ajax real_row_count\">\n" +
            "                            <bdi>\n" +
            "                                ~0\n" +
            "                            </bdi>\n" +
            "                        </a>\n" +
            "                        <span class=\"pma_hint\"><img src=\"img/b_help.png\" title=\"\" alt=\"\" class=\"icon ic_b_help\"><span class=\"hide\"><a href=\"./url.php?url=https%3A%2F%2Fdocs.phpmyadmin.net%2Fen%2Flatest%2Fconfig.html%23cfg_MaxExactCountViews\" target=\"documentation\"></a></span></span>\n" +
            "                    </td>\n" +
            "\n" +
            "                    <td class=\"nowrap\">\n" +
            "                        Представление</td>\n" +
            "                    <td class=\"nowrap\">\n" +
            "                    </td>\n" +
            "                </tr>\n" +
            "                <tr id=\"row_tbl\" class=\"is_view\" data-filter-row=\"CHARACTER_SETS\">\n" +
            "                    <td class=\"text-center print_ignore\">\n" +
            "                        <input type=\"checkbox\" name=\"selected_tbl[]\" class=\"checkall\" value=\"CHARACTER_SETS\" id=\"chkbox_tbl_1\">\n" +
            "                    </td>\n" +
            "                    <th>\n" +
            "                        <a href=\"index.php?route=/sql&amp;db=information_schema&amp;table=CHARACTER_SETS&amp;pos=0\" title=\"\">\n" +
            "                            CHARACTER_SETS\n" +
            "                        </a>\n" +
            "                    </th>\n" +
            "                    <td class=\"text-center print_ignore\">\n" +
            "                        <a id=\"7db57eec4b97d698ee5050078fd74dee_avorite_anchorr\" class=\"ajax favorite_table_anchor\" href=\"index.php?route=/database/structure/favorite-table&amp;db=information_schema&amp;ajax_request=1&amp;favorite_table=CHARACTER_SETS&amp;add_favorite=1\" title=\"Добавить в Избранное\" data-favtargets=\"6a7169e432a959576d70fee96ae17555\">\n" +
            "                            <span class=\"nowrap\"><img src=\"img/b_no_favorite.png\" title=\"\" alt=\"\" class=\"icon ic_b_no_favorite\">&nbsp;</span>\n" +
            "                        </a>\n" +
            "                    </td>\n" +
            "                    <td class=\"text-center print_ignore\">\n" +
            "                        <a href=\"index.php?route=/sql&amp;db=information_schema&amp;table=CHARACTER_SETS&amp;pos=0\">\n" +
            "                            <span class=\"nowrap\"><img src=\"img/b_browse.png\" title=\"Обзор\"  class=\"icon ic_b_browse\">&nbsp;Обзор</span>\n" +
            "                        </a>\n" +
            "                    </td>\n" +
            "                    <td class=\"text-center print_ignore\">\n" +
            "                        <a href=\"index.php?route=/table/structure&amp;db=information_schema&amp;table=CHARACTER_SETS\">\n" +
            "                            <span class=\"nowrap\"><img src=\"img/b_props.png\" title=\"Структура\"  class=\"icon ic_b_props\">&nbsp;Структура</span>\n" +
            "                        </a>\n" +
            "                    </td>\n" +
            "                    <td class=\"text-center print_ignore\">\n" +
            "                        <a href=\"index.php?route=/table/search&amp;db=information_schema&amp;table=CHARACTER_SETS\">\n" +
            "                            <span class=\"nowrap\"><img src=\"img/b_select.png\" title=\"Поиск\"  class=\"icon ic_b_select\">&nbsp;Поиск</span>\n" +
            "                        </a>\n" +
            "                    </td>\n" +
            "                    <td class=\"value tbl_rows\" data-table=\"CHARACTER_SETS\">\n" +
            "                        <a href=\"index.php?route=/database/structure/real-row-count&amp;ajax_request=1&amp;db=information_schema&amp;table=CHARACTER_SETS\" class=\"ajax real_row_count\">\n" +
            "                            <bdi>\n" +
            "                                ~0\n" +
            "                            </bdi>\n" +
            "                        </a>\n" +
            "                        <span class=\"pma_hint\"><img src=\"img/b_help.png\" title=\"\" alt=\"\" class=\"icon ic_b_help\"><span class=\"hide\"><a href=\"./url.php?url=https%3A%2F%2Fdocs.phpmyadmin.net%2Fen%2Flatest%2Fconfig.html%23cfg_MaxExactCountViews\" target=\"documentation\"></a></span></span>\n" +
            "                    </td>\n" +
            "\n" +
            "                    <td class=\"nowrap\">\n" +
            "                        Представление</td>\n" +
            "                    <td class=\"nowrap\">\n" +
            "                    </td>\n" +
            "                </tr>\n" +
            "                <tr id=\"row_t1\" class=\"is_view\" data-filter-row=\"CHARACTER_SETS\">\n" +
            "                    <td class=\"text-center print_ignore\">\n" +
            "                        <input type=\"checkbox\" name=\"selected_tbl[]\" class=\"checkall\" value=\"CHARACTER_SETS\" id=\"chbox_tbl_1\">\n" +
            "                    </td>\n" +
            "                    <th>\n" +
            "                        <a href=\"index.php?route=/sql&amp;db=information_schema&amp;table=CHARACTER_SETS&amp;pos=0\" title=\"\">\n" +
            "                            CHARACTER_SETS\n" +
            "                        </a>\n" +
            "                    </th>\n" +
            "                    <td class=\"text-center print_ignore\">\n" +
            "                        <a id=\"7db57eec4b998ee5050078fd74dee_favorite_anchorr\" class=\"ajax favorite_table_anchor\" href=\"index.php?route=/database/structure/favorite-table&amp;db=information_schema&amp;ajax_request=1&amp;favorite_table=CHARACTER_SETS&amp;add_favorite=1\" title=\"Добавить в Избранное\" data-favtargets=\"6a7169e432a959576d70fee96ae17555\">\n" +
            "                            <span class=\"nowrap\"><img src=\"img/b_no_favorite.png\" title=\"\" alt=\"\" class=\"icon ic_b_no_favorite\">&nbsp;</span>\n" +
            "                        </a>\n" +
            "                    </td>\n" +
            "                    <td class=\"text-center print_ignore\">\n" +
            "                        <a href=\"index.php?route=/sql&amp;db=information_schema&amp;table=CHARACTER_SETS&amp;pos=0\">\n" +
            "                            <span class=\"nowrap\"><img src=\"img/b_browse.png\" title=\"Обзор\"  class=\"icon ic_b_browse\">&nbsp;Обзор</span>\n" +
            "                        </a>\n" +
            "                    </td>\n" +
            "                    <td class=\"text-center print_ignore\">\n" +
            "                        <a href=\"index.php?route=/table/structure&amp;db=information_schema&amp;table=CHARACTER_SETS\">\n" +
            "                            <span class=\"nowrap\"><img src=\"img/b_props.png\" title=\"Структура\"  class=\"icon ic_b_props\">&nbsp;Структура</span>\n" +
            "                        </a>\n" +
            "                    </td>\n" +
            "                    <td class=\"text-center print_ignore\">\n" +
            "                        <a href=\"index.php?route=/table/search&amp;db=information_schema&amp;table=CHARACTER_SETS\">\n" +
            "                            <span class=\"nowrap\"><img src=\"img/b_select.png\" title=\"Поиск\"  class=\"icon ic_b_select\">&nbsp;Поиск</span>\n" +
            "                        </a>\n" +
            "                    </td>\n" +
            "                    <td class=\"value tbl_rows\" data-table=\"CHARACTER_SETS\">\n" +
            "                        <a href=\"index.php?route=/database/structure/real-row-count&amp;ajax_request=1&amp;db=information_schema&amp;table=CHARACTER_SETS\" class=\"ajax real_row_count\">\n" +
            "                            <bdi>\n" +
            "                                ~0\n" +
            "                            </bdi>\n" +
            "                        </a>\n" +
            "                        <span class=\"pma_hint\"><img src=\"img/b_help.png\" title=\"\" alt=\"\" class=\"icon ic_b_help\"><span class=\"hide\"><a href=\"./url.php?url=https%3A%2F%2Fdocs.phpmyadmin.net%2Fen%2Flatest%2Fconfig.html%23cfg_MaxExactCountViews\" target=\"documentation\"></a></span></span>\n" +
            "                    </td>\n" +
            "\n" +
            "                    <td class=\"nowrap\">\n" +
            "                        Представление</td>\n" +
            "                    <td class=\"nowrap\">\n" +
            "                    </td>\n" +
            "                </tr>\n" +
            "                <tr id=\"row__1\" class=\"is_view\" data-filter-row=\"CHARACTER_SETS\">\n" +
            "                    <td class=\"text-center print_ignore\">\n" +
            "                        <input type=\"checkbox\" name=\"selected_tbl[]\" class=\"checkall\" value=\"CHARACTER_SETS\" id=\"cckbox_tbl_1\">\n" +
            "                    </td>\n" +
            "                    <th>\n" +
            "                        <a href=\"index.php?route=/sql&amp;db=information_schema&amp;table=CHARACTER_SETS&amp;pos=0\" title=\"\">\n" +
            "                            CHARACTER_SETS\n" +
            "                        </a>\n" +
            "                    </th>\n" +
            "                    <td class=\"text-center print_ignore\">\n" +
            "                        <a id=\"7db57eec4b97d698ee5050078fd7h4dee_favorite_anchorr\" class=\"ajax favorite_table_anchor\" href=\"index.php?route=/database/structure/favorite-table&amp;db=information_schema&amp;ajax_request=1&amp;favorite_table=CHARACTER_SETS&amp;add_favorite=1\" title=\"Добавить в Избранное\" data-favtargets=\"6a7169e432a959576d70fee96ae17555\">\n" +
            "                            <span class=\"nowrap\"><img src=\"img/b_no_favorite.png\" title=\"\" alt=\"\" class=\"icon ic_b_no_favorite\">&nbsp;</span>\n" +
            "                        </a>\n" +
            "                    </td>\n" +
            "                    <td class=\"text-center print_ignore\">\n" +
            "                        <a href=\"index.php?route=/sql&amp;db=information_schema&amp;table=CHARACTER_SETS&amp;pos=0\">\n" +
            "                            <span class=\"nowrap\"><img src=\"img/b_browse.png\" title=\"Обзор\"  class=\"icon ic_b_browse\">&nbsp;Обзор</span>\n" +
            "                        </a>\n" +
            "                    </td>\n" +
            "                    <td class=\"text-center print_ignore\">\n" +
            "                        <a href=\"index.php?route=/table/structure&amp;db=information_schema&amp;table=CHARACTER_SETS\">\n" +
            "                            <span class=\"nowrap\"><img src=\"img/b_props.png\" title=\"Структура\"  class=\"icon ic_b_props\">&nbsp;Структура</span>\n" +
            "                        </a>\n" +
            "                    </td>\n" +
            "                    <td class=\"text-center print_ignore\">\n" +
            "                        <a href=\"index.php?route=/table/search&amp;db=information_schema&amp;table=CHARACTER_SETS\">\n" +
            "                            <span class=\"nowrap\"><img src=\"img/b_select.png\" title=\"Поиск\"  class=\"icon ic_b_select\">&nbsp;Поиск</span>\n" +
            "                        </a>\n" +
            "                    </td>\n" +
            "                    <td class=\"value tbl_rows\" data-table=\"CHARACTER_SETS\">\n" +
            "                        <a href=\"index.php?route=/database/structure/real-row-count&amp;ajax_request=1&amp;db=information_schema&amp;table=CHARACTER_SETS\" class=\"ajax real_row_count\">\n" +
            "                            <bdi>\n" +
            "                                ~0\n" +
            "                            </bdi>\n" +
            "                        </a>\n" +
            "                        <span class=\"pma_hint\"><img src=\"img/b_help.png\" title=\"\" alt=\"\" class=\"icon ic_b_help\"><span class=\"hide\"><a href=\"./url.php?url=https%3A%2F%2Fdocs.phpmyadmin.net%2Fen%2Flatest%2Fconfig.html%23cfg_MaxExactCountViews\" target=\"documentation\"></a></span></span>\n" +
            "                    </td>\n" +
            "\n" +
            "                    <td class=\"nowrap\">\n" +
            "                        Представление</td>\n" +
            "                    <td class=\"nowrap\">\n" +
            "                    </td>\n" +
            "                </tr>\n" +
            "                <tr id=\"rowl_1\" class=\"is_view\" data-filter-row=\"CHARACTER_SETS\">\n" +
            "                    <td class=\"text-center print_ignore\">\n" +
            "                        <input type=\"checkbox\" name=\"selected_tbl[]\" class=\"checkall\" value=\"CHARACTER_SETS\" id=\"checkbox_tbl_1\">\n" +
            "                    </td>\n" +
            "                    <th>\n" +
            "                        <a href=\"index.php?route=/sql&amp;db=information_schema&amp;table=CHARACTER_SETS&amp;pos=0\" title=\"\">\n" +
            "                            CHARACTER_SETS\n" +
            "                        </a>\n" +
            "                    </th>\n" +
            "                    <td class=\"text-center print_ignore\">\n" +
            "                        <a id=\"7db57eec4b97d698ee5050078fd74dee_favorite_anchorr\" class=\"ajax favorite_table_anchor\" href=\"index.php?route=/database/structure/favorite-table&amp;db=information_schema&amp;ajax_request=1&amp;favorite_table=CHARACTER_SETS&amp;add_favorite=1\" title=\"Добавить в Избранное\" data-favtargets=\"6a7169e432a959576d70fee96ae17555\">\n" +
            "                            <span class=\"nowrap\"><img src=\"img/b_no_favorite.png\" title=\"\" alt=\"\" class=\"icon ic_b_no_favorite\">&nbsp;</span>\n" +
            "                        </a>\n" +
            "                    </td>\n" +
            "                    <td class=\"text-center print_ignore\">\n" +
            "                        <a href=\"index.php?route=/sql&amp;db=information_schema&amp;table=CHARACTER_SETS&amp;pos=0\">\n" +
            "                            <span class=\"nowrap\"><img src=\"img/b_browse.png\" title=\"Обзор\"  class=\"icon ic_b_browse\">&nbsp;Обзор</span>\n" +
            "                        </a>\n" +
            "                    </td>\n" +
            "                    <td class=\"text-center print_ignore\">\n" +
            "                        <a href=\"index.php?route=/table/structure&amp;db=information_schema&amp;table=CHARACTER_SETS\">\n" +
            "                            <span class=\"nowrap\"><img src=\"img/b_props.png\" title=\"Структура\"  class=\"icon ic_b_props\">&nbsp;Структура</span>\n" +
            "                        </a>\n" +
            "                    </td>\n" +
            "                    <td class=\"text-center print_ignore\">\n" +
            "                        <a href=\"index.php?route=/table/search&amp;db=information_schema&amp;table=CHARACTER_SETS\">\n" +
            "                            <span class=\"nowrap\"><img src=\"img/b_select.png\" title=\"Поиск\"  class=\"icon ic_b_select\">&nbsp;Поиск</span>\n" +
            "                        </a>\n" +
            "                    </td>\n" +
            "                    <td class=\"value tbl_rows\" data-table=\"CHARACTER_SETS\">\n" +
            "                        <a href=\"index.php?route=/database/structure/real-row-count&amp;ajax_request=1&amp;db=information_schema&amp;table=CHARACTER_SETS\" class=\"ajax real_row_count\">\n" +
            "                            <bdi>\n" +
            "                                ~0\n" +
            "                            </bdi>\n" +
            "                        </a>\n" +
            "                        <span class=\"pma_hint\"><img src=\"img/b_help.png\" title=\"\" alt=\"\" class=\"icon ic_b_help\"><span class=\"hide\"><a href=\"./url.php?url=https%3A%2F%2Fdocs.phpmyadmin.net%2Fen%2Flatest%2Fconfig.html%23cfg_MaxExactCountViews\" target=\"documentation\"></a></span></span>\n" +
            "                    </td>\n" +
            "\n" +
            "                    <td class=\"nowrap\">\n" +
            "                        Представление</td>\n" +
            "                    <td class=\"nowrap\">\n" +
            "                    </td>\n" +
            "                </tr>\n" +
            "            <tr id=\"row_tbl_2\" class=\"is_view\" data-filter-row=\"CHARACTER_SETS\">\n" +
            "                <td class=\"text-center print_ignore\">\n" +
            "                    <input type=\"checkbox\" name=\"selected_tbl[]\" class=\"checkall\" value=\"CHARACTER_SETS\" id=\"checkbo_tbl_1\">\n" +
            "                </td>\n" +
            "                <th>\n" +
            "                    <a href=\"index.php?route=/sql&amp;db=information_schema&amp;table=CHARACTER_SETS&amp;pos=0\" title=\"\">\n" +
            "                        CHARACTER_SETS\n" +
            "                    </a>\n" +
            "                </th>\n" +
            "                <td class=\"text-center print_ignore\">\n" +
            "                    <a id=\"7db57eec4b97d698ee5050078fd74dee_favorite_ancho\" class=\"ajax favorite_table_anchor\" href=\"index.php?route=/database/structure/favorite-table&amp;db=information_schema&amp;ajax_request=1&amp;favorite_table=CHARACTER_SETS&amp;add_favorite=1\" title=\"Добавить в Избранное\" data-favtargets=\"6a7169e432a959576d70fee96ae17555\">\n" +
            "                        <span class=\"nowrap\"><img src=\"img/b_no_favorite.png\" title=\"\" alt=\"\" class=\"icon ic_b_no_favorite\">&nbsp;</span>\n" +
            "                    </a>\n" +
            "                </td>\n" +
            "                <td class=\"text-center print_ignore\">\n" +
            "                    <a href=\"index.php?route=/sql&amp;db=information_schema&amp;table=CHARACTER_SETS&amp;pos=0\">\n" +
            "                        <span class=\"nowrap\"><img src=\"img/b_browse.png\" title=\"Обзор\"  class=\"icon ic_b_browse\">&nbsp;Обзор</span>\n" +
            "                    </a>\n" +
            "                </td>\n" +
            "                <td class=\"text-center print_ignore\">\n" +
            "                    <a href=\"index.php?route=/table/structure&amp;db=information_schema&amp;table=CHARACTER_SETS\">\n" +
            "                        <span class=\"nowrap\"><img src=\"img/b_props.png\" title=\"Структура\"  class=\"icon ic_b_props\">&nbsp;Структура</span>\n" +
            "                    </a>\n" +
            "                </td>\n" +
            "                <td class=\"text-center print_ignore\">\n" +
            "                    <a href=\"index.php?route=/table/search&amp;db=information_schema&amp;table=CHARACTER_SETS\">\n" +
            "                        <span class=\"nowrap\"><img src=\"img/b_select.png\" title=\"Поиск\"  class=\"icon ic_b_select\">&nbsp;Поиск</span>\n" +
            "                    </a>\n" +
            "                </td>\n" +
            "                <td class=\"value tbl_rows\" data-table=\"CHARACTER_SETS\">\n" +
            "                    <a href=\"index.php?route=/database/structure/real-row-count&amp;ajax_request=1&amp;db=information_schema&amp;table=CHARACTER_SETS\" class=\"ajax real_row_count\">\n" +
            "                        <bdi>\n" +
            "                            ~0\n" +
            "                        </bdi>\n" +
            "                    </a>\n" +
            "                    <span class=\"pma_hint\"><img src=\"img/b_help.png\" title=\"\" alt=\"\" class=\"icon ic_b_help\"><span class=\"hide\"><a href=\"./url.php?url=https%3A%2F%2Fdocs.phpmyadmin.net%2Fen%2Flatest%2Fconfig.html%23cfg_MaxExactCountViews\" target=\"documentation\"></a></span></span>\n" +
            "                </td>\n" +
            "\n" +
            "                <td class=\"nowrap\">\n" +
            "                    Представление</td>\n" +
            "                <td class=\"nowrap\">\n" +
            "                </td>\n" +
            "            </tr>\n" +
            "            <tr id=\"row_tbl_3\" class=\"is_view\" data-filter-row=\"CHARACTER_SETS\">\n" +
            "                <td class=\"text-center print_ignore\">\n" +
            "                    <input type=\"checkbox\" name=\"selected_tbl[]\" class=\"checkall\" value=\"CHARACTER_SETS\" id=\"checkbox_tb_1\">\n" +
            "                </td>\n" +
            "                <th>\n" +
            "                    <a href=\"index.php?route=/sql&amp;db=information_schema&amp;table=CHARACTER_SETS&amp;pos=0\" title=\"\">\n" +
            "                        CHARACTER_SETS\n" +
            "                    </a>\n" +
            "                </th>\n" +
            "                <td class=\"text-center print_ignore\">\n" +
            "                    <a id=\"7db57eec4b97d698ee5050078fd74dee_favorite_anchor\" class=\"ajax favorite_table_anchor\" href=\"index.php?route=/database/structure/favorite-table&amp;db=information_schema&amp;ajax_request=1&amp;favorite_table=CHARACTER_SETS&amp;add_favorite=1\" title=\"Добавить в Избранное\" data-favtargets=\"6a7169e432a959576d70fee96ae17555\">\n" +
            "                        <span class=\"nowrap\"><img src=\"img/b_no_favorite.png\" title=\"\" alt=\"\" class=\"icon ic_b_no_favorite\">&nbsp;</span>\n" +
            "                    </a>\n" +
            "                </td>\n" +
            "                <td class=\"text-center print_ignore\">\n" +
            "                    <a href=\"index.php?route=/sql&amp;db=information_schema&amp;table=CHARACTER_SETS&amp;pos=0\">\n" +
            "                        <span class=\"nowrap\"><img src=\"img/b_browse.png\" title=\"Обзор\"  class=\"icon ic_b_browse\">&nbsp;Обзор</span>\n" +
            "                    </a>\n" +
            "                </td>\n" +
            "                <td class=\"text-center print_ignore\">\n" +
            "                    <a href=\"index.php?route=/table/structure&amp;db=information_schema&amp;table=CHARACTER_SETS\">\n" +
            "                        <span class=\"nowrap\"><img src=\"img/b_props.png\" title=\"Структура\"  class=\"icon ic_b_props\">&nbsp;Структура</span>\n" +
            "                    </a>\n" +
            "                </td>\n" +
            "                <td class=\"text-center print_ignore\">\n" +
            "                    <a href=\"index.php?route=/table/search&amp;db=information_schema&amp;table=CHARACTER_SETS\">\n" +
            "                        <span class=\"nowrap\"><img src=\"img/b_select.png\" title=\"Поиск\"  class=\"icon ic_b_select\">&nbsp;Поиск</span>\n" +
            "                    </a>\n" +
            "                </td>\n" +
            "                <td class=\"value tbl_rows\" data-table=\"CHARACTER_SETS\">\n" +
            "                    <a href=\"index.php?route=/database/structure/real-row-count&amp;ajax_request=1&amp;db=information_schema&amp;table=CHARACTER_SETS\" class=\"ajax real_row_count\">\n" +
            "                        <bdi>\n" +
            "                            ~0\n" +
            "                        </bdi>\n" +
            "                    </a>\n" +
            "                    <span class=\"pma_hint\"><img src=\"img/b_help.png\" title=\"\" alt=\"\" class=\"icon ic_b_help\"><span class=\"hide\"><a href=\"./url.php?url=https%3A%2F%2Fdocs.phpmyadmin.net%2Fen%2Flatest%2Fconfig.html%23cfg_MaxExactCountViews\" target=\"documentation\"></a></span></span>\n" +
            "                </td>\n" +
            "\n" +
            "                <td class=\"nowrap\">\n" +
            "                    Представление</td>\n" +
            "                <td class=\"nowrap\">\n" +
            "                </td>\n" +
            "            </tr>\n" +
            "            </thbody>\n" +
            "        </table>";
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
                img.style.width = ("16px");
                img.style.height = ("16px");
                li.appendChild(img);
                var ah = document.createElement('a');
                ah.setAttribute('class', 'nav-link btn btn');
                ah.setAttribute('href', '#');
                ah.setAttribute('role', 'button');
                ah.style.fontSize = "17px";
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
                img11.style.width = ("16px");
                img11.style.height = ("16px");
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