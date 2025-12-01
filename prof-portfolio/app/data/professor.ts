// Single source of truth - CV data only
// Excluded: Declaration, Referees, Parentage, Residential Address, Date of Birth

export interface AcademicDetail {
  id: number;
  degree: string;
  university: string;
  specialization: string;
  year: string;
  division: string;
}

export interface TeachingExperience {
  id: number;
  position: string;
  institution: string;
  location: string;
  period: string;
}

export interface AdministrativeExperience {
  id: number;
  position: string;
  institution: string;
  location: string;
  period: string;
}

export interface Course {
  id: number;
  name: string;
  level: "UG" | "PG";
}

export interface ResearchProject {
  id: number;
  title: string;
  description?: string;
  year?: string;
}

export interface Publication {
  id: number;
  title: string;
  journal: string;
  year: string;
  pages: string;
  coAuthors?: string;
  indexing?: string;
}

export interface Workshop {
  id: number;
  title: string;
  location?: string;
  date?: string;
  duration?: string;
  paperTitle?: string;
}

export interface Collaborator {
  id: number;
  name: string;
  university: string;
  country: string;
}

export interface ContactInfo {
  email: string;
  mobile: string[];
  officialAddress: string;
}

// Personal Overview
export const personalInfo = {
  name: "Dr. Mehraj Ahmad Lone",
  designation: "Assistant Professor",
  institution: "NIT Srinagar",
  department: "Department of Mathematics",
  location: "J&K, India",
  email: "mehraj.jmi@gmail.com",
  mobile: ["9419299019", "7780830973"],
  summary: "Assistant Professor, Department of Mathematics, NIT Srinagar",
};

// Academic Details
export const academicDetails: AcademicDetail[] = [
  {
    id: 1,
    degree: "Ph.D.",
    university: "Central University of Jammu",
    specialization: "Differential Geometry",
    year: "2017",
    division: "Awarded",
  },
  {
    id: 2,
    degree: "M.Phil.",
    university: "Central University of Jammu",
    specialization: "Differential Geometry",
    year: "2015",
    division: "First",
  },
  {
    id: 3,
    degree: "M.Sc.",
    university: "Jamia Millia Islamia",
    specialization: "Differential Geometry",
    year: "2012",
    division: "First",
  },
  {
    id: 4,
    degree: "B.Sc.",
    university: "University of Kashmir",
    specialization: "-",
    year: "2010",
    division: "First",
  },
];

// Teaching & Research Experience
export const teachingExperience: TeachingExperience[] = [
  {
    id: 1,
    position: "Assistant Professor",
    institution: "NIT Srinagar",
    location: "J&K, India",
    period: "31-12-2018 - Till Date",
  },
  {
    id: 2,
    position: "Lecturer (Mathematics)",
    institution: "NIT Srinagar",
    location: "J&K, India",
    period: "22-03-2018 - 30-12-2018",
  },
];

// Administrative Experience
export const administrativeExperience: AdministrativeExperience[] = [
  {
    id: 1,
    position: "Warden (Indus Hostel)",
    institution: "NIT Srinagar",
    location: "J&K, India",
    period: "28-01-2019 - 17-12-2020",
  },
  {
    id: 2,
    position: "Examination Incharge (Department of Mathematics)",
    institution: "NIT Srinagar",
    location: "J&K, India",
    period: "28-02-2019 - 22-11-2020",
  },
  {
    id: 3,
    position: "Website Coordinator (Department of Mathematics)",
    institution: "NIT Srinagar",
    location: "J&K, India",
    period: "10-08-2021 - 15-03-2023",
  },
];

// Courses Taught
export const coursesTaught: Course[] = [
  { id: 1, name: "Operations Research", level: "UG" },
  { id: 2, name: "Matrix Theory", level: "UG" },
  { id: 3, name: "Differential Equations", level: "UG" },
  { id: 4, name: "Complex Analysis", level: "PG" },
];

// PhD Thesis
export const phdThesis = {
  title: "Geometry of Some Submanifolds and Their Applications",
};

