import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useGetEmployerApproved } from "../AdminAPI/use/useGetEmployerApproved";
import { apiAcceptEmployer } from "../AdminAPI/apiAcceptEmployer";
import { useNotAcceptEmployer } from "../AdminAPI/use/useNotAcceptEmployer";
import { useAcceptEmployer } from "../AdminAPI/use/useAcceptEmployer";

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

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <TextField
      id="search"
      type="text"
      placeholder="Nhập nhà tuyển dụng"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
    <ClearButton type="button" className="btn btn-primary" onClick={onClear}>
      <i className="ti-search"></i>
    </ClearButton>
  </>
);

export const AdminApproved = () => {
  const { NotAcceptEmployer, isLoading: isLoadingEmployerNot } =
    useNotAcceptEmployer();

  const { AcceptEmployer, isLoading: isLoadingEmployer } = useAcceptEmployer();
  const { data, isLoading } = useGetEmployerApproved();
  const navigate = useNavigate();

  const handleDelete = async (employerId) => {
    console.log(employerId);
    NotAcceptEmployer(employerId);
    navigate("/admin/approveEmployer");
  };

  const handlAcceptEmployer = async (employerId) => {
    console.log(employerId);
    AcceptEmployer(employerId);
    navigate("/admin/approveEmployer");
  };

  const columns = [
    {
      name: "STT",
      selector: (row, index) => index + 1,
      sortable: true,
    },
    {
      name: "Tên Nhà tuyển dụng",
      selector: (row) => row.employerName,
      sortable: true,
    },
    {
      name: "Sđt",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Tên thành phố",
      selector: (row) => row.provinceName,
      sortable: true,
    },
    {
      name: "Địa chỉ",
      selector: (row) => row.address,
      sortable: true,
    },
    {
      name: "Trạng thái",
      selector: (row) => (
        <span className="text-color-warning">Đang chờ duyệt</span>
      ),
    },

    {
      name: "Actions",
      cell: (row) => (
        <>
          <button
            className="btn btn-danger"
            style={{ marginLeft: "10px" }}
            onClick={() => handleDelete(row.employerId)}
          >
            <i className="ti-trash"></i>
          </button>
          <button
            className="btn btn-info"
            style={{ marginLeft: "10px" }}
            onClick={() => handlAcceptEmployer(row.employerId)}
          >
            <i className="ti-check"></i>
          </button>
        </>
      ),
    },
  ];

  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  const filteredItems = data
    ? data.data.filter((item) => {
        const textMatch = item?.employerName?.toLowerCase()
          .includes(filterText.toLowerCase());

        return textMatch;
      })
    : [];

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="main-content-inner">
      <div className="sales-report-area sales-style-two">
        <div className="card">
          <div className="card-body">
            <DataTable
              title="Danh sách duyệt nhà tuyển dụng"
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
          </div>
        </div>
      </div>
    </div>
  );
};
