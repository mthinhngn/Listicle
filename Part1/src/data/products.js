const products = [
  {
    rank: 1,
    slug: "notion",
    name: "Notion",
    category: "Productivity",
    pricing: "Free plan; paid plans from $10 per user/month",
    founded: 2013,
    blurb: "A connected workspace for notes, documents, projects, and team knowledge.",
    growthSummary:
      "Notion grew by combining a flexible product with an enthusiastic template-making community and strong word of mouth.",
    growthTactics: [
      "Encouraged community-created templates and workflows",
      "Used a generous free plan to support individual adoption",
      "Expanded from personal use into collaborative team accounts"
    ],
    websiteUrl: "https://www.notion.com"
  },
  {
    rank: 2,
    slug: "figma",
    name: "Figma",
    category: "Design",
    pricing: "Free plan; paid plans from $16 per full seat/month",
    founded: 2012,
    blurb: "A browser-based collaborative platform for interface design and prototyping.",
    growthSummary:
      "Figma made design collaboration immediate by putting multiplayer editing in the browser and reducing setup friction.",
    growthTactics: [
      "Made sharing designs as simple as sending a link",
      "Built adoption through designers before expanding across teams",
      "Supported a plugin and community-resource ecosystem"
    ],
    websiteUrl: "https://www.figma.com"
  },
  {
    rank: 3,
    slug: "canva",
    name: "Canva",
    category: "Design",
    pricing: "Free plan; paid individual and team plans available",
    founded: 2012,
    blurb: "An online visual communication platform built for non-designers and teams.",
    growthSummary:
      "Canva broadened the design market with approachable tools, reusable templates, and content tailored to common jobs.",
    growthTactics: [
      "Created landing pages for specific design use cases",
      "Used templates to shorten time to a finished result",
      "Combined free access with paid premium content and features"
    ],
    websiteUrl: "https://www.canva.com"
  },
  {
    rank: 4,
    slug: "slack",
    name: "Slack",
    category: "Communication",
    pricing: "Free plan; paid plans from $7.25 per user/month",
    founded: 2009,
    blurb: "A channel-based workplace communication and collaboration platform.",
    growthSummary:
      "Slack spread from small teams outward by making workplace communication searchable, integrated, and easy to try.",
    growthTactics: [
      "Focused on team-level adoption rather than top-down rollout",
      "Connected with popular workplace tools through integrations",
      "Used a free tier to let teams prove value before purchasing"
    ],
    websiteUrl: "https://slack.com"
  },
  {
    rank: 5,
    slug: "calendly",
    name: "Calendly",
    category: "Scheduling",
    pricing: "Free plan; paid plans from $10 per seat/month",
    founded: 2013,
    blurb: "A scheduling automation platform that removes back-and-forth calendar coordination.",
    growthSummary:
      "Calendly embedded its own distribution into every invitation because recipients experienced the product while booking.",
    growthTactics: [
      "Turned shared scheduling links into product exposure",
      "Solved one narrow and frequently repeated workflow",
      "Expanded into team routing, integrations, and administration"
    ],
    websiteUrl: "https://calendly.com"
  },
  {
    rank: 6,
    slug: "airtable",
    name: "Airtable",
    category: "Productivity",
    pricing: "Free plan; paid plans from $20 per seat/month",
    founded: 2012,
    blurb: "A relational database platform with spreadsheet-like interfaces and no-code workflows.",
    growthSummary:
      "Airtable attracted users with familiar spreadsheet interactions while enabling more structured and powerful applications.",
    growthTactics: [
      "Provided templates for many industries and workflows",
      "Allowed individual teams to adopt the product independently",
      "Added automation and integrations as workflows matured"
    ],
    websiteUrl: "https://www.airtable.com"
  },
  {
    rank: 7,
    slug: "webflow",
    name: "Webflow",
    category: "Website Builder",
    pricing: "Free starter plan; paid site and workspace plans available",
    founded: 2013,
    blurb: "A visual website development platform with hosting and content management.",
    growthSummary:
      "Webflow built loyalty among designers who wanted visual control without giving up production-quality web output.",
    growthTactics: [
      "Educated users through detailed courses and tutorials",
      "Showcased customer sites as proof of product capability",
      "Developed an ecosystem of templates and professional creators"
    ],
    websiteUrl: "https://webflow.com"
  },
  {
    rank: 8,
    slug: "loom",
    name: "Loom",
    category: "Communication",
    pricing: "Free plan; paid plans from $15 per creator/month",
    founded: 2015,
    blurb: "An asynchronous video messaging platform for recording and sharing work.",
    growthSummary:
      "Loom made lightweight screen recording fast and shareable, allowing each viewed video to introduce another potential user.",
    growthTactics: [
      "Reduced recording and sharing to a short workflow",
      "Used shared video links as a natural acquisition channel",
      "Expanded from individual recordings to team video libraries"
    ],
    websiteUrl: "https://www.loom.com"
  }
];

for (const product of products) {
  Object.freeze(product.growthTactics);
  Object.freeze(product);
}

module.exports = Object.freeze(products);
