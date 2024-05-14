import { EmployerCard } from "./HomeUI/EmployerCard";
import { useGetListEmployers } from "../Employer/EmployerAPI/useGetListEmployers";

const supColor = "#f6f6f6";
export const EmployerHome = () => {
    const { listEmployers, isLoading } = useGetListEmployers();

    if (isLoading) return <div>Loading</div>;

    return (
        <>
            <section
                className="section-main"
                style={{ backgroundColor: { supColor } }}
            >
                <div className="container">
                    <div className="row row-gap">
                        <div className="col-lg-12">
                            <h2
                                style={{
                                    textAlign: "center",
                                    color: "#2B3940",
                                    fontWeight: "800",
                                }}
                            >
                                Nhà tuyển dụng nổi bật
                            </h2>
                        </div>
                    </div>

                    <div className="row mt-5 row-gap">
                        {listEmployers?.data?.map((employer) => {
                            return (
                                <EmployerCard
                                    key={employer.employerId}
                                    employer={employer}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};
