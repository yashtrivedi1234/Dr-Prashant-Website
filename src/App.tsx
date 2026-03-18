import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { store } from "./store";
import Index from "./pages/Index.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import ClinicAbout from "./pages/ClinicAbout.tsx";
import Services from "./pages/Services.tsx";
import ServiceDetail from "./pages/ServiceDetail.tsx";
import Gallery from "./pages/Gallery.tsx";
import Blog from "./pages/Blog.tsx";
import BlogDetail from "./pages/BlogDetail.tsx";
import Contact from "./pages/Contact.tsx";
import VertigoClinic from "./pages/VertigoClinic.tsx";
import SnoringClinic from "./pages/SnoringClinic.tsx";
import AllergyClinic from "./pages/AllergyClinic.tsx";
import OralImmunotherapyClinic from "./pages/OralImmunotherapyClinic.tsx";
import NotFound from "./pages/NotFound.tsx";
import Layout from "./components/Layout.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import Treatment from "./pages/Treatment.tsx";
import TreatmentDetail from "./pages/TreatmentDetail.tsx";
import VertigoDetail from "./pages/vertigo/VertigoDetail.tsx";
import BookAppointment from "./pages/BookAppointment";
// Admin imports
import { AdminAuthProvider } from "./contexts/AdminAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminAppointments from "./pages/admin/AdminAppointments";
import AdminAnalytics from "./pages/admin/AdminAnalytics";
import AdminSettings from "./pages/admin/AdminSettings";

const queryClient = new QueryClient();

const App = () => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <AdminAuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route
                element={
                  <ProtectedRoute>
                    <AdminLayout />
                  </ProtectedRoute>
                }
              >
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/appointments" element={<AdminAppointments />} />
                <Route path="/admin/analytics" element={<AdminAnalytics />} />
                <Route path="/admin/settings" element={<AdminSettings />} />
              </Route>

              {/* Public Routes */}
              <Route element={<Layout />}>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/clinic-about" element={<ClinicAbout />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:slug" element={<ServiceDetail />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/vertigo" element={<VertigoClinic />} />
                <Route path="/snoring" element={<SnoringClinic />} />
                <Route path="/allergy" element={<AllergyClinic />} />
                <Route path="/oral-immunotherapy" element={<OralImmunotherapyClinic />} />
                <Route path="/treatment" element={<Treatment />} />
                <Route path="/treatment/:slug" element={<TreatmentDetail />} />
                <Route path="/vertigo-info" element={<VertigoDetail />} />
                <Route path="/book-appointment" element={<BookAppointment />} />
              </Route>
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AdminAuthProvider>
    </QueryClientProvider>
  </Provider>
);

export default App;
