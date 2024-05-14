import { useNavigate } from "react-router-dom";
import { apiPostLogOut } from "../../System/Login/apiLogout";
import { useGetIn4 } from "../../API/useGetIn4";
import { aliases } from "@fortawesome/free-brands-svg-icons/fa42Group";
export const AdminHeader = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetIn4();
  const onClickLogOut = async () => {
    await apiPostLogOut();
    navigate("/login");
  };
  if (isLoading) return <>Loading</>;
  return (
    <>
      {/* {console.log(data)} */}
      <div className="mainheader-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3">
              <div
                className="logo"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <a href="index.html">
                  <img src="/logo.png" alt="logo" />
                </a>
                <h3
                  style={{
                    fontWeight: "600",
                    textShadow: "0.1em 0.1em 0.2em #1e86c4",
                  }}
                >
                  Job 5
                </h3>
              </div>
            </div>
            <div className="col-md-9 clearfix text-right">
              <div className="d-md-inline-block d-block mr-md-4">
                <ul className="notification-area">
                  <li className="dropdown">
                    <i
                      className="ti-bell dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      <span>2</span>
                    </i>
                    <div className="dropdown-menu bell-notify-box notify-box">
                      <span className="notify-title">
                        You have 3 new notifications <a href="#">view all</a>
                      </span>
                      <div className="nofity-list">
                        <a href="#" className="notify-item">
                          <div className="notify-thumb">
                            <i className="ti-key btn-danger"></i>
                          </div>
                          <div className="notify-text">
                            <p>You have Changed Your Password</p>
                            <span>Just Now</span>
                          </div>
                        </a>
                        <a href="#" className="notify-item">
                          <div className="notify-thumb">
                            <i className="ti-comments-smiley btn-info"></i>
                          </div>
                          <div className="notify-text">
                            <p>New Commetns On Post</p>
                            <span>30 Seconds ago</span>
                          </div>
                        </a>
                        <a href="#" className="notify-item">
                          <div className="notify-thumb">
                            <i className="ti-key btn-primary"></i>
                          </div>
                          <div className="notify-text">
                            <p>Some special like you</p>
                            <span>Just Now</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="clearfix d-md-inline-block d-block">
                <div className="user-profile m-0">
                  <h4 style={{ fontSize: "16px", paddingRight: "3px" }}>
                    Chào
                  </h4>
                  <h4
                    className="user-name dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    {data?.data?.userName}
                    <i className="fa fa-angle-down"></i>
                  </h4>

                  <div
                    className="dropdown-menu"
                    style={{ border: "1px solid #ccc" }}
                  >
                    <button className="dropdown-item" onClick={onClickLogOut}>
                      Đăng xuất
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
