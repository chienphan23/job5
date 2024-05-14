import { InputRequire } from "./InputRequire"

export const InputGroup = ({label, placeholder,inputValue, onChangeFns, colLabel, colInput, typeInput, require}) => {
    return(
        <div className="col-lg-12 form-group">
            <div className="row mb-3">
                <div className={`col-lg-${colLabel}`}>
                    <label style={{fontSize: "18px",lineHeight: "38px"}}>{label}: {require && <InputRequire/>}</label>
                </div>
                <div className={`col-lg-${colInput}`}>
                <input type={typeInput ? typeInput : "text"}
                        className="form-control outline-input border-select"
                        placeholder={placeholder}
                        style={{ fontSize: "16px" }}
                        value={inputValue}
                        onChange={(e) => onChangeFns(e)}
                        />
                </div>
            </div>
        </div>
    )
}