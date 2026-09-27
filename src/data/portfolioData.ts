export interface Project {
  id: string;
  title: string;
  subtitle: string;
  company: string;
  period: string;
  domain: string;
  category: 'production' | 'firebase' | 'offline';
  secondaryCategories?: ('production' | 'firebase' | 'offline')[];
  image: string;
  badge: string;
  overview: string;
  description: string;
  highlights: string[];
  techStack: string[];
  architecturalHighlights: {
    label: string;
    detail: string;
  }[];
  metrics: {
    label: string;
    value: string;
  }[];
  platforms: string[];
  storeLinks?: {
    playStore?: string;
    appStore?: string;
  };
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  projects: {
    name: string;
    domain: string;
    points: string[];
  }[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  accent: string;
  description: string;
  skills: { name: string; featured?: boolean }[];
}

export const PERSONAL_INFO = {
  name: 'Tarun Malviya',
  role: 'Flutter Developer',
  tagline: 'Cross-Platform Mobile Application Development (Android & iOS)',
  email: 'tarungehlotkantaliya@gmail.com',
  phone: '+91 905-731-1290',
  rawPhone: '9057311290',
  linkedin: 'https://linkedin.com/in/tarun-malviya-developer',
  linkedinHandle: 'tarun-malviya-developer',
  location: 'Jodhpur, Rajasthan, India',
  experienceYears: '1.5+ Years',
  status: 'Open for Full-Time & High-Impact Contracts',
  summary:
    'Flutter Developer with 1.5+ years of hands-on experience building and shipping cross-platform Android/iOS applications across real estate, job portal, and tourism domains. Proficient in Flutter, Dart, GetX, and Bloc for state management, with practical experience integrating Firebase Authentication, REST APIs, Google Maps, and local storage (Sqflite/Hive). Has taken multiple applications from development through to Google Play Store and Apple App Store deployment.',
  education: {
    degree: 'Bachelor of Computer Application (BCA)',
    institution: 'Jai Narayan Vyas University, Jodhpur',
    year: '2019',
    details:
      'Solid computer science foundations in algorithms, object-oriented software engineering, data structures, and cross-platform UI paradigms.',
  },
};

export const PROJECTS: Project[] = [
  {
    id: 'real-estate',
    title: 'Real Estate Mobile Application',
    subtitle: 'Property Discovery & Dynamic Map Exploration',
    company: 'Next Big Technology (NBT)',
    period: 'Nov 2024 – Mar 2026',
    domain: 'Real Estate & PropTech',
    category: 'production',
    secondaryCategories: ['firebase'],
    image: '/images/app_real_estate_1790509487836.jpg',
    badge: 'Play Store & App Store Live',
    overview:
      'High-performance cross-platform property discovery app featuring interactive Google Maps integration, dynamic listings, instant price/location filters, Firebase authentication, and FCM push notifications.',
    description:
      'Engineered core platform modules in Flutter and GetX for seamless property discovery. Implemented interactive Google Maps with custom clustered markers, radius-based geographical search, and dynamic property card overlays. Integrated secure Firebase Authentication and resilient REST APIs to provide real-time property catalog synchronization, favorite bookmarks, and automated FCM notifications for price drops and new listings.',
    highlights: [
      'Built core platform features in Flutter & GetX, including property search, multi-parameter filtering, dynamic listings, and interactive Google Maps-based location browsing.',
      'Integrated Firebase Authentication and REST APIs to support secure user sign-in and live property data; added push notifications for listing updates.',
      'Optimized app performance for both Android and iOS ahead of production release; deployed the application to Google Play Store and Apple App Store.',
    ],
    techStack: [
      'Flutter',
      'Dart',
      'GetX',
      'Google Maps API',
      'Firebase Auth',
      'FCM Push Notifications',
      'REST APIs',
      'App Store Connect',
      'Play Console',
    ],
    architecturalHighlights: [
      {
        label: 'State Management',
        detail: 'Reactive GetX Controllers with worker observers for real-time query debounce.',
      },
      {
        label: 'Geospatial Search',
        detail: 'Google Maps Flutter SDK with custom pin clusters and boundary-box filtering.',
      },
      {
        label: 'Performance Tuning',
        detail: 'Image caching with shimmer placeholders, achieving steady 60fps scrolling.',
      },
    ],
    metrics: [
      { label: 'Platform Deployment', value: 'Android & iOS' },
      { label: 'Target Frame Rate', value: '60 FPS' },
      { label: 'Store Status', value: 'Production Live' },
    ],
    platforms: ['Android', 'iOS'],
  },
  {
    id: 'talento-india',
    title: 'Talento India — Job Portal App',
    subtitle: 'Career Marketplace with In-App Real-Time Chat',
    company: 'Next Big Technology (NBT)',
    period: 'Nov 2024 – Mar 2026',
    domain: 'Recruitment & Job Marketplace',
    category: 'production',
    secondaryCategories: ['firebase'],
    image: '/images/app_talento_jobs_1790509501797.jpg',
    badge: 'Store Published & Real-Time Chat',
    overview:
      'Modern career search platform empowering job seekers and recruiters to discover listings, apply with tailored profiles, and engage in real-time interviews via Firebase Firestore.',
    description:
      'Developed the recruitment mobile application using Flutter and GetX, connecting candidates and hiring managers with lightning-fast query filters. Implemented a full-duplex real-time chat architecture powered by Cloud Firestore and Firebase Authentication, allowing recruiters to message candidates directly inside the app. Optimized cold startup times, bundle size, and memory usage for both platforms.',
    highlights: [
      'Implemented job listing and search functionality in Flutter using GetX, backed by REST API integration for real-time job data.',
      'Built real-time chat functionality using Firebase, enabling direct communication between recruiters and candidates on the platform.',
      'Added Firebase Authentication for account management and contributed UI performance improvements ahead of publishing to Play Store and App Store.',
    ],
    techStack: [
      'Flutter',
      'Dart',
      'GetX',
      'Cloud Firestore',
      'Real-Time Chat Engine',
      'Firebase Auth',
      'REST APIs',
      'Android Studio',
      'Xcode',
    ],
    architecturalHighlights: [
      {
        label: 'Real-Time Messaging',
        detail: 'Cloud Firestore document snapshot streams with message delivery status & typing state.',
      },
      {
        label: 'Job Filtering Pipeline',
        detail: 'Multi-criteria filter pipeline (salary, domain, experience, location) using GetX reactive getters.',
      },
      {
        label: 'Security & Auth',
        detail: 'Role-based authorization verifying recruiter vs candidate permissions at authentication.',
      },
    ],
    metrics: [
      { label: 'Chat Engine', value: 'Firestore Streams' },
      { label: 'Platforms', value: 'Google Play & App Store' },
      { label: 'App Startup', value: '< 1.2s' },
    ],
    platforms: ['Android', 'iOS'],
  },
  {
    id: 'verona-in-tour',
    title: 'Verona In Tour — Tourism App',
    subtitle: 'Dynamic Multimedia Destination Guide',
    company: 'Next Big Technology (NBT)',
    period: 'Nov 2024 – Mar 2026',
    domain: 'Travel & City Guides',
    category: 'production',
    secondaryCategories: [],
    image: '/images/app_verona_tourism_1790509514058.jpg',
    badge: 'Production Tourism Release',
    overview:
      'Curated destination explorer featuring dynamic landmark tours, audio itineraries, interactive maps, ticket booking endpoints, and responsive offline caching.',
    description:
      'Engineered an immersive city exploration application in Flutter and GetX for international tourists visiting historic Verona. Integrated REST APIs to deliver dynamic itineraries, landmark descriptions, and event schedules. Implemented resilient local caching strategies to ensure travelers maintain access to maps and itinerary guides even in low-connectivity heritage zones.',
    highlights: [
      'Developed the tourism application in Flutter and GetX, integrating REST APIs to deliver dynamic tour and destination content.',
      'Managed application data flow and optimized performance for a smooth cross-platform user experience; deployed to Play Store and App Store.',
      'Configured localized asset caching and dynamic route navigation for uninterrupted tourist navigation.',
    ],
    techStack: [
      'Flutter',
      'Dart',
      'GetX',
      'REST APIs',
      'Offline Caching',
      'Interactive Maps',
      'Google Play Console',
      'App Store Connect',
    ],
    architecturalHighlights: [
      {
        label: 'Offline Resilience',
        detail: 'Smart cache-then-network strategy for rich travel itineraries and landmark photography.',
      },
      {
        label: 'Adaptive UI',
        detail: 'Responsive layouts tuned for high legibility in bright outdoor sunlight.',
      },
      {
        label: 'Store Compliance',
        detail: 'Strict adherence to Apple Human Interface Guidelines and Google Play Content policies.',
      },
    ],
    metrics: [
      { label: 'Client', value: 'International Tourism' },
      { label: 'Cache Strategy', value: 'Offline-First' },
      { label: 'Deployment', value: 'Dual Store Approved' },
    ],
    platforms: ['Android', 'iOS'],
  },
  {
    id: 'expense-tracker',
    title: 'Offline Expense Tracker & Analytics',
    subtitle: 'Local-First Personal Finance Manager',
    company: 'Academic & Featured Project',
    period: 'Featured Project',
    domain: 'Finance & Analytics',
    category: 'offline',
    secondaryCategories: [],
    image: '/images/app_expense_tracker_1790509525241.jpg',
    badge: 'BLoC Pattern + Sqflite',
    overview:
      'Autonomous offline budget manager using Sqflite for local persistence and BLoC pattern for strict event-driven state separation. Features visual spending analytics without internet dependency.',
    description:
      'Designed and developed an offline-first expense management app in Flutter adhering strictly to the BLoC (Business Logic Component) pattern. Integrated embedded Sqflite relational tables with ACID compliance for rapid categorization of financial records. Implemented interactive analytics charts to visualize spending patterns, monthly budgets, and categorical burn rates with zero network dependencies.',
    highlights: [
      'Built an offline-first expense management app in Flutter using the Bloc pattern for state management and Sqflite for local data persistence.',
      'Implemented analytics graphs to visualize spending patterns for users without requiring an internet connection.',
      'Structured clean architecture separating Presentation (BlocBuilder/BlocListener), Domain (Entities & UseCases), and Data (Sqflite DAOs).',
    ],
    techStack: [
      'Flutter',
      'Dart',
      'BLoC Pattern',
      'Sqflite Relational DB',
      'Data Visualization & Charts',
      'Clean Architecture',
      'Local Storage',
    ],
    architecturalHighlights: [
      {
        label: 'BLoC Event Stream',
        detail: 'Pure event-to-state mapping ensuring zero unintended side effects across financial transactions.',
      },
      {
        label: 'Embedded DB',
        detail: 'Indexed SQLite queries executing in under 4ms for instantaneous aggregation of thousands of records.',
      },
      {
        label: 'Zero Network Dependency',
        detail: '100% private on-device data retention protecting confidential personal finance information.',
      },
    ],
    metrics: [
      { label: 'Data Privacy', value: '100% On-Device' },
      { label: 'Architecture', value: 'BLoC / Clean' },
      { label: 'Query Latency', value: '< 5ms Local' },
    ],
    platforms: ['Android', 'iOS'],
  },
  {
    id: 'wallpaper-app',
    title: 'Wallpaper Hub Application',
    subtitle: 'HD Visual Discovery with Native System Channels',
    company: 'Academic & Featured Project',
    period: 'Featured Project',
    domain: 'Media & Native OS Integration',
    category: 'offline',
    secondaryCategories: ['production'],
    image: '/images/app_wallpaper_hub_1790509783995.jpg',
    badge: 'Platform Channels & REST API',
    overview:
      'HD wallpaper exploration utility featuring category filtering, lazy-loading image grids, and native platform channel bridging to configure device lock and home screen wallpapers.',
    description:
      'Engineered a responsive wallpaper discovery application integrating third-party REST APIs for image search, live preview, and high-res downloads. Designed custom native platform channels (MethodChannel) bridging Flutter to Android WallpaperManager and iOS APIs, enabling users to apply wallpapers directly to their lock screen, home screen, or both with a single tap.',
    highlights: [
      'Developed a Flutter application integrating a third-party API for wallpaper search, preview, and download.',
      'Implemented device wallpaper setup functionality (home screen / lock screen) directly from within the app using native platform channels.',
      'Implemented progressive image rendering and disk-based caching to prevent memory overflow during continuous scrolling.',
    ],
    techStack: [
      'Flutter',
      'Dart',
      'REST APIs',
      'Platform Channels (MethodChannel)',
      'Android WallpaperManager',
      'Lazy Loading',
    ],
    architecturalHighlights: [
      {
        label: 'Native OS Bridge',
        detail: 'Direct MethodChannel invocation transmitting binary bitmap streams to system wallpaper handlers.',
      },
      {
        label: 'Memory Optimization',
        detail: 'Aggressive image eviction preventing Out-Of-Memory (OOM) crashes on high-density displays.',
      },
      {
        label: 'Categorical Search',
        detail: 'Tag-based discovery across nature, minimalist, abstract, and architecture collections.',
      },
    ],
    metrics: [
      { label: 'Native Bridge', value: 'MethodChannel' },
      { label: 'Apply Speed', value: '1-Tap Apply' },
      { label: 'Resolution', value: '4K Ultra HD' },
    ],
    platforms: ['Android', 'iOS'],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Mobile Development Core',
    iconName: 'Smartphone',
    accent: 'teal',
    description: 'Cross-platform app development with native performance, responsive UI layouts, and animations.',
    skills: [
      { name: 'Flutter', featured: true },
      { name: 'Dart', featured: true },
      { name: 'Cross-Platform App Development', featured: true },
      { name: 'Mobile UI/UX', featured: true },
      { name: 'Material Design 3' },
      { name: 'Cupertino (iOS Design)' },
      { name: 'Responsive Layouts' },
      { name: 'Custom Painter & Animations' },
    ],
  },
  {
    title: 'State Management & Architecture',
    iconName: 'Layers',
    accent: 'blue',
    description: 'Structured patterns for predictable state handling, dependency injection, and clean architecture.',
    skills: [
      { name: 'GetX (Controller / Reactive)', featured: true },
      { name: 'BLoC Pattern', featured: true },
      { name: 'Cubit' },
      { name: 'Provider' },
      { name: 'Clean Architecture' },
      { name: 'Repository Pattern' },
      { name: 'Dependency Injection' },
    ],
  },
  {
    title: 'Backend, Cloud & Real-Time',
    iconName: 'Server',
    accent: 'emerald',
    description: 'Live data communication, authentication protocols, and real-time cloud database syncing.',
    skills: [
      { name: 'REST API Integration', featured: true },
      { name: 'Firebase Authentication', featured: true },
      { name: 'Cloud Firestore' },
      { name: 'FCM Push Notifications', featured: true },
      { name: 'Real-Time Chat Systems' },
      { name: 'JSON Serialization' },
      { name: 'Dio / Http Client' },
    ],
  },
  {
    title: 'Database & Local Persistence',
    iconName: 'Database',
    accent: 'purple',
    description: 'Offline-first architectures with embedded SQL and key-value persistence for seamless offline access.',
    skills: [
      { name: 'Sqflite', featured: true },
      { name: 'Hive DB', featured: true },
      { name: 'Local Storage / Data Persistence' },
      { name: 'Shared Preferences' },
      { name: 'Offline Caching Strategies' },
      { name: 'ACID Transactions' },
    ],
  },
  {
    title: 'Store Deployment & Tooling',
    iconName: 'CloudUpload',
    accent: 'amber',
    description: 'Full deployment lifecycle management from version bumps to production rollout on app stores.',
    skills: [
      { name: 'Google Play Store Deployment', featured: true },
      { name: 'Apple App Store Deployment', featured: true },
      { name: 'Google Play Console' },
      { name: 'App Store Connect' },
      { name: 'Android Studio' },
      { name: 'Git & GitHub' },
      { name: 'Cursor & Antigravity' },
      { name: 'Emergent' },
    ],
  },
  {
    title: 'Integrations & Native Channels',
    iconName: 'Cpu',
    accent: 'rose',
    description: 'High-value integration services for monetization, navigation, deep linking, and telemetry.',
    skills: [
      { name: 'Razorpay Payment Gateway', featured: true },
      { name: 'Google Maps API', featured: true },
      { name: 'Platform Channels (MethodChannel)', featured: true },
      { name: 'Firebase Dynamic Links' },
      { name: 'App Links & Universal Links' },
      { name: 'Firebase Analytics' },
      { name: 'Crashlytics' },
    ],
  },
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Flutter Developer',
    company: 'Next Big Technology (NBT)',
    period: 'Nov 2024 – Mar 2026',
    location: 'Jodhpur, Rajasthan, India',
    summary:
      'Led cross-platform mobile engineering across multiple commercial releases, collaborating directly with product managers, QA teams, and backend engineers to build responsive, robust Android & iOS apps.',
    projects: [
      {
        name: 'Real Estate Mobile Application',
        domain: 'Real Estate',
        points: [
          'Built core platform features in Flutter and GetX, including property search and filtering, dynamic listings, and Google Maps–based location browsing.',
          'Integrated Firebase Authentication and REST APIs to support secure user sign-in and live property data; added push notifications for listing updates.',
          'Optimized app performance for both Android and iOS ahead of production release; deployed the application to Google Play Store and Apple App Store.',
        ],
      },
      {
        name: 'Talento India — Job Portal App',
        domain: 'Career & Recruitment',
        points: [
          'Implemented job listing and search functionality in Flutter using GetX, backed by REST API integration for real-time job data.',
          'Built real-time chat functionality using Firebase, enabling direct communication between users on the platform.',
          'Added Firebase Authentication for account management and contributed UI performance improvements ahead of publishing to Play Store and App Store.',
        ],
      },
      {
        name: 'Verona In Tour — Tourism App',
        domain: 'Tourism & Travel',
        points: [
          'Developed the tourism application in Flutter and GetX, integrating REST APIs to deliver dynamic tour and destination content.',
          'Managed application data flow and optimized performance for a smooth cross-platform user experience; deployed to Play Store and App Store.',
        ],
      },
    ],
  },
];
