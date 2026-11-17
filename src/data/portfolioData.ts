import { Project, Certification, MetricItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Sankalp Vaish',
  identity: 'All-round Management Professional',
  tagline: 'CREATE. ANALYSE. LEAD.',
  bio: 'An aspiring management professional passionate about marketing strategy, business analytics, research and organizational development.',
  educationSummary: 'MBA candidate in HR & Marketing at IILM University, Greater Noida with a background in Commerce from University of Lucknow.',
  email: 'Sankalpvaishh@gmail.com',
  phone: '+91 7800157287',
  phoneFormatted: '+91 78001 57287',
  location: 'Greater Noida / Delhi NCR, India',
  linkedinUrl: 'https://linkedin.com/in/sankalp-vaish-a00739376',
  cvDownloadPath: '/Sankalp_Vaish_CV.pdf',
  photoPath: '/assets/sankalp_photo.jpeg',
};

export const EDUCATION_TIMELINE = [
  {
    degree: 'Master of Business Administration (MBA)',
    specialization: 'HR & Marketing Dual Specialization',
    institution: 'IILM University',
    location: 'Greater Noida, Uttar Pradesh',
    period: '2025 – 2027',
    badge: 'Current / In-Progress',
    description: 'Focusing on strategic human resource management, marketing strategy, digital marketing, market research, and business data analytics. Active member of TEDx core committee and coordinator of MarkBuzz marketing club.',
    coursework: ['Marketing Strategy', 'Business Analytics', 'Digital Marketing & Branding', 'Talent Acquisition', 'Organizational Behaviour']
  },
  {
    degree: 'Bachelor of Commerce (B.Com)',
    specialization: 'Commerce, Accounting & Business Studies',
    institution: 'University of Lucknow',
    location: 'Lucknow, Uttar Pradesh',
    period: '2021 – 2024',
    badge: 'Graduated',
    description: 'Built foundational acumen in commercial law, corporate financial accounting, business statistics, microeconomics, and banking operations.',
    coursework: ['Corporate Accounting', 'Financial Management', 'Business Statistics', 'Mercantile Law', 'Economics']
  },
  {
    degree: 'ISC (Class XII)',
    specialization: 'Commerce & Mathematics',
    institution: "St Antony's Inter College",
    location: 'Lucknow, Uttar Pradesh',
    period: '2020 – 2021',
    badge: 'Completed',
    description: 'Senior secondary school education focusing on commerce stream with analytical rigor.',
    coursework: ['Commerce', 'Accountancy', 'Economics', 'Business Mathematics', 'English']
  },
  {
    degree: 'ICSE (Class X)',
    specialization: 'High School General Sciences & Humanities',
    institution: "St Antony's Inter College",
    location: 'Lucknow, Uttar Pradesh',
    period: '2018 – 2019',
    badge: 'Completed',
    description: 'Comprehensive secondary schooling establishing strong communication, mathematical problem solving, and science fundamentals.',
    coursework: ['Mathematics', 'Science', 'Social Studies', 'Computer Applications', 'English Literature']
  }
];

