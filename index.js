function myFunction(x) {
    if (x === 0) {
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
    else if (x === 1) {
        document.getElementById('general').innerHTML = "<table id=\"structureTable\" class=\"data\">Table1\n" +
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
    else if (x === 2) {
        document.getElementById('general').innerHTML = "<table id=\"structureTable\" class=\"data\">Table2\n" +
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
            "        </table>";
    }
    else if (x === 5) {
        document.getElementById('general').innerHTML = "<table width='100%' border='1'><tr><td>&nbsp;</td>Create Db<td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr></table>";
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
            "        </table>";
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
    ah.style.fontSize="17px";
    ah.innerHTML=i.title;
    li.appendChild(ah);
}
var arr=[
    {img:"img/b_plus.png",inner:"collapse multi-collapse inner",thirdName:"Toggle 1.1.2",type:"button",id:"multiCollapseExample1",tog:"row",thirdId:"demo",child:"col",btn:"btn btn",classname:"btn btn-link",secondControls:"multiCollapseExample11",data:"collapse",href:"#multiCollapseExample1",secondName:"Toggle 1.1 element",onclick:"myFunction(1)", secondId:"multiCollapseExample11",target:"#demo",name:"Toggle 1 element",class:"plus",controls:"multiCollapseExample1",role:"button",secondHref:"#multiCollapseExample11",src:"multiCollapseExample1",expanded:"true"
    },
     {img:"img/b_plus.png",inner:"collapse multi-collapse inner",thirdName:"Toggle 2.1.2",type:"button",id:"multiCollapseExample2",tog:"row",thirdId:"demo",child:"col",btn:"btn btn",classname:"btn btn-link",secondControls:"multiCollapseExample22",data:"collapse", href:"#multiCollapseExample2",secondName:"Toggle 2.1 element",onclick:"myFunction(2)", secondId:"multiCollapseExample22",target:"#demo1",name:"Toggle 2 element",class:"plus",controls:"multiCollapseExample2",role:"button",secondHref:"#multiCollapseExample22",src:"multiCollapseExample2",expanded:"true"
     },
     {img:"img/b_plus.png",inner:"collapse multi-collapse inner",thirdName:"Toggle 3.1.2",type:"button",id:"multiCollapseExample3",tog:"row",thirdId:"demo",child:"col",btn:"btn btn",classname:"btn btn-link",secondControls:"multiCollapseExample33",data:"collapse", href:"#multiCollapseExample3",secondName:"Toggle 3.1 element",onclick:"myFunction(3)", target:"#demo3",name:"Toggle 3 element", secondId:"multiCollapseExample33",class:"plus",controls:"multiCollapseExample3",role:"button",secondHref:"#multiCollapseExample33",src:"multiCollapseExample3",expanded:"true"
     }

 ];
 /*$('<div>',{class:i.classname,css:{width:100,height:100}}).appendTo('#all');*/
     var all=document.getElementById('all');
     $(document).ready(function(){
     for(var i of arr) {
         var p=(document.createElement('p'));
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
         ah1.setAttribute('aria-controls',i.secondId);
         ah1.setAttribute('aria-expanded',i.expanded);
         ah1.setAttribute('href',i.secondHref);
         $(ah1).text(i.secondName);
         $(ah1).appendTo(p1);
         $(inner1).appendTo(col);
         var inner2=(document.createElement('div'));
         inner2.setAttribute('id',i.secondId);
         inner2.setAttribute('class',i.inner);
         $(inner2).appendTo(inner1);
         var button=(document.createElement('button'));
         button.setAttribute('type',i.type);
         button.setAttribute('class',i.classname);
         button.setAttribute('data-toggle',i.data);
         button.setAttribute('data-target',i.target);
         $(button).text(i.thirdName);
         $(button).appendTo(inner2);
         var demo=(document.createElement('div'));
         demo.setAttribute('id',i.thirdId);
         demo.setAttribute('class',i.data);
         $(demo).appendTo(inner2);
     }
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