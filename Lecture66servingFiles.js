const http=require('http')
const fileContent=fs.readFileSync('Lecture54Quiz.html');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.end(fileContent);
});

server.listen(8000,'127.0.0.1',()=>{
    console.log("Listening on port 8000");
});