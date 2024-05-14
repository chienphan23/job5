export const EmployerInformation = ({ employerCurrent }) => {
    return (
        <>
            {/* {console.log(employerCurrent)} */}
            <div className="row">
                <div className=" col-lg-12">
                    <div
                        className="col-lg-12 background-setup"
                        style={{
                            backgroundImage: `url(http://localhost:8080/api/v1/files/${employerCurrent?.background})`,
                            borderRadius: "16px",
                            backgroundColor: "#70d0ff",
                        }}
                    >
                        <div className="row">
                            <div style={{ height: "244px" }}></div>
                        </div>
                        <div className="row">
                            <div
                                style={{
                                    display: "flex",
                                    borderBottomLeftRadius: "16px",
                                    borderBottomRightRadius: "16px",
                                    padding: "24px",
                                    boxSizing: "border-box",
                                    backgroundColor: "rgba(126, 217, 231, 0.8)",
                                }}
                                className="col-lg-12"
                            >
                                <div
                                    style={{
                                        borderRadius: "50%",
                                        overflow: "hidden",
                                    }}
                                >
                                    <img
                                        src={`http://localhost:8080/api/v1/files/${employerCurrent?.photo}`}
                                        style={{
                                            width: "180px",
                                            height: "180px",
                                            objectFit: "cover",
                                        }}
                                        alt=""
                                    />
                                </div>
                                <div
                                    className="text-white ml-3"
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                    }}
                                >
                                    <h2 style={{ height: "50%" }}>
                                        {employerCurrent?.employerName}
                                    </h2>

                                    <div>
                                        <button
                                            className="btn main-color-bold col-lg-12"
                                            style={{ backgroundColor: "white" }}
                                        >
                                            {" "}
                                            + Theo dõi công ty
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
