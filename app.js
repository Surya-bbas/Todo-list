const express = require('express');
const bodyParser = require('body-parser');
const date = require(`./date`);

const app = express();

app.set(`view engine`,`ejs`)

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(`public`))

let items=['eat','sleep',`go gym`]
let workItems=[]
const today=date.getDate()

app.get('/',(req,res)=> {
 
        
    res.render(`list`,{
        title:today,
        items:items        
    })
          

} )

app.get('/work', (req, res) => {

  res.render('list',{title:`Work`,items:workItems})

})

app.post(`/post`,(req,res)=>{

    let newItem=req.body.newItem
    let pageIdentifier=req.body.button
    console.log(newItem)
    if (newItem===``) {
        console.log(newItem);
        console.log(`hi`);
        res.redirect(`/`)

    }
    
    else if (pageIdentifier===`Work`) {
        
        workItems.push(newItem)
        res.redirect(`/work`)
    }
    else{
        items.push(newItem)
        res.redirect(`/`)
    }

    console.log(req.body);
       
})

app.listen(process.env.PORT ||3000,() => console.log('the server is running in port 3000'))

