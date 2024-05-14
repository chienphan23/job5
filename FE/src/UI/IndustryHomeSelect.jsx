import { Link, useLocation } from "react-router-dom"
import { useGetIndustry } from "../API/useGetIndustry"
import { ErrorText } from "./ErrorText"
import { LoadingPage } from "./LoadingPage"
import { useEffect, useState } from "react"

// Ở component cha const [arrayIndustryId, setArrayIndustryId] = useState([])
// const [arrayIndustrys, setArrayIndustrys] = useState([]) 
export const IndustryHomeSelect = ({ listIndustry, industry, setIndustry }) => {
    const location = useLocation();
    const [path, setPath] = useState("")


    const handleAddArrayIndustrys = (e) => {
        setIndustry(e.target.value)
    }

    useEffect(() => {
        setPath(location.pathname)

    }, [location.pathname, path]);

   
    return (
        <>

            <div className="form-group">
                <select key={"selectIndustry"}
                    className="form-control padding-select outline-input border-select text-center"
                    id="exampleFormControlSelect1"
                    onChange={e => handleAddArrayIndustrys(e)}
                    value={industry ? industry : 0}
                >
                    <option key={"0"} value={0}>Chọn Ngành nghề liên quan</option>
                    {listIndustry.data.map((i) =>
                        <option key={i.industryId} value={i.industryId}>{i.industryName}</option>
                    )}
                </select>
            </div>
            
        </>
    )
}