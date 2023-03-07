const QuoteBanner = ({ quoteOTD }) => {
  return (
    <div className="quote-wrapper">
      <h4>Your Daily Dose of Motivation</h4>
      <div className="quote-banner">{quoteOTD}</div>
    </div>
  );
};

export default QuoteBanner;
