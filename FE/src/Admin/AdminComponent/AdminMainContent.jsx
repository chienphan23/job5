import React, { useState } from "react";
import { useGetUser } from "../AdminAPI/use/useGetUser";
import DataTable from "react-data-table-component";
import styled from "styled-components";
import "../documentation/css/style.css";
import { apiBlockUser } from "../AdminAPI/apiBlockUser";
import { useNavigate } from "react-router-dom";
import DeleteUserModal from "./DeleteUserModal";
import { useDeleteUser } from "../AdminAPI/use/useDeleteUser";
import { useBlockUser } from "../AdminAPI/use/useBlockUser";
import ChartComponent from "./chart/ChartComponent";

const TextField = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;

  &:hover {
    cursor: pointer;
  }
`;

const ClearButton = styled.button`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 34px;
  width: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Select = styled.select`
  height: 32px;
  border-radius: 3px;
  border: 1px solid #e5e5e5;
  padding: 0 16px;
`;

const FilterComponent = ({ filterText, onFilter }) => (
  <>
    <TextField
      id="search"
      type="text"
      placeholder="Nhập tên người dùng"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />

    <ClearButton type="button" className="btn btn-primary">
      <i className="ti-search"></i>
    </ClearButton>
  </>
);

const RoleFilterComponent = ({ onRoleChange }) => (
  <>
    <Select
      onChange={onRoleChange}
      style={{ height: "32px", borderRadius: "3px", marginRight: "10px" }}
      defaultValue=""
    >
      <option value="">Quyền</option>
      <option value="admin">Admin</option>
      <option value="candidate">Candidate</option>
      <option value="employer">Employer</option>
    </Select>
  </>
);

const StatusFilterComponent = ({ onStatusChange }) => (
  <Select
    onChange={onStatusChange}
    style={{ height: "32px", borderRadius: "3px", marginRight: "10px" }}
    defaultValue=""
  >
    <option value="">Trạng thái</option>
    <option value="active">Đang hoạt động</option>
    <option value="blocked">Đã bị khóa</option>
  </Select>
);

export const AdminMainContent = () => {
  const { deleteUser, isLoading: isLoadingDeleting } = useDeleteUser();
  const { blockUser, isLoading: isLoadingBlockUser } = useBlockUser();

  const [numberButton, setNumberButton] = useState(-1);
  const [showModal, setShowModal] = useState(false);
  const { data, isLoading } = useGetUser();
  const toggleModal = (userId) => {
    setNumberButton(userId);
    setShowModal(true);
  };

  const navigate = useNavigate();

  const handleDelete = async (userId) => {
    console.log(userId);
    deleteUser(userId);
    setNumberButton(-1);
  };

  const handleLockChange = async (userId) => {
    try {
      blockUser(userId);
      navigate("/admin");
    } catch (error) {
      console.error("Error updating user lock status:", error);
    }
  };

  const columns = [
    {
      name: "STT",
      selector: (row, index) => index + 1,
      sortable: false,
    },
    {
      name: "Tên Người dùng",
      selector: (row) => row.userName,
      sortable: true,
      cell: (row) => (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`/${row.role.toLowerCase()}profile/${row.userId}`}
        >
          {row.userName}
        </a>
      ),
    },

    {
      name: "Quyền",
      selector: (row) => row.role,
      sortable: true,
    },
    {
      name: "Trạng thái",
      selector: (row) =>
        row.blocked ? (
          <span className="text-color-danger">Đã bị khóa</span>
        ) : (
          <span className="text-color-success">Đang hoạt động</span>
        ),
      sortable: true,
    },
    {
      name: "Lock",
      cell: (row) => (
        <Select
          className="custom-select mr-sm-2"
          style={{ width: "60%" }}
          value={row.blocked ? "true" : "false"}
          onChange={(e) => handleLockChange(row.userId)}
        >
          <option value="true">Khóa</option>
          <option value="false">Mở khóa</option>
        </Select>
      ),
    },
    {
      name: "Actions",
      cell: (row) => (
        <>
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#deleteModal"
            style={{ marginLeft: "10px" }}
            onClick={() => {
              setNumberButton(row.userId);
              toggleModal(row.userId);
            }}
          >
            <i className="ti-trash"></i>
          </button>
        </>
      ),
    },
  ];

  const [selectedStatus, setSelectedStatus] = React.useState("");
  const [selectedRole, setSelectedRole] = React.useState("");
  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);

  const filteredItems = data
    ? data.data.filter((item) => {
        const textMatch = item.userName
          .toLowerCase()
          .includes(filterText.toLowerCase());
        const roleMatch = selectedRole ? item.role === selectedRole : true;
        const statusMatch =
          selectedStatus === ""
            ? true
            : selectedStatus === "active"
            ? !item.blocked
            : item.blocked;
        return textMatch && roleMatch && statusMatch;
      })
    : [];

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
        setSelectedRole("");
        setSelectedStatus("");
      }
    };

    return (
      <>
        <StatusFilterComponent
          onStatusChange={(e) => setSelectedStatus(e.target.value)}
        />
        <RoleFilterComponent
          onRoleChange={(e) => setSelectedRole(e.target.value)}
        />
        <FilterComponent
          onFilter={(e) => setFilterText(e.target.value)}
          onClear={handleClear}
          filterText={filterText}
        />
      </>
    );
  }, [filterText, resetPaginationToggle, setSelectedRole, setSelectedStatus]);

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="main-content-inner">
      <div className="sales-report-area sales-style-two">
        <div className="card">
          <div className="card-body">
            <DataTable
              title="Quản lý người dùng"
              columns={columns}
              data={filteredItems}
              pagination
              paginationResetDefaultPage={resetPaginationToggle}
              subHeader
              subHeaderComponent={subHeaderComponentMemo}
              persistTableHead
              highlightOnHover
              pointerOnHover
            />
            <ChartComponent />
          </div>
        </div>
      </div>
      <DeleteUserModal
        showModal={showModal}
        numberButton={numberButton}
        handleDelete={handleDelete}
        toggleModal={toggleModal}
      />
    </div>
  );
};
