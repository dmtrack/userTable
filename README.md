Видео работы приложения в рамках решения тестового задания: https://disk.yandex.ru/i/24iPoUJoGyAJgg

Для запуска устанавливаем зависимости из client и server
Для старта сервера npm run dev
Для старта клиента npm start

--
Условие тестового задания:

Существует CSV-файл со списком игроков:
Ник; Email; Зарегистрирован; Статус
ivan2007; ivan@mmail.ru; 12.12.2007 15:41; On bigpetr; petr@mailtest.ru; 13.12.2007 20:41; Off semensemenych; sidr@testmail.ru; 14.12.2007 5:21; Off ktonetort; lapshin@testtest.ru; 15.12.2007 15:41; On agentsmith; smith@smith.com; 16.12.2007 3:28; On pushkin; pas@pas.ru; 17.12.2007 15:41; Off
superstar; lermontov@yay.ru; 18.12.2007 15:41; Off go99; gogol@gggml.ru; 19.12.1999 15:41; Off

Требуется создать скрипт на языке JavaScript node.js, который должен:
Создать таблицу в PostgreSQL под данную структуру файла.
Все данные из CSV-файла экспортировать в созданную таблицу.
Данные в поле "Зарегистрирован" должны храниться в формате INTEGER. После полного экспорта данных в таблицу отобразить на странице всех игроков со статусом On в порядке времени регистрации.
