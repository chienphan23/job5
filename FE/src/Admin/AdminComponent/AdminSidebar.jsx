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
                    <li>
                      <a>
                        <i className="ti-server"></i>
                        <span>Quản lý hệ thống</span>
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="/admin">Quản lý người dùng</a>
                        </li>
                        <li>
                          <a href="/admin/industry">Quản lý ngành nghề</a>
                        </li>
                        <li>
                          <a href="/admin/approveEmployer">
                            Danh sách tuyển dụng chờ
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/admin/chart">
                        <i className="ti-layout-sidebar-left"></i>
                        <span>Thống kê</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-12 d-block d-lg-none">
              <div id="mobile_menu">
                <div className="slicknav_menu">
                  <a
                    href="#"
                    aria-haspopup="true"
                    role="button"
                    className="slicknav_btn slicknav_collapsed"
                  >
                    <span className="slicknav_menutxt">MENU</span>
                    <span className="slicknav_icon">
                      <span className="slicknav_icon-bar"></span>
                      <span className="slicknav_icon-bar"></span>
                      <span className="slicknav_icon-bar"></span>
                    </span>
                  </a>
                  <ul
                    className="slicknav_nav slicknav_hidden"
                    aria-hidden="true"
                    role="menu"
                  >
                    <li className="slicknav_parent slicknav_collapsed">
                      <a
                        href="#"
                        role="menuitem"
                        aria-haspopup="true"
                        className="slicknav_item slicknav_row"
                      >
                        <a href="javascript:void(0)">
                          <i className="ti-dashboard"></i>
                          <span>dashboard</span>
                        </a>
                        <span className="slicknav_arrow">►</span>
                      </a>
                      <ul
                        className="submenu slicknav_hidden"
                        role="menu"
                        aria-hidden="true"
                      >
                        <li>
                          <a href="index.html" role="menuitem">
                            ICO dashboard
                          </a>
                        </li>
                        <li>
                          <a href="index2.html" role="menuitem">
                            Ecommerce dashboard
                          </a>
                        </li>
                        <li>
                          <a href="index3.html" role="menuitem">
                            SEO dashboard
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