// Fields of Interest
export const fieldsOfInterest = [
  "Submanifold theory",
  "Optimization",
];

// Research Projects
export const researchProjects: ResearchProject[] = [
  {
    id: 1,
    title: "Towards Prevention of Counterfeiting Saffron Quality by Smart Contract: A Way Forward Through Block Chain",
    description: "Interdisciplinary research project focusing on blockchain technology applications for quality assurance and counterfeiting prevention in saffron trade.",
  },
];

// Research Publications (All 28 from CV)
export const publications: Publication[] = [
  {
    id: 1,
    title: "On some inequalities for submanifolds of Bochner-Kaehler manifolds",
    journal: "Filomat",
    year: "2016",
    pages: "31(18), 5511-5523",
    coAuthors: "M. Jamali and M. H. Shahid",
    indexing: "SCI",
  },
  {
    id: 2,
    title: "A new approach towards geodesic curvature and geodesic torsion of transversal intersection in R³",
    journal: "Facta Universitatis, Series: Mathematics and Informatics",
    year: "2016",
    pages: "31(3), 741-749",
    coAuthors: "M. S. Lone and M. H. Shahid",
  },
  {
    id: 3,
    title: "Hemi-slant submanifolds of nearly Kaehler manifolds",
    journal: "Gulf Journal of Mathematics",
    year: "2016",
    pages: "4(3), 55-64",
    coAuthors: "M. H. Shahid and S. D. Sharma",
  },
  {
    id: 4,
    title: "Hemi-slant submanifolds of cosymplectic manifolds",
    journal: "Cogent Mathematics",
    year: "2016",
    pages: "3(1), 1204143",
    coAuthors: "M. S. Lone and M. H. Shahid",
  },
  {
    id: 5,
    title: "An inequality for generalized normalized δ-Casorati curvatures of slant submanifolds in generalized complex space form",
    journal: "Balkan Journal of Geometry and Its Applications",
    year: "2017",
    pages: "22(1), 41-50",
    indexing: "SCOPUS",
  },
  {
    id: 6,
    title: "Some inequalities for generalized normalized δ-Casorati curvatures of slant submanifolds in generalized Sasakian space form",
    journal: "Novi Sad J. Math",
    year: "2017",
    pages: "47(1), 129-141",
    indexing: "SCOPUS",
  },
  {
    id: 7,
    title: "A lower bound of normalized scalar curvature for the submanifolds of locally conformal Kaehler space form using Casorati curvatures",
    journal: "Filomat",
    year: "2017",
    pages: "31(15), 4925-4932",
    indexing: "SCI",
  },
  {
    id: 8,
    title: "On Ricci semi-symmetric mixed super quasi-Einstein Hermitian manifold",
    journal: "Differential Geometry-Dynamical Systems",
    year: "2018",
    pages: "20, 72-82",
    indexing: "SCI",
  },
  {
    id: 9,
    title: "Generalized Wintgen inequality for bi-slant submanifolds in locally conformal Kaehler space forms",
    journal: "Matematicki Vesnik",
    year: "2018",
    pages: "70(3), 243-249",
    coAuthors: "M. Aquib, M. S. Lone",
    indexing: "SCOPUS",
  },
  {
    id: 10,
    title: "On nonexistence of warped product submanifolds of locally conformal Kaehler manifolds",
    journal: "Gulf Journal of Mathematics",
    year: "2018",
    pages: "6(2), 55-64",
    coAuthors: "M. H. Shahid and S. D. Sharma",
  },
  {
    id: 11,
    title: "Geometric bounds for δ-Casorati curvature in statistical submanifolds of statistical space forms",
    journal: "Balkan Journal of Geometry and Its Applications",
    year: "2019",
    pages: "24(1), 1-11",
    coAuthors: "P. Bansal, M. H. Shahid",
    indexing: "SCOPUS",
  },
  {
    id: 12,
    title: "Generalized Wintgen inequality for Legendrian Submanifolds in Sasakian statistical manifolds",
    journal: "GSI 2019: Geometric Science of Information",
    year: "2019",
    pages: "407-412",
    coAuthors: "M. N. Boyom, Z. Jabeen, M. S. Lone, M. H. Shahid",
    indexing: "SCOPUS",
  },
  {
    id: 13,
    title: "Optimal Inequalities for Generalized Normalized δ-Casorati Curvatures for Hi-Slant Submanifolds of Kenmotsu Space Forms",
    journal: "Journal of Dynamical Systems and Geometric Theories",
    year: "2019",
    pages: "17(1), 39-50",
  },
  {
    id: 14,
    title: "On Casorati curvatures of submanifolds in pointwise Kenmotsu space forms",
    journal: "Math Phys Anal Geom",
    year: "2019",
    pages: "22:2",
    coAuthors: "M. H. Shahid, G. E. Vilcu",
    indexing: "SCI",
  },
  {
    id: 15,
    title: "Upper bounds for Ricci curvatures for submanifolds of Bochner-Kaehler manifolds",
    journal: "Tamkang Journal of Mathematics",
    year: "2019",
    pages: "51(1), 53-67",
    coAuthors: "Y. Matsuyama, Falleh R. Al-Solamy, M. Jamali, M. H. Shahid",
    indexing: "SCOPUS",
  },
  {
    id: 16,
    title: "Basic inequalities for submanifolds of quaternionic space forms with quarter-symmetric connection",
    journal: "Journal of Geometry and Physics",
    year: "2021",
    pages: "159, 103927",
    indexing: "SCI",
  },
  {
    id: 17,
    title: "Biharmonic submanifolds of Kaehler product manifolds",
    journal: "AIMS Mathematics",
    year: "2021",
    pages: "6(9), 9309-9321",
    coAuthors: "Yanlin Li, Umair Ali",
    indexing: "SCI",
  },
  {
    id: 18,
    title: "Chen's δ-invariant type inequalities for bi-slant submanifolds of generalized Sasakian space form",
    journal: "Journal of Geometry and Physics",
    year: "2021",
    pages: "161, 104040",
    coAuthors: "Siraj ud din, M. S. Lone",
    indexing: "SCI",
  },
  {
    id: 19,
    title: "Basic inequalities for real hypersurfaces in some Grassmannians",
    journal: "Mediterranean Journal of Mathematics",
    year: "2021",
    pages: "18(5), 1-13",
    coAuthors: "M. S. Lone",
    indexing: "SCI",
  },
  {
    id: 20,
    title: "A characterization of totally real statistical submanifolds in quaternion Kaehler-like statistical manifolds",
    journal: "RACSAM",
    year: "2022",
    pages: "116, 55",
    coAuthors: "M. S. Lone, A. Mihai",
    indexing: "SCI",
  },
  {
    id: 21,
    title: "Conformal Ricci solitons on generalized (κ, μ)-space forms",
    journal: "International Journal of Geometric Methods in Modern Physics",
    year: "2022",
    pages: "19(14), 2250226-183",
    coAuthors: "T. A. Wani",
    indexing: "SCI",
  },
  {
    id: 22,
    title: "Inequalities involving Casorati curvatures for submanifolds of real space forms with a quarter-symmetric connection",
    journal: "Filomat",
    year: "2022",
    pages: "36(13), 4483-4491",
    indexing: "SCI",
  },
  {
    id: 23,
    title: "Geometric Classification of Warped Products Isometrically Immersed into Conformal Sasakian Space Forms",
    journal: "Symmetry",
    year: "2022",
    pages: "14(3), 608",
    coAuthors: "X Fan, Y Li, P Majeed, S Sharma",
    indexing: "SCI",
  },
  {
    id: 24,
    title: "Horizontally Conformal Submersions from CR-Submanifolds of Locally Conformal Quaternionic Kaehler Manifolds",
    journal: "Mediterranean Journal of Mathematics",
    year: "2022",
    pages: "19(3), 1-14",
    coAuthors: "M. S. Lone",
    indexing: "SCI",
  },
  {
    id: 25,
    title: "Doubly warped product submanifolds of a Riemannian manifold of nearly quasi-constant curvature",
    journal: "Tamkang Journal of Mathematics",
    year: "2022",
    pages: "53",
    coAuthors: "M. S. Lone, M. H. Shahid",
    indexing: "SCOPUS",
  },
  {
    id: 26,
    title: "Ricci solitons on Lorentz-Sasakian space forms",
    journal: "Journal of Geometry and Physics",
    year: "2022",
    pages: "178, 104547",
    coAuthors: "Idrees Fayaz harry",
    indexing: "SCI",
  },
  {
    id: 27,
    title: "Chen and Casorati curvature inequalities for the submanifolds of quaternionic Kaehler manifolds endowed with Ricci quarter-symmetric metric connection",
    journal: "Journal of Prime Research in Mathematics",
    year: "2022",
    pages: "18(2), 72-87",
    coAuthors: "Umair Ali",
    indexing: "SCOPUS",
  },
  {
    id: 28,
    title: "Optimal inequalities for submanifolds of Riemann manifolds of nearly quasi-constant curvature with quarter-symmetric connection",
    journal: "Bulletin of the Transilvania University of Brasov. Series III: Mathematics and Computer Science",
    year: "2022",
    pages: "2(64), 109-124",
    coAuthors: "Z. Jabeen and S. Sharma",
    indexing: "SCOPUS",
  },
];

