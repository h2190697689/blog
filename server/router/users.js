const Router = require("koa-router");
const router = new Router();
const {getAllUsers} = require("../control/control")

router.get("/getAllUsers",async (ctx, next)=>{
    ctx.body=await getAllUsers();
})

module.exports=router;
