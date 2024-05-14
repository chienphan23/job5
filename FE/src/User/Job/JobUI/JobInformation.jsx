export const JobInformation = ({ label,inputValue, onChangeFns }) => {
    return (
        <>
            <div className="col-lg-12 form-group">
                <div className="row mb-3">
                    <div className="col-lg-12">
                        <label style={{ fontSize: "18px", lineHeight: "38px" }}>
                            {label}:{" "}
                        </label>
                    </div>
                    <div className="col-lg-12">
                        <textarea
                            className="form-control outline-input border-select"
                            value={inputValue}
                            onChange={onChangeFns}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
