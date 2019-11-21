import express from "express";
import morgan from "morgan"; // 로깅하기_모슨일을했는지 기록 어떤접속이고 어디에접속하는지알수있음
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();

app.use(cookieParser()); // 쿠키에 유저 정보를 저장한다. 왜냐? session을 다루기위해서
app.use(bodyParser.json()); // form을 다룰수있어야한다.
app.use(bodyParser.urlencoded()); // form을 다룰수있어야한다.
app.use(morgan("combined"));
app.use(helmet());

app.use(routes.home,globalRouter);// routes.home이 의미하는 것은 localhost:3000/ 이다. globalRouter는 /이후에 쓰이는 url에 따라 res가 달라진다.
app.use(routes.users,userRouter);// routes.users가 의미하는 것은 localhost:3000/users이다. userRouters는 /users/이후에 쓰이는 url에 따라 res가 달라진다.
app.use(routes.videos,videoRouter);// routes.videos가 의미하는 것은 localhost:3000/videos이다. videoRouter는 /videos/이후에 쓰이는 url에 따라 res가 달라진다.

export default app;