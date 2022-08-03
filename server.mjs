// // import http from "http";
// // import url from "url";
// // import util from "url";
// // import os from "os";
// // import{getDateTime} from "./time/index.mjs";

// // http
// // .createServer((req, res)=>{
// //     const requiredpath = req.url;
// //     // const parsed = url.parse(requiredpath);
// //     const platform = os.platform();
// //     const architecture = os.arch();


// // //    const result =util.format("your os platform is    %s     and architecture is       %s     ", platform,architecture);
// // const response = util.format("your is looking for %s query is Application is running on %s and %s, the current time is %s", requestPath, platform, arch, getDateTime())

// //     res.end(response);
// // })
// // .listen(3010);

// import express from "express";

// const app = express();

// // POST         Create
// // GET          Read
// // PUT PATCH    Update 
// // DELETE       Delete

// app.get("/", (request, response)=>{
//     response.send("Hello World!!!");
// })

// app.get("/products", (request, response)=>{
//     response.send("This is the products page.");
// })

// app.listen(3000, ()=>{
//     console.log("Server started at port 3000");
// })

import express from "express";
import fs from "fs";

const app = express();

app.use(express.json())

// POST         Create
// GET          Read
// PUT PATCH    Update
// DELETE       Delete

app.get("/", (request, response) => {
  fs.readFile("./phonebook.json", (err, data) => {
    if (err) {
      response.status(500).send("Internal Server Error.");
      return false;
    }
    response.setHeader("content-type", "application/json");
    response.send(data);
  });
});

app.post("/", (request, response) => {
  fs.readFile("./phonebook.json", (err, data) => {
    if (err) {
      response.status(500).send("Internal Server Error.");
      return false;
    }
    const content = JSON.parse(data);

    content.push(request.body);

    fs.writeFile("./phonebook.json", JSON.stringify(content), () => {
      response.send(content);
    });
  });
});

app.get("/products", (request, response) => {
  response.send("This is the products page.");
});

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
