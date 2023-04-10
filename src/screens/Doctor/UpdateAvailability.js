import { Button } from "antd";
import ReturnButton from "../../components/buttons/ReturnButton";

function UpdateAvailability() {
  return (
    <>
      <div className="contents">
        <ReturnButton returnLocationLabel={"Home"} />
        <div className="page-headline">
          <h1>Update Availability</h1>
        </div>
        <div>{/* Add Calendar here */}</div>
        <div className="btn-wrapper">
          <Button type="primary">Update Availability</Button>
          <Button type="link">Clear Selection</Button>
        </div>
      </div>
    </>
  );
}

export default UpdateAvailability;
