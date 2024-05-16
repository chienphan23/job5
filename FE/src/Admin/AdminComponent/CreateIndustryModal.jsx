import React, { useEffect, useState } from "react";

const CreateIndustryModal = ({ showModal, handleCreate, toggleModal }) => {
  const [industryName, setIndustryName] = useState("");

  const CreateIndustry = () => {
    handleCreate(industryName);
    setIndustryName("");
  };

  return (
    <>
      <div
        className="modal fade"
        id="CreateIndustryModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="createIndustryModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="createIndustryModalLabel">
                Tạo mới ngành nghề
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="industryName">Tên ngành nghề</label>
                <input
                  type="text"
                  className="form-control"
                  id="industryName"
                  value={industryName}
                  onChange={(e) => setIndustryName(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-secondary"
                data-dismiss="modal"
              >
                Hủy
              </button>
              <button
                data-dismiss="modal"
                type="button"
                className="btn btn-outline-info"
                onClick={CreateIndustry}
              >
                Thêm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateIndustryModal;
