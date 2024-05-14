import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const LineButtonSubmit = ({col1, col2}) => {
    return (
        <>
            <div className="row mt-4">
                <div className={`col-lg-${col1 ? col1 : "8"}`}>
                    <button className="btn btn-info" style={{width: "100%", fontWeight: "650"}}>
                    <i style={{ padding: "0 5px 0 0", fontSize: "18px" }}><FontAwesomeIcon icon={faPaperPlane} className="me-2" /></i>
                        Ứng tuyển ngay
                    </button>
                </div>
                <div className={`col-lg-${col2 ? col2 : "4"}`}>
                    <button className="btn btn-outline-info" style={{width: "100%", fontWeight: "650"}}>Lưu tin</button>
                </div>
            </div>
        </>
    )
}