// Workshops & Conferences Organised
export const workshopsOrganised: Workshop[] = [
  {
    id: 1,
    title: "Mathematics Without Boundaries",
    location: "NIT Srinagar",
    date: "November 23-27, 2020",
    duration: "One-week workshop",
  },
];

// Workshops & Conferences Attended (All 19 from CV)
export const workshopsAttended: Workshop[] = [
  {
    id: 1,
    title: "ATM workshop on Geometry and Topology",
    location: "HRI Allahabad, India",
    date: "Nov 2015",
  },
  {
    id: 2,
    title: "Workshop in Computational Mathematics on SageMath",
    location: "Department of Mathematics, Central University of Jammu, India",
    date: "March 2016",
  },
  {
    id: 3,
    title: "Science Academies' Lecture Workshop on 'Algebra and Geometry'",
    location: "Department of Mathematics, Central University of Jammu, India",
    date: "March 2017",
  },
  {
    id: 4,
    title: "Workshop on 'Geometry and Analysis on CR Manifolds'",
    location: "HRI Allahabad, India",
    date: "Oct 2016",
  },
  {
    id: 5,
    title: "International conference on Algebra, Analysis and Their Applications",
    location: "Department of Mathematics, Jamia Millia Islamia",
    date: "Nov 2014",
  },
  {
    id: 6,
    title: "National Scholars Conclave",
    location: "NIT Srinagar, India",
    date: "April 2016",
    paperTitle: "Hemi-Slant Submanifolds of Nearly Kaehler Manifolds",
  },
  {
    id: 7,
    title: "International Conference on Differential Geometry, Analysis and Algebra",
    location: "Jamia Millia Islamia, New Delhi",
    date: "Nov 2016",
    paperTitle: "Ricci curvature for submanifolds of Bochner-Kaehler manifolds",
  },
  {
    id: 8,
    title: "National Conference on Differential Geometry and its Applications",
    location: "DDU Gorakhpur, India",
    date: "Jan 2017",
    paperTitle: "Some inequalities for generalized normalized δ-Casorati curvatures of slant submanifolds in generalized Sasakian space form",
  },
  {
    id: 9,
    title: "National Conference on Recent Trends in Mathematical Sciences",
    location: "SMVDU Jammu, India",
    date: "Feb 2017",
    paperTitle: "Some inequalities for Submanifolds of Bochner-Kaehler manifolds",
  },
  {
    id: 10,
    title: "International Symposium on Computational Mathematics, Optimization, and Computational Intelligence (CMOCI 2017)",
    location: "IIT Indore, India",
    date: "July 2017",
    paperTitle: "Optimal inequalities for generalized normalized δ-Casorati curvatures of semi-slant submanifolds in generalized complex space form",
  },
  {
    id: 11,
    title: "2nd National Conference on Emerging Trends in Applied Sciences",
    location: "Galgotias University, Noida, India",
    date: "August 2017",
    paperTitle: "Warped Product Semi-slant Submanifolds of Locally Conformal Kaehler Manifolds",
  },
  {
    id: 12,
    title: "Role of Mathematics and computer science in advancement of Physics",
    location: "Jammu, Kautha",
    date: "Nov 2017",
    paperTitle: "An inequality for generalized normalized δ-Casorati curvatures for slant submanifolds of generalized complex space form",
  },
  {
    id: 13,
    title: "Recent Innovations in science, Technology and Engineering (RICTE 2017)",
    location: "NIT Srinagar, India",
    date: "December 2017",
    paperTitle: "A study of almost tangential intersection of hypersurfaces in R^s",
  },
  {
    id: 14,
    title: "Recent Trends in pure and applied Mathematics",
    location: "University of Kashmir",
    date: "Dec 2017",
    paperTitle: "Hemi-slant submanifolds of cosymplectic manifolds",
  },
  {
    id: 15,
    title: "Recent Advances in Mathematics",
    location: "Central University of Jammu",
    date: "October 2018",
    paperTitle: "Optimal inequalities for generalized normalized δ-Casorati curvatures of submanifolds in pointwise Kenmotsu space forms",
  },
  {
    id: 16,
    title: "Online two days international conference on Mathematical Sciences and computational intelligence",
    location: "SMVDU Katra Jammu and Kashmir",
    date: "December 2020",
    paperTitle: "Inequalities involving Casorati curvatures for submanifolds of real space forms with a quarter-symmetric connection",
  },
  {
    id: 17,
    title: "NASI-TMC summer school on Differential Geometry",
    location: "Central University of Punjab, Bathinda",
    date: "July 2021",
  },
  {
    id: 18,
    title: "The Second International Conference of Mathematics and its Applications",
    location: "King Khalid University, Saudi Arabia",
    date: "October 2021",
  },
  {
    id: 19,
    title: "International Webinar on Applications of Differential Geometry",
    location: "Maharishi Markandeshwar University, Haryana",
    date: "February 2022",
  },
];

