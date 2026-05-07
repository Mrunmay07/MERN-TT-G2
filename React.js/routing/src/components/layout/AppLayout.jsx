import { Outlet,  useNavigation } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import { ClipLoader } from "react-spinners"

function AppLayout(){
   const navigation = useNavigation()
   if(navigation.state === 'loading'){
    return <ClipLoader />
   }

    return(
        <>
           <Header/>
           <Outlet/>
           <Footer/> 
        </>
    )
}

export default AppLayout