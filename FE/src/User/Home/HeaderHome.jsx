export const HeaderHome = () => {
  return (
    <>
      <header>
        <div
          className="container-fluid"
          style={{
            backgroundImage: `url("b4.png")`,
            backgroundPositionY: "bottom",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "500px",
            margin: "0",
            padding: "0",
            paddingTop: "100px",
          }}
        >
          <h1 style={{ textAlign: "center", color: "white" }}>
            {" "}
            Chào mừng bạn đến với JOBFIVE
          </h1>
          <h2
            style={{
              textAlign: "center",
              color: "white",
              fontSize: "14px",
              fontWeight: "300",
              marginTop: "20px",
            }}
          >
            <i>Công việc ổn định, cải thiện cuộc sống.</i>
          </h2>
        </div>
      </header>
    </>
  );
};
