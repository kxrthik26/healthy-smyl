import ReturnButton from "../../components/buttons/ReturnButton";
import QuoteBanner from "../../components/banners/QuoteBanner";

function MedicineConsumptionHistory() {
  return (
    <>
      <div className="contents">
        <ReturnButton returnLocationLabel={"Schedule Appointment"} />
        <div className="page-headline">
          <h1>Medicine Consumption History</h1>
        </div>
        <QuoteBanner
          quoteOTD={
            "We cannot solve problems with the kind of thinking we employed when we came up with them."
          }
        />
        {/* Add Calendar here */}
      </div>
    </>
  );
}

export default MedicineConsumptionHistory;
