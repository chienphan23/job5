
//Ở component cha const [provinceName, setProvinceName] = useState("")
export const ExperienceSelect = ({ experience, setExperience }) => {

    const handleChangeSelect = (e) => {
        setExperience(e.target.value);
    };

    return (
        <>
            <select key="selectExperience"
                className="form-control padding-select outline-input border-select"
                id="exampleFormControlSelect1"
                onChange={(e) => handleChangeSelect(e)}
                value={experience ? experience : "-1"}
                name="selectExperience"
                
            >
                <option key={"-1"} value={"-1"} disabled selected>
                    Chọn kinh nghiệm
                </option>
<<<<<<< HEAD
                  <option value={-2}>Tất cả kinh nghiệm</option>
                  {/* nếu là 6 => năm kinh nghiệm = 0 */}
                  <option value={6}>Chưa có kinh nghiệm</option>
                  <option value={1}>1 năm</option>
=======
                  <option value={0}>Tất cả kinh nghiệm</option>
                  <option value={1}>Dưới 1 năm</option>
>>>>>>> cb8abfcd526acec9924c808f0c58d2f994662a1f
                  <option value={2}>2 năm</option>
                  <option value={3}>3 năm</option>
                  <option value={4}>4 năm</option>
                  <option value={6}>5 năm</option>
                  <option value={5}>Trên 5 năm</option>
            </select>
            </>
    );
};
