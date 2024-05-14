import { IndustryCard } from "./HomeUI/IndustryCard";
const mainColor = "#7ed9e7";
export const IndustryHome = () => {
  return (
    <>
      <section
        className="section-main mt-5"
        style={{ backgroundColor: `${mainColor}` }}
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
                Danh mục việc làm
              </h2>
            </div>
          </div>

          <div className="row mt-5 row-gap">
            <IndustryCard/>
            <IndustryCard/>
            <IndustryCard/>
          </div>
        </div>
      </section>
    </>
  );
};