export const EXPERIENCE_DATA = {
  company: 'StoneX Global',
  role: 'HR Intern – Talent Acquisition',
  period: 'June 2026 – August 2026',
  location: 'Corporate HQ / On-site',
  badge: 'Verified Corporate Internship',
  overview: 'Spearheaded end-to-end recruitment pipelines for StoneX Global experience center expansion. Partnered closely with senior hiring managers to execute targeted resume sourcing, candidate screening, structured interviews, document verification, and multi-profile tracking.',
  metrics: [
    { label: 'CVs Screened', value: 1000, suffix: '+', note: 'Rigorous profile evaluation across multiple hiring channels' },
    { label: 'Profiles Shortlisted', value: 100, suffix: '+', note: 'Calibrated candidate pool meeting technical & cultural benchmarks' },
    { label: 'Interviews Coordinated', value: 20, suffix: '+', note: 'Seamless multi-stage scheduling and hiring manager alignment' },
    { label: 'Candidates Delivered', value: 10, suffix: '+', note: 'High-caliber talent finalized and handed to hiring leadership' },
    { label: 'Documents Verified', value: 100, suffix: '+', note: 'Zero-delay background checking and onboarding pre-clearance' },
    { label: 'Weekly Reports', value: 8, suffix: ' Wks', note: 'Data-driven weekly recruitment dashboards for executive review' },
  ],
  responsibilities: [
    'Conducted systematic screening of 1,000+ CVs across digital job boards and internal databases to pinpoint qualified professionals.',
    'Shortlisted 100+ high-potential profiles for the company experience center expansion initiative.',
    'Delivered 10+ pre-assessed, high-match candidates directly to department hiring managers, accelerating time-to-hire.',
    'Coordinated 20+ panel and 1-on-1 interviews, managing calendaring, candidate communication, and manager feedback loops.',
    'Collected and verified identity and credential documentation for 100+ candidates, boosting onboarding readiness.',
    'Formulated and presented weekly recruitment progress reports to summarize vacancy closures, pipeline health, and bottleneck mitigation.'
  ],
  skillsDeployed: [
    'Talent Acquisition',
    'Candidate Screening',
    'Interview Scheduling',
    'Talent Mapping',
    'Stakeholder Management',
    'Document Verification',
    'Recruitment Reporting'
  ]
};

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'saregama-gen-z',
    title: 'Saregama 2025 Case Competition',
    subtitle: 'Repositioning 50+ Years of Classic Hindi Music for Gen Z',
    category: 'Marketing Strategy',
    period: '2025',
    summary: 'A strategic, data-backed marketing framework designed to revitalize 50+ years of classic Hindi music IP and capture modern Gen Z audio consumers across multi-channel digital touchpoints.',
    metrics: [
      { label: 'Heritage Music IP', value: '50+ Yrs' },
      { label: 'Digital Channels', value: '5-Channel' },
      { label: 'Strategic Focus', value: 'Gen Z Market' },
      { label: 'Framework', value: 'Data-Driven' }
    ],
    tags: ['Marketing Strategy', 'Consumer Insights', 'Gen Z Engagement', 'Digital Monetisation', 'Audio Streaming'],
    caseStudy: {
      problem: 'Saregama boasts India’s richest catalogue of classic Hindi melodies spanning half a century. However, Gen Z consumption habits are overwhelmingly dominated by short-form audio clips, algorithmic discovery, and modern hip-hop/pop, resulting in declining organic engagement among users aged 16–25.',
      research: 'Conducted deep-dive research into Gen Z streaming behavior on Spotify, YouTube Shorts, and Instagram Reels. Evaluated viral remix mechanics, nostalgia-driven pop culture trends, and creator licensing bottlenecks to isolate core drivers of youthful content adoption.',
      strategy: 'Devised a synchronized 5-channel digital engagement strategy that bridged legacy melodies with modern remix culture, UGC audio challenges, and interactive digital storytelling, coupled with an IP monetization roadmap.',
      execution: 'Structured an omni-channel rollout across TikTok/Reels sound bites, college campus creator ambassador programs, collaborative playlisting, micro-influencer dance/lip-sync campaigns, and immersive short-format video drops.',
      outcome: 'Presented a high-impact strategy pitch to academic and industry adjudicators, detailing how legacy IP can achieve sustainable Gen Z virality, expanded stream monetization, and intergenerational brand affinity.'
    },
    highlights: [
      'Repositioned 50+ years of Hindi music heritage for contemporary youth listeners.',
      'Designed a multi-tier five-channel digital engagement and content distribution matrix.',
      'Formulated actionable IP monetisation models leveraging micro-licensing and streaming algorithms.'
    ]
  },
  {
    id: 'community-heartlink',
    title: 'Community HeartLink Platform',
    subtitle: 'Social Impact Ecosystem & No-Code Volunteer Discovery Engine',
    category: 'Social Impact & Digital Platform',
    period: '2025',
    summary: 'An empirical research study and ready-to-launch digital collaboration platform connecting youth volunteers with grassroots NGOs, built using Lovable AI.',
    metrics: [
      { label: 'Survey Participants', value: '150+' },
      { label: 'NGO Partners', value: '5 NGOs' },
      { label: 'Architecture', value: 'No-Code AI' },
      { label: 'Deployment Status', value: 'Ready-to-Launch' }
    ],
    tags: ['Primary Research', 'Platform Design', 'Social Innovation', 'Lovable AI', 'NGO Collaboration'],
    caseStudy: {
      problem: 'Grassroots NGOs operate with severe resource constraints and struggle with volunteer retention, while motivated youth face significant friction discovering verified, nearby community impact initiatives.',
      research: 'Formulated and executed a comprehensive primary survey study engaging 150+ student and professional respondents. Uncovered that 78% of willing volunteers aborted participation due to opaque sign-up processes, lack of skill-matching, and scheduling inflexibility.',
      strategy: 'Architected an intuitive two-sided digital marketplace model that simplifies discovery, verifies NGO credentials, and offers seamless self-service volunteer project matching.',
      execution: 'Engaged with leaders across 5 established NGOs to align platform specifications. Built and validated a responsive, full-featured web application prototype using Lovable AI, complete with registration portals, event boards, and collaboration chat.',
      outcome: 'Delivered an end-to-end, ready-to-deploy digital platform bridging social organizations with volunteer capital, praised for human-centered UX and data-grounded strategic foundation.'
    },
    highlights: [
      'Conducted robust primary survey research with 150+ participants to diagnose volunteer drop-off.',
      'Secured collaboration intent and platform onboarding from five grassroots NGOs.',
      'Developed and tested an interactive, production-ready no-code web platform powered by Lovable AI.'
    ]
  },
  {
    id: 'markbuzz-marketing-club',
    title: 'MarkBuzz – Marketing Mania',
    subtitle: 'Flagship Inter-Collegiate Event Marketing & Corporate Sponsorship',
    category: 'Event Marketing & Sponsorship',
    period: '2025',
    summary: 'Orchestrated end-to-end event marketing, sponsorship negotiation, and hospitality operations for "Marketing Mania" at IILM University, hosting over 100 competitive student teams.',
    metrics: [
      { label: 'Participating Teams', value: '100+ Teams' },
      { label: 'Title Sponsor', value: 'Rubaroo' },
      { label: 'Role', value: 'Lead Coordinator' },
      { label: 'Impact', value: 'Campus-Wide' }
    ],
    tags: ['Event Marketing', 'Sponsorship Pitching', 'Cross-functional Logistics', 'Vendor Negotiation', 'Brand Activation'],
    caseStudy: {
      problem: 'Organizing a large-scale, multi-stage inter-collegiate marketing simulation required capital, high team registration turnout, multi-venue logistics, and attractive brand incentives.',
      research: 'Benchmarked regional collegiate competitions and surveyed local hospitality brands in Greater Noida to identify mutually beneficial brand sponsorship synergies.',
      strategy: 'Built a pitch deck emphasizing footfall, youth visibility, and direct brand trial, positioning Rubaroo RestroBar as the official event sponsor with on-site branding.',
      execution: 'Successfully negotiated monetary and in-kind sponsorship terms with Rubaroo leadership. Coordinated venue scheduling, promotional social media drives, team onboarding, and lodging logistics for 100+ student teams.',
      outcome: 'Executed one of the most successful marketing events at IILM University, achieving record registration numbers, stellar participant satisfaction, and sponsor ROI.'
    },
    highlights: [
      'Spearheaded operations and hospitality for 100+ participating teams across universities.',
      'Negotiated and closed commercial sponsorship deal with Rubaroo RestroBar.',
      'Served as central coordinator managing budget, scheduling, and live competition rounds.'
    ]
  },
  {
    id: 'tedx-iilm',
    title: 'TEDx IILM University',
    subtitle: 'Executive Branding, Speaker Curation & Stakeholder Management',
    category: 'Branding & Stakeholder Management',
    period: '2026',
    summary: 'Core committee member driving VIP speaker relations, strategic partner sponsorships, event aesthetics, and high-stakes stakeholder coordination for TEDx IILM.',
    metrics: [
      { label: 'Event Reach', value: 'Global TEDx' },
      { label: 'Stakeholders', value: 'Cross-functional' },
      { label: 'Role', value: 'Core Committee' },
      { label: 'Year', value: '2026' }
    ],
    tags: ['Brand Governance', 'Public Relations', 'Sponsorship Management', 'Speaker Curation', 'TEDx Standards'],
    caseStudy: {
      problem: 'TEDx events demand strict compliance with global TED licensing protocols, high-caliber speaker curation, institutional sponsor funding, and flawless stage management.',
      research: 'Analyzed global TEDx curation themes and regional audience interests to construct a compelling, intellectual event narrative suitable for modern thought leaders.',
      strategy: 'Developed a unified stakeholder communication protocol covering prospective corporate sponsors, university administration, and external celebrity/industry speakers.',
      execution: 'Managed real-time speaker travel and tech setups, secured financial backing from brand sponsors, and ensured visual branding strictly adhered to TED design guidelines across print, digital, and stage media.',
      outcome: 'Co-delivered an intellectually stimulating TEDx conference that elevated university reputation, received glowing speaker feedback, and engaged attendees across keynotes.'
    },
    highlights: [
      'Served as Core Member driving speaker liaison and stakeholder relations.',
      'Secured corporate sponsorships and managed sponsorship deliverable compliance.',
      'Maintained global TEDx brand guidelines across all digital and experiential touchpoints.'
    ]
  },
  {
    id: 'workplace-conflict-resolution',
    title: 'Workplace Conflict Resolution Simulation',
    subtitle: 'Strategic Labour-Management Framework & Culture Engineering',
    category: 'Organisational Behaviour',
    period: '2025',
    summary: 'Executive simulation of the HR Manager role, designing a comprehensive labour-management mediation architecture aimed at grievance resolution and employee retention.',
    metrics: [
      { label: 'Role Simulated', value: 'HR Manager' },
      { label: 'Core Focus', value: 'Retention' },
      { label: 'Framework', value: 'Interest-Based' },
      { label: 'Domain', value: 'OB & Industrial Rel.' }
    ],
    tags: ['Conflict Resolution', 'Employee Relations', 'HR Management', 'Mediation', 'Retention Strategy'],
    caseStudy: {
      problem: 'Simulated a volatile industrial deadlock where worker grievances regarding compensation, working conditions, and supervisory friction threatened catastrophic employee attrition and operational stoppage.',
      research: 'Evaluated contemporary conflict theories (Thomas-Kilmann Model, Harvard Negotiation Project) and reviewed statutory industrial dispute resolution mechanisms in Indian labor contexts.',
      strategy: 'Constructed an interest-based bargaining model replacing adversarial posturing with mutual-gain problem-solving workshops and structured grievance escalation tiers.',
      execution: 'Role-played high-tension mediation sessions as the Lead HR Manager, proposing joint safety committees, revised incentive metrics, and open-door manager review panels.',
      outcome: 'Successfully resolved all simulated dispute parameters, achieving unanimous stakeholder sign-off, protecting retention metrics, and reinforcing a psychologically safe work culture.'
    },
    highlights: [
      'Simulated executive HR leadership in high-stakes labour negotiations.',
      'Designed structured grievance handling and employee retention frameworks.',
      'Demonstrated deep empathy, conflict mitigation, and strategic negotiation proficiency.'
    ]
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'iim-sirmaur-mdp',
    title: 'Management Development Programme (MDP)',
    issuer: 'Indian Institute of Management Sirmaur (IIM Sirmaur)',
    year: '2026',
    category: 'Executive Education',
    description: 'Intensive 5-day residential executive programme concentrating on strategic leadership, systemic thinking, and data-driven managerial decision-making using Harvard-style business cases.',
    skillsGained: [
      'Strategic Decision-Making',
      'Executive Leadership',
      'Case Analysis Methodology',
      'Change Management',
      'Managerial Economics'
    ],
    hasDocument: true,
  },
  {
    id: 'hcltech-analytics',
    title: 'Business Analytics and Data-Driven Decision-Making',
    issuer: 'HCLTech',
    year: '2025',
    category: 'Business Analytics',
    description: 'Comprehensive industry program focused on extracting actionable intelligence from enterprise datasets, regression models, trend analysis, and translating analytical outputs into business strategy.',
    skillsGained: [
      'Business Analytics',
      'Predictive Modeling',
      'Data Interpretation',
      'Trend & Variance Analysis',
      'Managerial Reporting'
    ],
    hasDocument: true,
  },
  {
    id: 'nism-mutual-funds',
    title: 'NISM Series V-A: Mutual Fund Distributors Certification',
    issuer: 'National Institute of Securities Markets (NISM / SEBI)',
    year: '2026',
    category: 'Wealth Management',
    description: 'Official regulatory certification certifying mastery in mutual fund structure, investor risk profiling, scheme evaluation, regulatory compliances, and ethical wealth advisory standards.',
    skillsGained: [
      'Mutual Fund Analysis',
      'Risk Profiling & Asset Allocation',
      'SEBI Regulatory Compliance',
      'Investor Suitability Assessment',
      'Portfolio Rebalancing'
    ],
    imagePath: '/assets/cert_nism_mutual_fund.png',
    hasDocument: true,
  },
  {
    id: 'nism-securities-foundation',
    title: 'NISM Series XII: Securities Markets Foundation Certification',
    issuer: 'National Institute of Securities Markets (NISM / SEBI)',
    year: '2026',
    category: 'Financial Markets',
    description: 'Rigorous foundation credential validating in-depth understanding of Indian capital markets, equity and debt instruments, derivative mechanisms, trading, and post-trade settlements.',
    skillsGained: [
      'Capital Markets Structure',
      'Equity & Debt Instruments',
      'Derivatives Fundamentals',
      'Clearing & Settlement Mechanics',
      'Financial Regulations'
    ],
    imagePath: '/assets/cert_nism_securities.png',
    hasDocument: true,
  }
];

