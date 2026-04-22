export const pathHandlerMiddleware = (req,res)=>{
    res.status(404).json({message:"PAGE NOT FOUND"})
}