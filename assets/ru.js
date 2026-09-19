(()=>{const exact={
"Operations":"Операции","Recipe":"Рецепт","Input":"Ввод","Output":"Вывод","Options":"Настройки",
"Search...":"Поиск...","Step":"Шаг","Bake!":"Выполнить","Auto Bake":"Автоматически выполнять",
"Save recipe":"Сохранить рецепт","Load recipe":"Загрузить рецепт","Clear recipe":"Очистить рецепт",
"About / Support":"О программе / Поддержка","Edit favourites":"Изменить избранное",
"Add a new input tab":"Добавить новую вкладку ввода","Open folder as input":"Открыть папку как ввод",
"Open file as input":"Открыть файл как ввод","Clear input and output":"Очистить ввод и вывод",
"Reset pane layout":"Сбросить расположение панелей","Save all outputs to a zip file":"Сохранить все результаты в ZIP",
"Save output to file":"Сохранить результат в файл","Copy raw output to the clipboard":"Копировать результат в буфер обмена",
"Replace input with output":"Заменить ввод результатом","Undo":"Отменить","Maximise output pane":"Развернуть панель результата",
"Magic!":"Магия!","About":"О программе","Support":"Поддержка","FAQs":"Частые вопросы",
"Report a bug":"Сообщить об ошибке","Keybindings":"Сочетания клавиш","Close":"Закрыть","Cancel":"Отмена",
"Save":"Сохранить","Yes":"Да","No":"Нет","Download":"Скачать","Refresh":"Обновить","Name":"Имя",
"Size":"Размер","Type":"Тип","Content":"Содержимое","Filename":"Имя файла","Input format":"Формат ввода",
"Output format":"Формат вывода","Key":"Ключ","IV":"Вектор инициализации","Mode":"Режим","Encoding":"Кодировка",
"Delimiter":"Разделитель","Format":"Формат","Text":"Текст","Length":"Длина","Offset":"Смещение","Value":"Значение",
"Go to tab ":"Перейти к вкладке ","Find tab ":"Найти вкладку ","Close all tabs":"Закрыть все вкладки",
"File":"Файл","Recipe":"Рецепт","Category":"Категория","Description":"Описание","Options":"Настройки"
};
const prefix=[
[/^From (.+)$/,"Из $1"],[/^To (.+)$/,"В $1"],[/^Decode (.+)$/,"Декодирование $1"],
[/^Encode (.+)$/,"Кодирование $1"],[/^Decrypt (.+)$/,"Расшифрование $1"],[/^Encrypt (.+)$/,"Шифрование $1"],
[/^Parse (.+)$/,"Разбор $1"],[/^Generate (.+)$/,"Генерация $1"],[/^Find (.+)$/,"Поиск $1"],
[/^Extract (.+)$/,"Извлечение $1"],[/^Remove (.+)$/,"Удаление $1"],[/^Replace (.+)$/,"Замена $1"],
[/^Convert (.+)$/,"Преобразование $1"],[/^Swap (.+)$/,"Замена $1"],[/^Sort (.+)$/,"Сортировка $1"],
[/^Split (.+)$/,"Разделение $1"],[/^Join (.+)$/,"Объединение $1"]
];
function tr(s){if(exact[s])return exact[s];for(const [re,r] of prefix){if(re.test(s))return s.replace(re,r)}return s}
function scan(root){if(!root)return;const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);const ns=[];while(w.nextNode())ns.push(w.currentNode);
for(const n of ns){const p=n.parentElement;if(!p||/^(SCRIPT|STYLE|TEXTAREA|INPUT|CODE|PRE|OPTION|SVG)$/.test(p.tagName)||p.closest('script,style,textarea,input,code,pre,svg,option'))continue;
const raw=n.nodeValue, s=raw.trim();if(!s)continue;const v=tr(s);if(v!==s)n.nodeValue=raw.replace(s,v)}
root.querySelectorAll('[title],[placeholder],[aria-label]').forEach(e=>['title','placeholder','aria-label'].forEach(a=>{if(e.hasAttribute(a)){const v=tr(e.getAttribute(a));if(v!==e.getAttribute(a))e.setAttribute(a,v)}}));
document.documentElement.lang='ru'}
function start(){scan(document);new MutationObserver(()=>scan(document)).observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['title','placeholder','aria-label']})}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();})();