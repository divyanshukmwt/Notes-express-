const express = require("express");

const app = express();
app.use(express.json());

let notes = [];

app.get("/notes", (req, res) => {
  res.json(notes);
});

app.post("/notes", (req, res) => {
  console.log(req.body);
  notes.push(req.body);
  res.json({
    message: "note created sucessfully",
  });
});

app.delete("/notes/:index",(req,res)=>{
    const index = req.params.index
    delete notes[index]
    res.json({
        message:"note deleted successfully",
    })
})

app.patch("/notes/:index",(req,res)=>{
    const index = req.params.index
    const { title, desc } = req.body;

    notes[index].title = title;
    notes[index].desc = desc;

    res.json({
        message:"note updated succesfully",
    })
})

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
