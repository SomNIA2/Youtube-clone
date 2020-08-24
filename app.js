import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));
/*
const betweenHome = (req, res, next) => {
  console.log("Between");
  next();
};
app.use(betweenHome);
*/
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
//누군가 내 파일을 불러올 때(import) app object를 주겠다는 의미
//app은 우리가 위에서 쓴 app. 이런것들이 모두 해당됨
