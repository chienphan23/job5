import { useLocation } from "react-router-dom";
import { useGetProvince } from "../API/useGetProvince";
import { ErrorText } from "./ErrorText";
import { LoadingPage } from "./LoadingPage";
import { useEffect, useState } from "react";

//Ở component cha const [provinceName, setProvinceName] = useState("")
export const ProvinceNameSelect = ({ provinceName, setProvinceName, errorProvince }) => {
    const { listProvince, isLoading } = useGetProvince();
    const location = useLocation();
    const [path, setPath] = useState("")

    const handleChangeSelect = (e) => {
        setProvinceName(e.target.value);
    };

    useEffect(() => {
        setPath(location.pathname)
        
      }, [location.pathname, path]);
    if (isLoading) {
        return <LoadingPage/>;
    }
    return (
        <>
            <select key="selectProvince"
                className="form-control padding-select outline-input border-select"
                id="exampleFormControlSelect1"
                onChange={(e) => handleChangeSelect(e)}
                value={provinceName ? provinceName : "-1"}
                name="selectProvince"
                
            >
                <option key={"-1"} value={"-1"} disabled selected>
                    Chọn thành phố
                </option>
                
                {path !== "/register" ?
                    <option value={''}>Tất cả thành phố</option> : null
                }
                {listProvince.data.map((i, index) => (
                    <option key={i.provinceName} value={i.provinceName}>
                        {i.provinceName}
                    </option>
                ))}
            </select>
            <ErrorText errorText={errorProvince}/>
            </>
    );
};
