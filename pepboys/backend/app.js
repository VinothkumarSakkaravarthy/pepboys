const express = require("express");

const app = express();

app.use("/api/posts",(req,res,next)=>{
  console.log("First middleware!");
  // next();
  const posts = [
    {
      id: "fadsdasd123",
      title:"First server side post",
      content: "This is coming fromt the server"
    },
    {
      id: "khadgsf123",
      title:"Second server side post",
      content: "This is coming fromt the server!"
    },
  ];
  res.status(200).json({
    message: "Post fetched successfully!",
    posts: posts
  });

});

// app.use((req,res,next)=>{
// res.send("Hello from express!");
// });

module.exports = app;
