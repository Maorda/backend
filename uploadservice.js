var service=require('node-windows').Service;
var alo = new service({
    name:'aquaperu.api',
    description:'api backend de aquaperu',
    script:'D:\\sad\\backend\\dist\\src\\main.js',
    execPath:'c:\\Program Files\\nodejs\\node.exe'
})
alo.on('install',function(){
    alo.start();
})
alo.install();