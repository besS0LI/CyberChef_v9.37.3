(()=>{const exact={
"Operations":"Операции","Recipe":"Рецепт","Input":"Ввод","Output":"Вывод","Options":"Настройки","Search...":"Поиск...",
"Step":"Шаг","Bake!":"Выполнить","Auto Bake":"Автоматически выполнять","Save recipe":"Сохранить рецепт",
"Load recipe":"Загрузить рецепт","Clear recipe":"Очистить рецепт","About / Support":"О программе / Поддержка",
"Edit favourites":"Изменить избранное","Add a new input tab":"Добавить новую вкладку ввода",
"Open folder as input":"Открыть папку как ввод","Open file as input":"Открыть файл как ввод",
"Clear input and output":"Очистить ввод и вывод","Reset pane layout":"Сбросить расположение панелей",
"Save all outputs to a zip file":"Сохранить все результаты в ZIP","Save output to file":"Сохранить результат в файл",
"Copy raw output to the clipboard":"Копировать результат в буфер обмена","Replace input with output":"Заменить ввод результатом",
"Undo":"Отменить","Maximise output pane":"Развернуть панель результата","Magic!":"Магия!",
"About":"О программе","Support":"Поддержка","FAQs":"Частые вопросы","Report a bug":"Сообщить об ошибке",
"Keybindings":"Сочетания клавиш","Close":"Закрыть","Cancel":"Отмена","Save":"Сохранить","Yes":"Да","No":"Нет",
"Download":"Скачать","Refresh":"Обновить","Name":"Имя","Size":"Размер","Type":"Тип","Content":"Содержимое",
"Filename":"Имя файла","Input format":"Формат ввода","Output format":"Формат вывода","Key":"Ключ",
"IV":"Вектор инициализации","Mode":"Режим","Encoding":"Кодировка","Delimiter":"Разделитель","Format":"Формат",
"Text":"Текст","Length":"Длина","Offset":"Смещение","Value":"Значение","Go to tab ":"Перейти к вкладке ",
"Find tab ":"Найти вкладку ","Close all tabs":"Закрыть все вкладки","File":"Файл","Category":"Категория",
"Description":"Описание","Error":"Ошибка","Warning":"Предупреждение","Success":"Успешно","Clear":"Очистить",
"Reset":"Сбросить","Apply":"Применить","Default":"По умолчанию","None":"Нет","Choose":"Выбрать",
"Select":"Выбрать","Add":"Добавить","Remove":"Удалить","Delete":"Удалить","Copy":"Копировать","Paste":"Вставить",
"Open":"Открыть","Import":"Импортировать","Export":"Экспортировать","Enabled":"Включено","Disabled":"Отключено",
"true":"истина","false":"ложь"
};
const phrase=[
[/^From (.+)$/,"Из $1"],[/^To (.+)$/,"В $1"],[/^Decode (.+)$/,"Декодирование $1"],
[/^Encode (.+)$/,"Кодирование $1"],[/^Decrypt (.+)$/,"Расшифрование $1"],[/^Encrypt (.+)$/,"Шифрование $1"],
[/^Parse (.+)$/,"Разбор $1"],[/^Generate (.+)$/,"Генерация $1"],[/^Find (.+)$/,"Поиск $1"],
[/^Extract (.+)$/,"Извлечение $1"],[/^Remove (.+)$/,"Удаление $1"],[/^Replace (.+)$/,"Замена $1"],
[/^Convert (.+)$/,"Преобразование $1"],[/^Swap (.+)$/,"Замена $1"],[/^Sort (.+)$/,"Сортировка $1"],
[/^Split (.+)$/,"Разделение $1"],[/^Join (.+)$/,"Объединение $1"],[/^Calculate (.+)$/,"Вычисление $1"],
[/^Generate (.+)$/,"Генерация $1"],[/^Show (.+)$/,"Показать $1"],[/^Remove (.+)$/,"Удаление $1"]
];
const words={
"Add":"Добавить","Advanced":"Расширенные","Algorithm":"Алгоритм","Algorithms":"Алгоритмы","All":"Все","Allow":"Разрешить",
"ASCII":"ASCII","Base":"Основание","Binary":"Двоичный","Bit":"Бит","Bits":"Биты","Block":"Блок","Bytes":"Байты",
"Byte":"Байт","Case":"Регистр","Character":"Символ","Characters":"Символы","Character":"Символ","Checksum":"Контрольная сумма",
"Cipher":"Шифр","Compression":"Сжатие","Compress":"Сжать","Condition":"Условие","Convert":"Преобразовать",
"Data":"Данные","Date":"Дата","Decode":"Декодировать","Decoder":"Декодер","Decrypt":"Расшифровать","Decompression":"Распаковка",
"Encode":"Кодировать","Encoder":"Кодировщик","Encrypt":"Зашифровать","Encryption":"Шифрование","Encoding":"Кодировка",
"End":"Конец","Enter":"Введите","Escape":"Экранирование","Extract":"Извлечь","File":"Файл","Filter":"Фильтр",
"From":"Из","Hash":"Хеш","Hex":"Шестнадцатеричный","Hexadecimal":"Шестнадцатеричный","Input":"Ввод","JSON":"JSON",
"Key":"Ключ","Line":"Строка","Lines":"Строки","Length":"Длина","Match":"Совпадение","Mode":"Режим","New":"Новый",
"Number":"Число","Output":"Вывод","Padding":"Заполнение","Parse":"Разобрать","Password":"Пароль","Pattern":"Шаблон",
"Random":"Случайный","Regex":"Регулярное выражение","Regular":"Регулярный","Result":"Результат","Salt":"Соль",
"Search":"Поиск","Separator":"Разделитель","Start":"Начало","String":"Строка","Text":"Текст","To":"В","Type":"Тип",
"URL":"URL","UTF-8":"UTF-8","Value":"Значение","Word":"Слово","Words":"Слова","XML":"XML","XOR":"XOR",
"Length":"Длина","Offset":"Смещение","Option":"Параметр","Options":"Параметры","Operation":"Операция","Operations":"Операции",
"Description":"Описание","Required":"Обязательно","Optional":"Необязательно","Default":"По умолчанию"
};
function tr(s){
 if(exact[s])return exact[s];
 for(const [re,r] of phrase)if(re.test(s))return s.replace(re,r);
 if(/^[A-Za-z][A-Za-z0-9 _+./-]{1,100}$/.test(s)){
   let out=s;
   for(const [a,b] of Object.entries(words))out=out.replace(new RegExp("\\b"+a.replace(/[.*+?^{}()|[\\]\\]/g,"\\$&")+"\\b","g"),b);
   return out;
 }
 return s;
}
function scan(root){if(!root)return;const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);const ns=[];while(w.nextNode())ns.push(w.currentNode);
for(const n of ns){const p=n.parentElement;if(!p||/^(SCRIPT|STYLE|TEXTAREA|INPUT|CODE|PRE|OPTION|SVG)$/.test(p.tagName)||p.closest('script,style,textarea,input,code,pre,svg,option'))continue;
const raw=n.nodeValue,s=raw.trim();if(!s)continue;const v=tr(s);if(v!==s)n.nodeValue=raw.replace(s,v)}
root.querySelectorAll('[title],[placeholder],[aria-label]').forEach(e=>['title','placeholder','aria-label'].forEach(a=>{if(e.hasAttribute(a)){const v=tr(e.getAttribute(a));if(v!==e.getAttribute(a))e.setAttribute(a,v)}}));
document.documentElement.lang='ru'}
function start(){scan(document);new MutationObserver(()=>scan(document)).observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['title','placeholder','aria-label']})}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();})();