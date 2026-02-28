import { Navigate, Route } from "react-router";
import { all_routes } from "./all_routes";
import HomeOne from "../HomePages/home-one/homeone";
import HomeTwo from "../HomePages/home-two/homeTwo";
import HomeThree from "../HomePages/home-three/homeThree";
import HomeFour from "../HomePages/home-four/homeFour";
import HomeFive from "../HomePages/home-five/homeFive";
import HomeSix from "../HomePages/home-six/homeSix";
import CourseGrid from "../Courses/courses-grid/courseGrid";
import CourseList from "../Courses/course-list/courseList";
import CourseCategory from "../Courses/course-category/courseCategory";
import CourseCategoryThree from "../Courses/course-category-three/courseCategoryThree";
import CourseResume from "../Courses/course-resume/courseResume";
import CourseWatch from "../Courses/course-watch/courseWatch";
import CourseCart from "../Courses/course-cart/courseCart";
import CourseCheckout from "../Courses/course-checkout/courseCheckout";
import AddNewCourse from "../Courses/add-newCourse/addNewCourse";
import InstructorDashboard from "../Instructor/instructor-dashboard/instructorDashboard";
import InstructorProfile from "../Instructor/instructor-profile/instructorProfile";
import InstructorCertificate from "../Instructor/instructor-certificate/instructorCertificate";
import InstructorCourse from "../Instructor/instructor-course/instructorCourse";
import InstructorAnnouncements from "../Instructor/instructor-announcements/instructorAnnouncements";
import InstructorAssignment from "../Instructor/instructor-assignment/instructorAssignment";
import StudentGrid from "../Instructor/student-grid/studentGrid";
import StudentList from "../Instructor/student-list/studentList";
import InstructorQuiz from "../Instructor/instructor-quiz/instructorQuiz";
import InstructorQuizResult from "../Instructor/instructor-quiz-result/instructorQuizResult";
import InstructorEarning from "../Instructor/instructor-earning/instructorEarning";
import InstructorPayout from "../Instructor/instructor-payout/instructorPayout";
import InstructorStatement from "../Instructor/instructor-statement/instructorStatement";
import InstructorMessage from "../Instructor/instructor-message/instructorMessage";
import InstructorTickets from "../Instructor/instructor-tickets/instructorTickets";
import InstructorChangePassoword from "../Instructor/instructor-settings/instructor-change-password/instructorChangePassoword";
import InstructorPlanSettings from "../Instructor/instructor-settings/instructor-plans-settings/instructorPlanSettings";
import InstructorSocialprofileSettings from "../Instructor/instructor-settings/instructor-socialprofile-settings/instructorSocialprofileSettings";
import InstructorLinkedAccounts from "../Instructor/instructor-settings/instructor-linked-accounts/instructorLinkedAccounts";
import InstructorNotification from "../Instructor/instructor-settings/instructor-notification/instructorNotification";
import InstructorIntegrations from "../Instructor/instructor-settings/instructor-integrations/instructorIntegrations";
import InstructorWithdraw from "../Instructor/instructor-settings/instructor-withdraw/instructorWithdraw";
import CourseDetails from "../Courses/course-details/courseDetails";
import CourseDetailsTwo from "../Courses/course-details-2/courseDetailsTwo";
import CourseCategoryTwo from "../Courses/course-category-two/courseCategoryTwo";
import StudentDashboard from "../student/dashboard/studentDashboard";
import BlogGrid from "../blog/blog-layouts/blogGrid";
import BlogGrid2 from "../blog/blog-layouts/blogGrid2";
import BlogGrid3 from "../blog/blog-layouts/blogGrid3";
import BlogCarousal from "../blog/blog-layouts/blogCarousal";
import BlogMasonry from "../blog/blog-layouts/blogMasonry";
import BlogLeftSidebar from "../blog/blog-layouts/blogLeftSidebar";
import BlogRightSidebar from "../blog/blog-layouts/blogRightSidebar";
import BlogDetailsLeftSidebar from "../blog/blog-details/blogDetailsLeftSidebar";
import BlogDetailsRightSidebar from "../blog/blog-details/blogDetailsRightSidebar";
import InstructorGrid from "../Pages/instructor/instructor-grid/instructorGrid";
import InstructorList from "../Pages/instructor/instructor-list/instructorList";
import InstructorDetails from "../Pages/instructor/instructor-details/instructor-details";
import AboutUs from "../Pages/about-us/aboutUs";
import ContactUs from "../Pages/contact-us/contactUs";
import Notification from "../Pages/notification/notification";
import BecomeInstructor from "../Pages/become-instructor/becomeInstructor";
import Testimonials from "../Pages/testimonials/testimonials";
import PricePlanning from "../Pages/price-planning/pricePlanning";
import Faq from "../Pages/faq/faq";
import TermsCondition from "../Pages/terms-condition/termsCondition";
import PrivacyPolicy from "../Pages/privacy-policy/privacyPolicy";
import Login from "../auth/login/login";
import Register from "../auth/register/register";
import ForgortPassword from "../auth/forgot-password/forgortPassword";
import SetPassword from "../auth/set-password/setPassword";
import Otp from "../auth/otp/otp";
import LockScreen from "../auth/lock-screen/lockScreen";
import Error404 from "../auth/error/error-404/error400";
import Error500 from "../auth/error/error-500/error500";
import ComingSoon from "../auth/coming-soon/comingSoon";
import UnderConstruction from "../auth/underconstruction/underConstruction";
import InstructorCourseGrid from "../Instructor/instructor-course/instructorCourseGrid";

