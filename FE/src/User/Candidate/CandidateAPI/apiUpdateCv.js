import axios from "../../../Setup/setupAxios";

const apiUpdateCv = async (id, formData) => {
    // let emptyFile;
    // emptyFile = new Blob([], { type: "image/png" });
    // emptyFile.name = "nophoto.png";

    // if (
    //     typeof formData.get("file") !== "object" ||
    //     formData.get("file") === undefined ||
    //     formData.get("file") === null
    // ) {
    //     formData.append("file", emptyFile, "nophoto.png");
    // }
    const result = await axios.put(
        `http://localhost:8080/api/cv/update/${id}`,
        formData, {
            headers: {
                "Content-Type": "multipart/form-data",
              }
        }
    );
    console.log(result);
    return result;
};
export { apiUpdateCv };
