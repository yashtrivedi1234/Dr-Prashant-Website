import { Link, useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const routeLabelMap: Record<string, string> = {
  about: "About Doctor",
  "clinic-about": "About Clinic",
  services: "Treatments",
  gallery: "Gallery",
  blog: "Blog",
  contact: "Contact",
  vertigo: "Vertigo Clinic",
  snoring: "Snoring Clinic",
  allergy: "Allergy Clinic",
  "oral-immunotherapy": "Oral Immunotherapy",
};

const blogTitleMap: Record<string, string> = {
  "understanding-vertigo-causes-and-advanced-treatments": "Understanding Vertigo: Causes and Advanced Treatments",
  "clinical-approaches-to-seasonal-allergies": "Clinical Approaches to Seasonal Allergies",
  "the-importance-of-sleep-studies-for-sleep-apnea": "The Importance of Sleep Studies for Sleep Apnea",
  "micro-ear-surgery-restoring-your-hearing": "Micro Ear Surgery: Restoring Your Hearing",
  "head-and-neck-cancer-recognizing-early-signs": "Head & Neck Cancer: Recognizing Early Signs",
  "advanced-immunotherapy-vs-antihistamines": "Advanced Immunotherapy vs. Antihistamines",
};

const serviceTitleMap: Record<string, string> = {
  "sinusitis-treatment": "Sinusitis Treatment",
  "snoring-treatment": "Snoring Treatment",
  "tonsillitis-treatment": "Tonsillitis Care",
  "voice-disorder-surgeries": "Voice Surgeries",
  "micro-ear-surgery": "Micro Ear Surgery",
  "digital-hearing-aids": "Digital Hearing Aids",
  "stapedectomy-ear-surgery": "Stapedectomy",
  "cochlear-implant-hearing-restoration": "Cochlear Implantation",
  "throat-cancer-treatment": "Throat Cancer",
};

const toTitleCase = (slug: string) =>
  slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const BreadcrumbBar = () => {
  const { pathname } = useLocation();

  if (pathname === "/") {
    return null;
  }

  const segments = pathname.split("/").filter(Boolean);
  const crumbs = segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join("/")}`;
    const isLast = index === segments.length - 1;

    let label = routeLabelMap[segment] ?? toTitleCase(segment);

    if (isLast && segments[0] === "services" && index === 1) {
      label = serviceTitleMap[segment] ?? toTitleCase(segment);
    }

    if (isLast && segments[0] === "blog" && index === 1) {
      label = blogTitleMap[segment] ?? toTitleCase(segment);
    }

    return { href, isLast, label };
  });

  return (
    <section className="border-b border-border/60 bg-muted/30">
      <div className="container-main px-4 md:px-8 py-3">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            {crumbs.map((crumb) => (
              <BreadcrumbItem key={crumb.href}>
                <BreadcrumbSeparator />
                {crumb.isLast ? (
                  <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={crumb.href}>{crumb.label}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </section>
  );
};

export default BreadcrumbBar;