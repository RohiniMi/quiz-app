export const pathHandlerMiddleware = (req,res)=>{
    res.send(404).json({message:"PAGE NOT FOUND"})
}