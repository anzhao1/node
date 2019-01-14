//引入hrrp模块
const http = require("http");
const http1 = require("http");
//通过http模块创建服务器
const server = http.createServer(function(request,response){
    response.write("我是唱歌的");
    response.end()
})
server.listen(999);

const server1 = http1.createServer(function(request,response){
    response.write("我是看电影");
    response.end();
})
server1.listen(8888);