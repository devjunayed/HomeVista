export async function GET(req){
    try{
        const userId = req.nextUrl.searchParams.get("userId");
        
    }catch(err){
        console.log(err);
    }
}