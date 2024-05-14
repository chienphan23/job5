import { Link } from "react-router-dom"

export const CategoryTag = ({industry}) => {
    return(
        <>
            <div className="bg-info mb-3" style={{padding: "3px 6px", borderRadius: "8px",margin: "0 8px"}}>
                    <Link to={"#"} ><p className="text-white">{industry}</p></Link>
            </div>
        </>
    )
}