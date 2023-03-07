import "./styles/App.scss";
import Introduction from "./screens/General/Introduction";
import PatientSignIn from "./screens/Patient/SignIn";
import CompleteProfile from "./screens/Patient/CompleteProfile";
import Login from "./screens/General/Login";
import DoctorSignIn from "./screens/Doctor/SignIn";
import Home from "./screens/Patient/Home";
import MedicineTracker from "./screens/Patient/MedicineTracker";
import Reminder from "./screens/Patient/Reminder";
import SetAppointmentDate from "./screens/Patient/SetAppointmentDate";
import Settings from "./screens/General/Settings";
import ChangePassword from "./screens/General/ChangePassword";
import EditProfile from "./screens/Patient/EditProfile";
import RequestAid from "./screens/Patient/RequestAid";
import ConfirmImage from "./screens/Patient/ConfirmImage";
import FoodRecommendation from "./screens/Patient/MealRecommendation";
import Articles from "./screens/Patient/Articles";
import NutritionTracker from "./screens/Patient/NutritionTracker";

function App() {
  return (
    <>
      <NutritionTracker />
    </>
  );
}

export default App;
