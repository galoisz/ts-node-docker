import express, { Application, Request, Response, NextFunction } from "express"
let portNo: number = 4000;
const app = express();
app.set('port',  portNo);
app.listen(portNo, () => {
  console.log(`server running on port ${portNo}`);
});
app.get("/", (req: Request, res: Response) => {
  res.send("TS App is Running")
})