// Foreign Collaborators (All 6 from CV)
export const collaborators: Collaborator[] = [
  {
    id: 1,
    name: "Prof. Y. Matsuyama",
    university: "Chuo University, Tokyo",
    country: "Japan",
  },
  {
    id: 2,
    name: "Prof. G. E. Vilcu",
    university: "Petroleum-Gas University of Ploieşti, Ploieşti",
    country: "Romania",
  },
  {
    id: 3,
    name: "Prof. Falleh R. Al-Solamy",
    university: "King Abdulaziz University, Jeddah",
    country: "Saudi Arabia",
  },
  {
    id: 4,
    name: "Prof. M. N. Boyom",
    university: "University of Montpellier, Montpellier",
    country: "France",
  },
  {
    id: 5,
    name: "Prof. Siraj Uddin",
    university: "King Abdulaziz University, Jeddah",
    country: "Saudi Arabia",
  },
  {
    id: 6,
    name: "Prof. Bang-Yen Chen",
    university: "Michigan State University, East Lansing, Michigan",
    country: "USA",
  },
];

// Technical Skills
export const technicalSkills = [
  "LaTeX",
  "Mathematica",
  "Matlab",
];

// Contact Information (Official only)
export const contactInfo: ContactInfo = {
  email: "mehraj.jmi@gmail.com",
  mobile: ["9419299019", "7780830973"],
  officialAddress: "Department of Mathematics, NIT Srinagar, Hazratbal J&K -190006",
};
