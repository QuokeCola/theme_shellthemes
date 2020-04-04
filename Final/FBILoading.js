var loading =  require('loading-cli');



var load = loading(" 正在准备终端...");

load.frames = ["◐", "◓", "◑", "◒"];

load.start()
setTimeout(function(){
    load.text = " 外部电源接触...没有异常";
},400);
setTimeout(function(){
    load.text = " 思考形态以中文为基准，进行思维连接...";
},800);
setTimeout(function(){
    load.text = " 同步率为 110.00%";
},1500);

setTimeout(function(){
    load.text = " 交互界面连接...";
},1800);
setTimeout(function(){
    load.text = " 安全装置解除...";
},2100);


// stop
setTimeout(function(){
    load.stop();
    console.log("   启动成功！\n");
},3000)
