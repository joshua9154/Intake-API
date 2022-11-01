const express = require('express');
const app= express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());
const patients =[
    {name: 'Anson', age :22},
    {name: 'Sarah', age :32},
]

app.get('/',(req,res)=>{
    res.send({
        msg:'Hello',
        patients:{}
    })
})

app.get('/patients',(req,res)=>{
    res.send(patients);
})

app.get('/patients/:name',(req,res)=> {
    const {name} = req.params;
    const patient = patients.find((patient) => patient.name === name);
    if (patient) res.status(200).send(patient);
    else res.status(404).send('Not Found')
})

app.post('/',(req,res)=>{
    const patient= req.body
    patients.push(patient)
    res.status(201).send('Created User')
})

app.listen(3000,()=>{
    console.log('server is running on port 3000')
})
