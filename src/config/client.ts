export const client = {
  // Business Details
  name: "J.O Garden Services",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in High Wycombe.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07534 911694",
  email: "",
  website: "",

  // Location
  address: "High Wycombe",
  city: "High Wycombe",
  county: "",
  postcode: "",
  basedIn: "High Wycombe",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "10",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "David Walker", rating: 5, text: "Excellent job, clearing an overgrown garden. Removed a large rotted deck and replaced with a beautiful lawn.", date: "2 years ago" },
    { name: "Natasha Verity", rating: 5, text: "Excellent service: hard work and expertise.", date: "3 years ago" },
    { name: "Gemma Young", rating: 5, text: "James cleared the very overgrown area at the back of our garden. The previous owners had let it go wild and there was a crumbling down shed and greenhouse frame. James cleared the lot and helped us arrange a skip. He worked really hard despite the rain! He was prompt and easy to communicate with. Would recommend.", date: "4 years ago" },
    { name: "Mike Wilkinson", rating: 5, text: "James replaced our steps which link the 2 levels of our garden last year and this review is way overdue! He thoughtfully planned, discussed and agreed his approach before starting, recommending a strong, attractive and very reasonably priced granite which I would never have thought of. The finished job is robust and attractive and enhances the entire garden. I would recommend James to anyone for his competence, reliability and fair pricing. He was also a pleasure to have around, a cheerful and positive presence, whatever the weather!", date: "5 years ago" },
    { name: "HILARY NICHOLSON", rating: 5, text: "James has transformed our garden! He worked with great care and attention to do exactly what we had asked to a very high standard. We are very pleased with the results. We have already asked James to do some further work for us in the summer and would highly recommend him to others.", date: "5 years ago" },
    { name: "Olly Britnell", rating: 5, text: "James undertook fencing, hedge and landscaping work including filling a large pond and we are delighted with all of them.  He provided a detailed quote and undertook the work quickly and to a high standard. Would recommend and use again.", date: "6 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "J.O Garden Services | Landscaper in High Wycombe",
    description: "Professional landscaper in High Wycombe. 5.0-star rated on Google. Call for a free quote.",
  },
};
