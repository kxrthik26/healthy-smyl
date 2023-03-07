import ReturnButton from "../../components/buttons/ReturnButton";

function MedicineTracker() {
  return (
    <>
      <div className="contents">
        <ReturnButton returnLocationLabel={"Home"} />
        <div className="page-headline">
          <h1>Medicine Tracker</h1>
        </div>
        <div className="flex-row"></div>
      </div>
    </>
  );
}

export default MedicineTracker;