export const SKILLS_DATA = {
  hrRecruitment: [
    { name: 'Talent Acquisition', level: 'Advanced Competency', desc: 'End-to-end recruitment lifecycle from sourcing to offer release' },
    { name: 'Resume Screening', level: 'Advanced Competency', desc: 'High-speed, high-accuracy CV assessment against role benchmarks' },
    { name: 'Candidate Shortlisting', level: 'Advanced Competency', desc: 'Calibrating candidate qualifications with hiring manager requirements' },
    { name: 'Candidate Sourcing', level: 'Core Competency', desc: 'Leveraging digital job portals, networking channels & campus talent pools' },
    { name: 'Talent Mapping', level: 'Core Competency', desc: 'Benchmarking industry competitors & building prospective talent pipelines' },
    { name: 'Interview Scheduling', level: 'Advanced Competency', desc: 'Seamless multi-panel coordination and calendar synchronization' },
    { name: 'Hiring Manager Coordination', level: 'Advanced Competency', desc: 'Brief alignment, feedback consolidation & SLA management' },
    { name: 'Candidate Follow-up', level: 'Advanced Competency', desc: 'Transparent communication maintaining strong employer brand sentiment' },
    { name: 'Onboarding Support', level: 'Core Competency', desc: 'Pre-joining engagement, induction coordination & documentation' },
    { name: 'Candidate Documentation', level: 'Advanced Competency', desc: 'Rigorous verification of credentials, background checks & compliance' },
    { name: 'Recruitment Reporting', level: 'Advanced Competency', desc: 'Weekly pipeline health, turnaround metrics & status dashboards' },
  ],
  tools: [
    { name: 'MS Excel', level: 'Advanced Functional', desc: 'VLOOKUP, Pivot Tables, logical formulas, data modeling, recruitment trackers', icon: 'FileSpreadsheet' },
    { name: 'PowerPoint', level: 'Executive Ready', desc: 'High-impact investor & managerial pitch decks, visual hierarchy, branding', icon: 'Presentation' },
    { name: 'MS Word', level: 'Professional', desc: 'Executive documentation, formal reporting, offer briefs & case summaries', icon: 'FileText' },
    { name: 'Canva', level: 'Creative Mastery', desc: 'Visual branding assets, marketing campaign graphics, promotional flyers', icon: 'Palette' },
    { name: 'Lovable AI', level: 'Working Proficiency', desc: 'Rapid no-code application scaffolding, UI prototyping, digital solutions', icon: 'Sparkles' },
  ],
  analyticalBusiness: [
    { name: 'Business Analytics', level: 'Strategic Proficiency', desc: 'Formulating data queries, identifying business bottlenecks, performance drivers' },
    { name: 'Data Analysis', level: 'Core Competency', desc: 'Quantitative synthesis, statistical summarization, insight extraction' },
    { name: 'Market Research', level: 'Strong Proficiency', desc: 'Primary & secondary research methodologies, competitive benchmarking' },
    { name: 'Survey Analysis', level: 'Demonstrated Practice', desc: 'Instrument design, sample collection, demographic cross-tabulation (150+ respondents)' },
    { name: 'Financial Accounting', level: 'Academic Foundation', desc: 'Income statements, balance sheet health, working capital dynamics' },
    { name: 'Ratio Analysis', level: 'Analytical Practice', desc: 'Liquidity, profitability, leverage and efficiency ratios for business valuation' },
  ],
  coreStrengths: [
    { name: 'Written & Verbal Communication', level: 'Signature Strength', desc: 'Articulate presentation of complex strategies to senior leadership & peers' },
    { name: 'Stakeholder Coordination', level: 'Signature Strength', desc: 'Managing multi-tiered relationships across universities, sponsors, and candidates' },
    { name: 'Problem Solving', level: 'Core Competency', desc: 'Translating ambiguous operational hurdles into pragmatic action plans' },
    { name: 'Presentation & Pitching Skills', level: 'Signature Strength', desc: 'Confident public speaking, case competition defenses, and sponsorship closing' },
  ]
};

