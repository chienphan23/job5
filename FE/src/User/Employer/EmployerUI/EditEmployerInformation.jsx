import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const EditEmployerInformation = ({
    employerCurrent,
    filePhoto,
    setFilePhoto,
    fileBackground,
    setFileBackground,
}) => {
    const [backgroundURL, setBackgroundURL] = useState(null);
    useEffect(() => {
        if (fileBackground) {
          setBackgroundURL(
            typeof fileBackground === "object"
              ? URL.createObjectURL(fileBackground)
              : "http://localhost:8080/api/v1/files/" + employerCurrent?.background
          );
        }
      }, [fileBackground]);

    return (
        <>
            <div className="row">
                <div className=" col-lg-12">
                    <div
                        className="col-lg-12 background-setup"
                        style={{
                            backgroundImage: `url(${backgroundURL})`,
                            borderRadius: "16px",
                            backgroundColor: "rgb(112, 208, 255)",
                        }}
                    >
                        <div className="row">
                            <div style={{ height: "244px" }}></div>
                        </div>

                        <div
                            className="row"
                            style={{
                                backgroundColor: "rgba(126, 217, 231, 0.8)",
                                borderBottomLeftRadius: "16px",
                                borderBottomRightRadius: "16px",
                                padding: "24px",
                                boxSizing: "border-box",
                            }}
                        >
                            <div className="col-lg-3 text-center">
                                <div
                                    style={{
                                        overflow: "hidden",
                                    }}
                                >
                                    {typeof filePhoto === "object" ? (
                                        <img
                                            src={URL?.createObjectURL(
                                                filePhoto
                                            )}
                                            style={{
                                                width: "180px",
                                                borderRadius: "50%",
                                                height: "180px",
                                                objectFit: "cover",
                                            }}
                                        />
                                    ) : (
                                        <img
                                            src={`http://localhost:8080/api/v1/files/${employerCurrent?.photo}`}
                                            style={{
                                                width: "180px",
                                                borderRadius: "50%",
                                                height: "180px",
                                                objectFit: "cover",
                                            }}
                                        />
                                    )}
                                </div>
                            </div>
                            <div className="col-lg-9 text-white">
                                <h2 className="pl-3" style={{ height: "50%" }}>
                                    {employerCurrent?.employerName}
                                </h2>

                                <div className="row justify-content-around">
                                    <label
                                        htmlFor="filePhoto"
                                        className="btn main-color-bold col-lg-3 p-2 m-0"
                                        style={{ backgroundColor: "white" }}
                                    >
                                        Đổi ảnh đại diện
                                    </label>

                                    <input
                                        id="filePhoto"
                                        type="file"
                                        onChange={(e) =>
                                            setFilePhoto(...e.target.files)
                                        }
                                        accept="image/*"
                                        encType="multipart/form-data"
                                        className="d-none"
                                    />

                                    <label
                                        htmlFor="fileBackground"
                                        className="btn main-color-bold col-lg-3 p-2 m-0"
                                        style={{ backgroundColor: "white" }}
                                    >
                                        Đổi ảnh bìa
                                    </label>

                                    <input
                                        id="fileBackground"
                                        type="file"
                                        onChange={(e) =>
                                            setFileBackground(...e.target.files)
                                        }
                                        accept="image/*"
                                        encType="multipart/form-data"
                                        className="d-none"
                                    />

                                    <Link
                                        to={`/rank-up`}
                                        className="btn col-lg-3"
                                        style={{
                                            backgroundColor: "white",
                                        }}
                                    >
                                        <label
                                            className="mb-0 main-color-bold"
                                            style={{ cursor: "pointer" }}
                                        >
                                            Tăng hạng
                                        </label>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* <div className="row">
                            <div
                                style={{
                                    display: "flex",
                                    borderBottomLeftRadius: "16px",
                                    borderBottomRightRadius: "16px",
                                    padding: "24px",
                                    boxSizing: "border-box",
                                }}
                                className="main-background col-lg-12"
                            >
                                <div
                                    style={{
                                        borderRadius: "50%",
                                        overflow: "hidden",
                                        marginRight: "50px",
                                    }}
                                >
                                    {typeof filePhoto === "object" ? (
                                        <img
                                            src={URL.createObjectURL(filePhoto)}
                                            style={{
                                                width: "180px",
                                                height: "180px",
                                                objectFit: "cover",
                                            }}
                                        />
                                    ) : (
                                        <img
                                            src={`http://localhost:8080/api/v1/files/${employerCurrent?.photo}`}
                                            style={{
                                                width: "180px",
                                                height: "180px",
                                                objectFit: "cover",
                                            }}
                                        />
                                    )}
                                </div>
                                <div
                                    className="text-white w-50"
                                    // style={{
                                    //     display: "flex",
                                    //     flexDirection: "column",
                                    //     justifyContent: "center",
                                    // }}
                                >
                                    <h2 style={{ height: "50%" }}>
                                        {employerCurrent?.employerName}
                                    </h2>

                                    <div className="row">
                                        <label
                                            htmlFor="filePhoto"
                                            className="btn main-color-bold col-lg-4"
                                            style={{ backgroundColor: "white" }}
                                        >
                                            Đổi ảnh đại diện
                                        </label>

                                        <input
                                            id="filePhoto"
                                            type="file"
                                            onChange={(e) =>
                                                setFilePhoto(...e.target.files)
                                            }
                                            accept="image/*"
                                            encType="multipart/form-data"
                                            className="d-none"
                                        />

                                        <label
                                            htmlFor="fileBackground"
                                            className="btn main-color-bold col-lg-4"
                                            style={{ backgroundColor: "white" }}
                                        >
                                            Đổi ảnh bìa
                                        </label>

                                        <input
                                            id="fileBackground"
                                            type="file"
                                            onChange={(e) =>
                                                setFileBackground(
                                                    ...e.target.files
                                                )
                                            }
                                            accept="image/*"
                                            encType="multipart/form-data"
                                            className="d-none"
                                        />
                                        <Link to="">
                                            <label
                                                htmlFor="fileBackground"
                                                className="btn main-color-bold col-lg-4"
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                            >
                                                Tăng hạng
                                            </label>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};
