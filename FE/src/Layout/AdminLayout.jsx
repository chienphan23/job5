import { useEffect } from "react"
import { AdminFooter } from "../Admin/AdminComponent/AdminFooter"
import { AdminHeader } from "../Admin/AdminComponent/AdminHeader"
import { AdminSidebar } from "../Admin/AdminComponent/AdminSidebar"
import { AdminWrap } from "../Admin/AdminComponent/AdminWrap"
import {Outlet} from "react-router-dom"

export const AdminLayout = () => {
    
    return (
        <>
           <AdminWrap>
            <AdminHeader/>
            <AdminSidebar/>
            <Outlet/>
            <AdminFooter/>
           </AdminWrap>
        </>
    )
}