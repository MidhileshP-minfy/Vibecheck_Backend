import express from "express"
const app=express()

app.use(express.json());


const sampleVibe=[
    {id:1,name:"Midhilesh"},
    {id:2,name:"Yagami"},
    {id:3,name:"Kirito"}
]



app.get('/',(req,res)=>{
    res.status(200).send("Welcome User");
})

app.get('/api/v1/vibes',(req,res)=>{
    res.status(200).json(sampleVibe);
})

app.get('/api/v1/vibes/:id',(req,res)=>{
    const dataid = parseInt(req.params.id);
    const vibe = sampleVibe.find(v => v.id === dataid);

    if (!vibe) {
     return res.status(404).json({ "success": false, "message": "That vibe is off the grid, not found." });
    }



    res.status(200).json(vibe);
})

const port =process.env.port||3000;

app.listen(port,()=>{
    console.log(`🚀 Server blasting off on port ${port}`);
    
})