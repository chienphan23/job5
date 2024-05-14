import { useState } from "react";

//Ở component cha const [provinceName, setProvinceName] = useState("")
export const SalarySelect = ({ minSalary, setMinSalary, maxSalary, setMaxSalary }) => {
    const handleChangeSelect = (e) => {
        console.log(e.target.value)
        if(e.target.value == 1){
            console.log("123")
            setMinSalary(0)
            setMaxSalary(10000000)
        }
        if(e.target.value == -1 || e.target.value == 0){
            setMinSalary(0)
            setMaxSalary(0)
        }
        if(e.target.value == 2){
            setMinSalary(10000000)
                setMaxSalary(20000000)
        }
        if(e.target.value == 3){
            setMinSalary(20000000)
                setMaxSalary(30000000)
        }
        if(e.target.value == 4){
            setMinSalary(30000000)
                setMaxSalary(40000000)
        }
        if(e.target.value == 5){
            setMinSalary(40000000)
                setMaxSalary(50000000)
        }
        if(e.target.value == 6){
            setMinSalary(50000000)
                setMaxSalary(0)
        }
        
     };

    return (
        <>
            <select key="selectSalary"
                className="form-control padding-select outline-input border-select"
                id="exampleFormControlSelect1"
                onChange={(e) => handleChangeSelect(e)}
                name="selectSalary"
                
            >
                <option key={-1} value={-1} disabled selected>
                    Chọn mức lương
                </option>
                  <option value={0}>Tất cả mức lương</option>
                  <option value={1}>Dưới 10 triệu</option>
                  <option value={2}>10 - 20 triệu</option>
                  <option value={3}>20 - 30 triệu</option>
                  <option value={4}>30 - 40 triệu</option>
                  <option value={5}>40 - 50 triệu</option>
                  <option value={6}>Trên 50 triệu</option>
            </select>
            </>
    );
};
