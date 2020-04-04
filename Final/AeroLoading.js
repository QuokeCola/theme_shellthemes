var loading =  require('loading-cli');



var load = loading(" Готов к запуску терминала ...");

load.frames = ["◐", "◓", "◑", "◒"];

load.start()
setTimeout(function(){
    load.text = " Внешний силовой контакт ... нет ненормальности";
},200);
setTimeout(function(){
    load.text = " Форма мышления основана на русском языке, а мышление связано ...";
},400);
setTimeout(function(){
    load.text = " Частота синхронизации 110.00%";
},600);

setTimeout(function(){
    load.text = " Интерактивный интерфейс подключения...";
},800);
setTimeout(function(){
    load.text = " Устройство безопасности выпуска...";
},1000);


// stop
setTimeout(function(){
    load.stop();
    console.log("   Началось успешно!\n");
},1200)
