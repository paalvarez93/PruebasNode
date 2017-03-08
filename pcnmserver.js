var http=require('http');
var fs=require('fs');

http.createServer(function(request,response){
var url=request.url;
switch(url){
case '/':
    getStaticFileContent(response,'public/home.html','text/hmtl');
    break;
case 'about':
getStaticFileContent(response,'public/about.html','text/hmtl');
    break;
    case 'contact':
getStaticFileContent(response,'public/contact.html','text/hmtl');
    break;
default:
response.writeHead(404,{'Content-Type':'text/plain'});
response.end('404-Page not found');

}


}).listen(5244);
console.log("hola");
function getStaticFileContent(response,filepath,contentType){
fs.readFile(filepath,function(error,data){
if(error){
response.writeHead(500,{'Content-Type':'text/plain'});
response.end('500- Internal Server Error');
}
if(data){
response.writeHead('200',{'Content-Type':'text/html'});
response.end(data);

}


});


}