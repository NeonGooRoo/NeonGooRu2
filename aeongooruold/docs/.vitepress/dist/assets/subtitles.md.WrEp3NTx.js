import{_ as e,c as t,o as a,V as o}from"./chunks/framework.CtMkbY0Y.js";const r="/assets/SubtitleEdit.DYRjY9bg.png",i="/assets/retimer.DW4PbaXk.png",l="/assets/retimer2.PaTkkc-E.png",_=JSON.parse('{"title":"Субтитры","description":"","frontmatter":{"layout":"doc","title":"Субтитры"},"headers":[],"relativePath":"subtitles.md","filePath":"subtitles.md"}'),s={name:"subtitles.md"},d=o('<p>Статья новая, если замечены ошибки или есть рекомендации, пишите <a href="https://t.me/neongooru" target="_blank" rel="noreferrer">сюда</a></p><p>Для просмотра видеоконтента и майнинга, нам нужны будут, но но это не так просто. Найти субтитры не всегда получается, и даже если получается, в них присутствует лишнее форматирование и у них могут быть неправильные тайминги. Далее будет информация о том, как решить каждую из этих проблей</p><hr><nav class="table-of-contents"><ul><li><a href="#subtitle-edit">Subtitle Edit</a><ul><li><a href="#установка">Установка</a></li><li><a href="#использование">Использование</a></li></ul></li><li><a href="#automatic-subtitle-retimer">Automatic Subtitle Retimer</a><ul><li><a href="#установка-1">Установка</a></li><li><a href="#использование-1">Использование</a></li></ul></li><li><a href="#whisper-ai">Whisper AI</a><ul><li><a href="#на-своем-устроистве">На своем устройстве</a></li><li><a href="#google-colab">Google Colab</a></li></ul></li></ul></nav><h2 id="subtitle-edit" tabindex="-1">Subtitle Edit <a class="header-anchor" href="#subtitle-edit" aria-label="Permalink to &quot;Subtitle Edit&quot;">​</a></h2><p><strong>Subtitle Edit</strong> это open-source программа для редактирования субтитров. Нам она нужна, чтобы избавляться от лишнего форматирования и скобок с фуриганой для удобного майнинга. Это необязательно, но бывает очень раздражает, когда не получается замайнить что-то, потому что слово разделено на 2 части скобками. Также, она может через OCR переводить форматы субтитров типа <code>.sup</code>.</p><h3 id="установка" tabindex="-1">Установка <a class="header-anchor" href="#установка" aria-label="Permalink to &quot;Установка&quot;">​</a></h3><p>На официальном <a href="https://github.com/SubtitleEdit/subtitleedit/releases" target="_blank" rel="noreferrer">GitHub</a> скачиваете последнюю версию программы в архиве, вариант <code>SE***.zip</code> хранится в папочке, <code>SubtitleEdit-*.*.*-Setup.exe</code> это установщик, качайте какой хотите.</p><h3 id="использование" tabindex="-1">Использование <a class="header-anchor" href="#использование" aria-label="Permalink to &quot;Использование&quot;">​</a></h3><p>Чтобы отформатировать сразу группу файлов, вам нужно нажать <code>Tools &gt; Batch Convert</code>. Сначала нажимаем <code>Scan Folder</code> (если у вас субтитры в разных папках внутри папки, можно нажать <code>Include Sub Folders</code>) и выбираем папку с субтитрами. Отмечаем галочки как показано, после нажатия <code>Remove Text for HI</code>, выставляем там настройки как на втором скриншоте и можно нажимать <code>Convert</code>. Все!</p><p>Если вы скачали субтитры, и они отображаются не как текст, а как изображения, их можно попробовать перевести в текст. Откройте файл субтитров через <code>SubtitleEdit</code> и сразу же откроется <code>Import\\OCR</code> меню. Вы можете выбрать <strong>OCR</strong> движок, <strong>Tessaract</strong> работает лучше всего на вашем устройстве, но лучший вариант - <strong>Google Vision API</strong>, 1000 токенов можно получить бесплатно и обработка происходит на облаке. После завершения обработки сохраняете как <code>.SRT</code>.</p><p><img src="'+r+'" alt="An image"></p><h2 id="automatic-subtitle-retimer" tabindex="-1">Automatic Subtitle Retimer <a class="header-anchor" href="#automatic-subtitle-retimer" aria-label="Permalink to &quot;Automatic Subtitle Retimer&quot;">​</a></h2><p>Данная программа позволяет нам автоматически исправлять тайминги и\\ИЛИ переименовывать файлы (удобно для <strong>MPV</strong>). Ей стоит пользоваться если тайминги меняются несколько раз за серию или постоянно разные, иначе проще вручную и вы можете сделать только хуже. Работает только с <code>.ass</code> и <code>.srt</code> Больше инфы <a href="https://animecards.site/subtitles/" target="_blank" rel="noreferrer">тут</a></p><h3 id="установка-1" tabindex="-1">Установка <a class="header-anchor" href="#установка-1" aria-label="Permalink to &quot;Установка&quot;">​</a></h3><p>Скачайте <a href="https://mega.nz/folder/W19xUQJT#Ele4MKy-c61AOp2ZaN5AYg" target="_blank" rel="noreferrer">данный архив</a> и выгрузите его внутрь папки с видео и субтитрами. Данную папку нужно будет каждый раз в ручную перетаскивать в папку нового сериала\\аниме, к сожалению. Не советую разархивировать стандартный архиватором Windows, это будет безумно долго. Должно выглядеть как-то так:</p><p><img src="'+i+'" alt="An image"></p><h3 id="использование-1" tabindex="-1">Использование <a class="header-anchor" href="#использование-1" aria-label="Permalink to &quot;Использование&quot;">​</a></h3><p>Количество видео и субтитров должно быть строго ОДИНАКОВОЕ, иначе видео не запуститься. Если есть какие-то опенинги или спешалы - уберите их. Откройте папочку <code>auto-sub-retimer</code> и запустите <code>RUN_ME.bat</code>. Не пугайтесь консоли, выбирайте ваш формат субтитров (<code>.srt</code> - 1 / <code>.ass</code> - 2).</p><p>Теперь важный момент. Желательно выбирать 1 вариант, потому что он точнее, но он требует чтобы внутри скачанного вами сериала уже были другие субтитры, то есть вам нужно скачивать аниме\\дорамы с русскими\\английскими сабами, и уже с ними синхронизировать японские сабы. Это довольно просто, на самом деле, потому что сидов на сериалы с сабами практически всегда больше в любом случае.</p><p>Если же вы не смогли найти вариант с другими родными сабами, то придется использоваться вариант 2, который будет пытаться синхронизировать по аудио, но он очень неточный.</p><p><code>Split Penalty? Only change this if default resulted in mis-timed subs. (Default 7):</code> - просто жмите Enter.</p><p>Если вы хотите просто переименовать файлы, запускайте <code>rename_only.bat</code>, там все так же, но проще.</p><p>Если все прошло успешно, то результат будет похож на это:</p><p><img src="'+l+'" alt="An image"></p><h2 id="whisper-ai" tabindex="-1">Whisper AI <a class="header-anchor" href="#whisper-ai" aria-label="Permalink to &quot;Whisper AI&quot;">​</a></h2><p>Если субтитры не нашли, ИИ может вам помочь! Оно сканирует неидеально, но лучше, чем ничего.</p><h3 id="на-своем-устроистве" tabindex="-1">На своем устройстве <a class="header-anchor" href="#на-своем-устроистве" aria-label="Permalink to &quot;На своем устройстве&quot;">​</a></h3><p>Если у вас неплохой компьютер, вы можете запустить <code>Whisper AI</code> на своей машине, это удобнее всего делать через <code>SubTitle Edit</code>.</p><p>Сверху выбирете вкладку <code>Video &gt; Audio to text (Whisper)...</code>. Выбирете язык и размер модели (размер и, соответственно, точность будут зависеть от него) и язык. Модели нужно скачивать. Запускайте и ждите!</p><h3 id="google-colab" tabindex="-1">Google Colab <a class="header-anchor" href="#google-colab" aria-label="Permalink to &quot;Google Colab&quot;">​</a></h3><p>Зайдите на <a href="https://colab.research.google.com/drive/" target="_blank" rel="noreferrer">Google Colab</a> и создайте новый <code>notebook</code> (блокнот)</p><p>Слева нажмите на папочку и загрузите туда ваши видео файл(ы).</p><p>Нажмите <code>+ Code</code> и впишите в черное окно <code>!pip install git+https://github.com/openai/whisper.git</code>, нажмите на значок старта. При завершении также проделайте с <code>!sudo apt update &amp;&amp; sudo apt install ffmpeg</code>.</p><p>Когда все загрузиться, можно просить нейросеть обработать файл. Впишите снова код ниже, потом ПКМ по нужному вам файлу - скопировать путь - вставьте его в кавычки. Запускайте и ждите, это будет долго.</p><p><code>!whisper &quot;НАЗВАНИЕ_ФАЙЛА.ФОРМАТ&quot; --language Japanese --model medium</code></p>',36),c=[d];function n(p,h,u,b,m,g){return a(),t("div",null,c)}const S=e(s,[["render",n]]);export{_ as __pageData,S as default};