import StudentProfile from "../student/student-profile/studentProfile";
import StudentCourse from "../student/student-course/studentCourse";
import StudentCertificates from "../student/student-certificates/student-certificates";
import StudentWishlist from "../student/student-wishlist/studentWishlist";
import StudentReviews from "../student/student-reviews/studentReviews";
import StudentQuiz from "../student/student-quiz/studentQuiz";
import StudentOrder from "../student/student-order-history/studentOrder";
import StudentRefferal from "../student/student-refferal/studentRefferal";
import StudentMessage from "../student/student-message/studentMessage";
import StudentsDetails from "../Instructor/student-details/studentsDetails";
import InstructorQuizQuestions from "../Instructor/instructor-quiz-question/instructorQuizQuestions";
import StudentTickets from "../student/student-tickets/studentTickets";
import StudentSettings from "../student/student-settings/studentSettings";
import StudentChangePassword from "../student/student-settings/student-change-password/studentChangePassword";
import StudentSocialProfile from "../student/student-settings/student-social-profile/studentSocialProfile";
import StudentLinkedAccounts from "../student/student-settings/student-linked-accounts/studentLinkedAccounts";
import StudentNotification from "../student/student-settings/student-notifications/studentNotification";
import StudentBillingAddress from "../student/student-settings/student-billing-address/studentBillingAddress";
import StudentQuizQuestion from "../student/student-quiz-question/studentQuizQuestion";
import InstructorProfileSettings from "../Instructor/instructor-settings/instructor-profile-settings/instructorProfile";
import BlogDetails from "../blog/blog-details/blogDetails";

const routes = all_routes;

export const publicRoutes = [
  {
    path: "/",
    name: "Root",
    element: <Navigate to={routes.homefive} />,
    route: Route,
  },
 
  {
    path: routes.homefive,
    element: <HomeFive />,
    route: Route,
  },
 
  {
    path: "*",
    element: <Navigate to={routes.homefive} />,
    route: Route,
  },
];

export const authRoutes = [
 
  {
    path: routes.login,
    element: <Login />,
    route: Route,
  },
  {
    path: routes.register,
    element: <Register />,
    route: Route,
  },
];
