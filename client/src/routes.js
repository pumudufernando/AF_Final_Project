import Index from "views/Index.jsx";
import Profile from "views/examples/Profile.jsx";
import Maps from "views/examples/Maps.jsx";
import Register from "views/examples/Register.jsx";
import Login from "views/examples/Login.jsx";
import Tables from "views/examples/Tables.jsx";
import Icons from "views/examples/Icons.jsx";
import Assignments from "views/examples/Assignments";
import UploadFile from "./views/examples/UploadFile";
import LecturerView from "./views/examples/LecturerView";
import StudentView from "./views/examples/StudentView";
import StudentDashboard from "./views/examples/StudentDashboard";
import Subjects from "./views/examples/Subjects";
import LecturerDashboard from "./views/examples/LecturerDashboard";
import AddUsers from "./views/examples/AddUsers";
import EditUser from "./views/examples/EditUser";
import UsersList from "./views/examples/UsersList";
import AddCourse from "./views/examples/AddCourse";
import CourseList from "./views/examples/CourseList";
import EditCourse from "./views/examples/EditCourse";
import ApprovalList from "./views/examples/ApprovalList";
import AdminDashboard from "./views/examples/AdminDashboard";

var routes = [
  {
    path: "/index",
    name: "Home",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  },
  {
    path: "/assignments",
    name: "Assignments Manager",
    icon: "ni ni-circle-08 text-pink",
    component: Assignments,
    layout: "/lecturer"
  },
  {
    path: "/uploadAssignments/:cName/:aName/:dDate",
    name: "Upload Assignments",
    icon: "ni ni-circle-08 text-pink",
    component: UploadFile,
    layout: "/student"
  },
  {
    path: "/uploadAssignment/:cName/:aName",
    name: "Upload Assignments",
    icon: "ni ni-circle-08 text-pink",
    component: UploadFile,
    layout: "/student"
  },
  {
    path: "/lecturerView",
    name: "Submitted Assignments",
    icon: "ni ni-circle-08 text-pink",
    component: LecturerView,
    layout: "/lecturer"
  },
  {
    path: "/studentView/:cName/:aName",
    name: "Resources",
    icon: "ni ni-circle-08 text-pink",
    component: StudentView,
    layout: "/student"
  },
  {
    path: "/studentDashboard",
    name: "student Dashboard",
    icon: "ni ni-circle-08 text-pink",
    component: StudentDashboard,
    layout: "/dashboard"
  },
  {
    path: "/subject/:cName",
    name: "Module Materials",
    icon: "ni ni-circle-08 text-pink",
    component: Subjects,
    layout: "/student"
  },
  {
    path: "/lecturerDashboard",
    name: "Lecturer Dashboard",
    icon: "ni ni-circle-08 text-pink",
    component: LecturerDashboard,
    layout: "/dashboard"
  },
  {
    path: "/createUser",
    name: "User Management",
    icon: "ni ni-circle-08 text-pink",
    component: AddUsers,
    layout: "/admin"
  },
  {
    path: "/userList",
    name: "User List",
    icon: "ni ni-circle-08 text-pink",
    component: UsersList,
    layout: "/admin"
  },
  {
    path: "/editUser/:id",
    name: "Edit Users",
    icon: "ni ni-circle-08 text-pink",
    component: EditUser,
    layout: "/admin"
  },
  {
    path: "/createCourse",
    name: "Course Management",
    icon: "ni ni-circle-08 text-pink",
    component: AddCourse,
    layout: "/admin"
  },
  {
    path: "/courseList",
    name: "Course List",
    icon: "ni ni-circle-08 text-pink",
    component: CourseList,
    layout: "/admin"
  },
  {
    path: "/editCourse/:id",
    name: "Edit Course",
    icon: "ni ni-circle-08 text-pink",
    component: EditCourse,
    layout: "/admin"
  },
  {
    path: "/approvalList",
    name: "Course Request",
    icon: "ni ni-circle-08 text-pink",
    component: ApprovalList,
    layout: "/lecturer"
  },
  {
    path: "/adminDashboard",
    name: "Admin Dashboard",
    icon: "ni ni-circle-08 text-pink",
    component: AdminDashboard,
    layout: "/dashboard"
  }
];
export default routes;