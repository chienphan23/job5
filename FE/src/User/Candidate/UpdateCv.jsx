import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useCreateCv } from "./CandidateAPI/useCreateCv";
import { LoadingPage } from "../../UI/LoadingPage";
import { useUser } from "../../Context/UseContext";
import { useGetOneCv } from "./CandidateAPI/useGetOneCv";
import { useUpdateCv } from "./CandidateAPI/useUpdateCv";
import { useDeleteCv } from "./CandidateAPI/useDeleteCv";

export default function UpdateCv() {
    // const check = false;
    const navigate = useNavigate();
    const { id } = useParams();
    const [cvFile, setCvFile] = useState({});
    const { user, isLoadingUser } = useUser();
    const { cv, isLoading: isLoadingCv } = useGetOneCv(id);
    let hadId = cv?.data.cvId;
    const { createCv, isLoading } = useCreateCv();
    const { updateCv, isLoading: isLoadingUpdate } = useUpdateCv();
    const { deleteCv, isLoading: isLoadingDelete } = useDeleteCv();
    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("candidateId", user?.data.candidateId);
        formData.append("file", cvFile);
        formData.append("mainCV", 0);
        if (id) {
            updateCv({ id, formData });
        } else {
            createCv(formData);
        }
    }
    async function handleDeleteFile(id) {
        await deleteCv(id);
    }
    if (
        isLoading ||
        isLoadingUser ||
        isLoadingCv ||
        isLoadingUpdate ||
        isLoadingDelete
    )
        return <LoadingPage />;
    return (
        <>
            <div className="px-2">
                <div className="py-3 pl-2 d-flex align-items-center">
                    <i
                        className="fa fa-angle-left"
                        style={{
                            fontSize: "20px",
                            cursor: "pointer",
                        }}
                        onClick={() => navigate(-1)}
                    ></i>
                    <h3 className="ml-2 text-dark">Tạo hồ sơ đính kèm</h3>
                </div>
                <div className="shadow border border-light bg-white rounded">
                    <div className="d-flex align-items-center justify-content-between py-2 border-bottom border-light px-3">
                        <div
                            className="d-flex align-items-center text-dark w-100"
                            style={{ fontWeight: "600" }}
                        >
                            <span
                                className="text-body font-weight-bold "
                                style={{ fontSize: "18px" }}
                            >
                                Tải CV đính kèm
                            </span>
                        </div>
                    </div>

                    <div className="d-block py-2 px-3">
                        {hadId ? (
                            <div
                                className="d-flex align-items-center justify-content-between p-2 border rounded w-100"
                                style={{ height: "3rem" }}
                            >
                                <div
                                    className="d-flex align-items-center w-75"
                                    style={{}}
                                >
                                    <div className="mr-2">
                                        <i className="fa fa-file"></i>
                                    </div>
                                    <Link target="_blank">
                                        <div
                                            style={{
                                                color: "#414045",
                                                fontSize: "14px",
                                            }}
                                        >
                                            {cv?.data.cvFile}
                                        </div>
                                    </Link>
                                </div>
                                <button
                                    className="text-danger rounded-circle d-flex align-items-center justify-content-center border-0"
                                    style={{
                                        backgroundColor: "#f8f6fb",
                                        fontSize: "12px",
                                        width: "40px",
                                        height: "40px",
                                    }}
                                    onClick={() =>
                                        handleDeleteFile(cv?.data.cvId)
                                    }
                                >
                                    <i className="fa fa-lg fa-trash"></i>
                                </button>
                            </div>
                        ) : (
                            ""
                        )}
                        <form
                            encType="multipart/form-data"
                            onSubmit={handleSubmit}
                        >
                            <div className="d-block mt-3 d-flex align-items-center mb-3">
                                <label
                                    className="d-block border border-light text-info d-flex align-items-center justify-content-center bg-light rounded-lg m-0"
                                    style={{
                                        cursor: "pointer",
                                        fontSize: "14px",
                                        fontWeight: "600",
                                        gap: "8px",
                                        width: "110px",
                                        height: "36px",
                                    }}
                                    htmlFor="cv_file"
                                >
                                    <i className="fa fa-lg fa-upload mx-2"></i>
                                    <input
                                        type="file"
                                        name="cv_file"
                                        id="cv_file"
                                        onChange={(e) =>
                                            setCvFile(e.target.files[0])
                                        }
                                        accept=".pdf"
                                        encType="multipart/form-data"
                                        hidden
                                    />
                                    <span>Tải File</span>
                                </label>
                                <p className="p-1 w-100">{cvFile.name}</p>

                                <button
                                    type="submit"
                                    className="btn border ml-auto"
                                >
                                    Lưu
                                </button>
                            </div>
                        </form>
                        <p
                            className="d-block text-secondary"
                            style={{ fontSize: "12px" }}
                        >
                            Định dạng file .doc, .docx, .pdf dung lượng nhỏ hơn
                            2 MB
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
