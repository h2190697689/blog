const Koa = require("koa");
const app = new Koa();
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const userRouter = require("./router/users");

app.use(async (ctx,next)=>{
    ctx.body = "hello mysql";
    ctx.set('Access-Control-Allow-Origin', '*');
    await next();
})
app.use(bodyParser());
let router = new Router();
router.use("/user",userRouter.routes(),userRouter.allowedMethods());
app.use(router.routes()).use(router.allowedMethods());
app.listen(3001,()=>{
    console.log('服务已经在3001端口启动');
})



