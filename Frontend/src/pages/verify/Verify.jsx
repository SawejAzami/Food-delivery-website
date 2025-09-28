import { useContext } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { storeContex } from "../../Context/StoreContextProvider"
import axios from "axios"
import { useEffect } from "react"


const Verify=()=>{
    const [searchParam,setSerachParam]=useSearchParams()
    const success=searchParam.get("success")
    const orderId=searchParam.get("orderId")
    const {url}=useContext(storeContex)
    const naviagte=useNavigate()

    const verifyPayment=async()=>{
        const response=await axios.post(url+"/api/order/verify",{success,orderId})
        if(response.data.success){
            naviagte("/myoreders")
        }else{
            naviagte("/")
        }
    }
    useEffect(()=>{
        verifyPayment();
    },[])
    return(
        <>
            <div className="min-h-[60vh] grid ">
                <div className="w-[100px] h-[100px] border rounded border-t-orange-500">

                </div>
            </div>
        </>
    )
}
export default Verify