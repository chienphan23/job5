import React, { useEffect, useState } from "react";
import { useUpdateIndustry } from "../AdminAPI/use/useUpdateIndustry";
import { useGetIndustryById } from "../AdminAPI/use/useGetIndustryById";
import { LoadingPage } from "../../UI/LoadingPage";

const UpdateIndustryModal = ({
  showModal,
  numberButton,
  onUpdateSuccess,
  toggleModal,
}) => {
  const { UpdateIndustry } = useUpdateIndustry();
  const { industry, isLoading } = useGetIndustryById(numberButton);
  const [industryName, setIndustryName] = useState("");

  const handleUpdate = async () => {
    const formData = new FormData();
    formData.append("industryName", industryName);
    await UpdateIndustry({ industryId: numberButton, formData });
    setIndustryName(industryName);
    // onUpdateSuccess();
    toggleModal();
  };
  // if (isLoading) return <LoadingPage />;
  useEffect(() => {
    if (industry) {
      setIndustryName(industry.data.industryName);
    }
  }, [isLoading, industry]);

  return (
    <div
      className="modal fade"
      id="UpdateIndustryModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="createIndustryModalLabel"
      aria-hidden="true"
    >
      {console.log(numberButton)}
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="createIndustryModalLabel">
              Cập nhật ngành nghề
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
              onClick={handleUpdate}
            >
              Cập nhật
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateIndustryModal;
