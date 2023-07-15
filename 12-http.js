const http = require('http');

const server = http.createServer((req,res)=>{
    //console.log(req);
    if (req.url==='/'){
        res.end('Welcome to our Page !!!')
    }
    else if (req.url === '/about'){
        res.end('This is the about page ')
    }
    res.end(`
    
    <h1> Oops!</h1>
    <p> We can't seem to find that page!! </p>
    
    <a href='/'>Go Back Home</a>`)

})
server.listen(5000)