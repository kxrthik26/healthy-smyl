import { message, Upload } from "antd";

const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const NutritionTrackerImgWidget = ({ mealTime }) => {
  return (
    <div className="add-nutrition-img-widget">
      <p>{mealTime}</p>
      <div className="add-btns">
        <img className="camera-add-icon" />
        <Upload {...props}>
          <img className="gallery-icon" />
        </Upload>
      </div>
    </div>
  );
};

export default NutritionTrackerImgWidget;
