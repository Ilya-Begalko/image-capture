# JavaScript: делаем селфи с помощью браузера 
Разработано простое приложение со следующим функционалом:

1) при инициализации приложение запрашивает у пользователя разрешение на захват медиапотока (далее также — поток) из видеокамеры его устройства;
2) захваченный поток передается в элемент video;
3) из потока извлекается видеотрек (далее также — трек), который передается в интерфейс для захвата изображений;
4) из экземпляра интерфейса извлекается список поддерживаемых возможностей (capabilities) и настроек (settings) для фото;
5) из трека также извлекается список поддерживаемых возможностей и настроек;
6) формируется список диапазонных полей (<input type="range">) для установки настроек для фото;
7) пользователь имеет возможность снимать фото (take photos) и захватывать фреймы (grab frames);
8) фото выводится в элемент img, генерируется ссылка для его скачивания;
9) фрейм инвертируется и отрисовывается на холсте (canvas), генерируется ссылка для его скачивания.

![](assets/photo_2023-03-20_14-04-14.jpg)
