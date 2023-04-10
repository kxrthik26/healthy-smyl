import "./styles/App.scss";

//Patient Pages
import PatientSignIn from "./screens/Patient/SignIn";
import CompleteProfile from "./screens/Patient/CompleteProfile";
import PatientHome from "./screens/Patient/Home";
import MedicineTracker from "./screens/Patient/MedicineTracker";
import MedicationReminder from "./screens/Patient/MedicationReminder";
import RefillReminder from "./screens/Patient/RefillReminder";
import SetAppointmentDate from "./screens/Patient/SetAppointmentDate";
import EditProfile from "./screens/Patient/EditProfile";
import RequestAid from "./screens/Patient/RequestAid";
import ConfirmImage from "./screens/Patient/ConfirmImage";
import MealRecommendation from "./screens/Patient/MealRecommendations";
import Articles from "./screens/Patient/Articles";
import NutritionTracker from "./screens/Patient/NutritionTracker";
import MealAnalysis from "./screens/Patient/MealAnalysis";
import AddWorkoutManual from "./screens/Patient/AddWorkoutManual";
import EmergencyHelplines from "./screens/Patient/EmergencyHelplines";
import WorkoutTracker from "./screens/Patient/WorkoutTracker";
import Profile from "./screens/Patient/Profile";
import FinancialAid from "./screens/Patient/FinancialAid";
import AddLovedOnes from "./screens/Patient/AddLovedOnes";
import Notifications from "./screens/Patient/Notifications";
import ConfirmAppointment from "./screens/Patient/ConfirmAppointment";
import SelectDoctor from "./screens/Patient/SelectDoctor";
import CardDetails from "./screens/Patient/CardDetails";
import PaymentMethod from "./screens/Patient/PaymentMethod";
import PointsTracker from "./screens/Patient/PointsTracker";

//Doctor Pages
import DoctorSignIn from "./screens/Doctor/SignIn";
import DoctorHome from "./screens/Doctor/Home";
import ViewPatients from "./screens/Doctor/ViewPatients";
import PreviousReports from "./screens/Doctor/PreviousReports";
import ViewAppointments from "./screens/Doctor/ViewAppointments";
import UpdateAvailability from "./screens/Doctor/UpdateAvailability";
import PatientProfile from "./screens/Doctor/PatientProfile";

//General
import Language from "./screens/General/Language";
import ChangePassword from "./screens/General/ChangePassword";
import Introduction from "./screens/General/Introduction";
import Login from "./screens/General/Login";
import Settings from "./screens/General/Settings";

function App() {
  return (
    <>
      <PatientProfile />
    </>
  );
}

export default App;