export const DASHBOARD_METRICS: MetricItem[] = [
  { id: 'cvs-screened', value: 1000, suffix: '+', label: 'CVs Screened', category: 'Recruitment Operations', detail: 'Verified at StoneX Global for experience center staffing' },
  { id: 'candidates-shortlisted', value: 100, suffix: '+', label: 'Candidates Shortlisted', category: 'Recruitment Operations', detail: 'Pre-qualified across competencies and background criteria' },
  { id: 'interviews-coordinated', value: 20, suffix: '+', label: 'Interviews Coordinated', category: 'Recruitment Operations', detail: 'Full lifecycle scheduling and panel management' },
  { id: 'candidates-delivered', value: 10, suffix: '+', label: 'Final Candidates Delivered', category: 'Recruitment Operations', detail: 'Transferred directly to hiring managers with high acceptance rate' },
  { id: 'research-participants', value: 150, suffix: '+', label: 'Survey Respondents', category: 'Market & Social Research', detail: 'Primary research on volunteer barriers for Community HeartLink' },
  { id: 'ngo-partnerships', value: 5, suffix: ' NGOs', label: 'NGO Partnerships Secured', category: 'Market & Social Research', detail: 'Collaborative MoUs and platform onboarding commitments' },
  { id: 'teams-coordinated', value: 100, suffix: '+', label: 'Student Teams Hosted', category: 'Event & Brand Management', detail: 'Marketing Mania flagship collegiate competition at IILM' },
  { id: 'years-music-repositioned', value: 50, suffix: '+ Yrs', label: 'Music Heritage Repositioned', category: 'Marketing Strategy', detail: 'Saregama 2025 Case Competition Gen Z engagement model' }
];

export const RECRUITMENT_FUNNEL = [
  { stage: 'Profiles Sourced & Screened', count: 1000, rate: '100%' },
  { stage: 'Strict Quality Shortlisting', count: 100, rate: '10.0%' },
  { stage: 'Panel Interviews Coordinated', count: 20, rate: '2.0%' },
  { stage: 'Qualified Hiring Manager Deliveries', count: 10, rate: '1.0%' },
];
