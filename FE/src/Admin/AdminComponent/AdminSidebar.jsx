export const AdminSidebar = () => {
  return (
    <>
      <div className="header-area header-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9  d-none d-lg-block">
              <div className="horizontal-menu">
                <nav>
                  <ul id="nav_menu">
                    <li className="active">
                      <a>
                        <i className="ti-server"></i>
                        <span>Quản lý hệ thống</span>
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="/admin">Quản lý người dùng</a>
                        </li>
                        <li>
                          <a href="/admin/approveEmployer">
                            Danh sách tuyển dụng chờ
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="col-12 d-block d-lg-none">
              <div id="mobile_menu"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
