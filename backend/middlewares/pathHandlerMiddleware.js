export const pathHandlerMiddleware = (req,res,next)=>{
    res.send(404).json({message:"PAGE NOT FOUND"})
    next();
}