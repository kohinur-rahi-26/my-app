 export const instant = false
 export const AllGymProducts = async () =>{
    const  res = await fetch("https://api.abcz.workers.dev/api/fitlog",{cache : "no-store"})
    return res.json()
}
export const getSingleProducts = async(id :string)=>{
    const res= await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`)
    return res.json()
}
