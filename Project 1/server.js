const express = require('express');
const app = express();
const bodyParser  = require('body-parser');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


const courses = [
    {id:1, name:'course 1'},
    {id:2, name:'course 2'},
    {id:3, name:'course 3'}
];


//testing
app.get('/',function(req,res){
    res.send('Hello World.')
});

// get all
app.get('/api/courses',function(req,res){
    res.send(courses);
});

//get by id
app.get('/api/courses/:id',function(req,res){
    //validations
    const course = courses.find(c=>c.id === parseInt(req.params.id));
    if(!course){
        return res.status(400).send('There is no Id found...');
    }
      
    res.send(course);
});

//create 
app.post('/api/courses',function(req,res){
    //validation
    if(!req.body.name || req.body.name.length <3)
        return res.status.send('The course name is not valid');

    const course={
        id:courses.length+1,
        name:req.body.name
    };
    courses.push(course);
    res.send(course);
});

// update by id
app.put('/api/courses/:id', function(req,res){
    //validation
    const course = courses.find(c=>c.id === parseInt(req.params.id));
    if(!course){
        return res.status(400).send('There is no Id found...');
    } else if(!req.body.name || req.body.name.length <3) {
        return res.status.send('The course name is not valid');
    }
    
    course.name = req.body.name;
    res.send(course);

});

// Delete by ID
app.delete('/api/courses/:id',(req,res)=>{
    //validation
    const course = courses.find(c=>c.id === parseInt(req.params.id));
    if(!course){
        return res.status(400).send('There is no Id found...');
        }
    
        const index= courses.indexOf(course);
        courses.splice(index,1);
        res.send(courses);
});

const port = 8001;
app.listen(port,function(){
    console.log(`Connecting to port ...${port} `);
});