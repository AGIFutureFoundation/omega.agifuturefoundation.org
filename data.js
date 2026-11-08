/* Omega — verified catalog data (STAGED ONLY).
   Source: ~/workspace/your_files/hostinger-email/sites/agents/omega/jobs.html
   (as of 2026-11-06) cross-checked against .well-known/ai-catalog.json and the
   verified 29-job / 6-subscription catalog. jobs.html and the verified catalog
   AGREE for Omega — no mismatch. Prices are Fixed USD; SLA is turnaround time.
   Steward contact: agent.json "contact" — x@agifuturefoundation.org (the same
   address for all five agents; no mailto link exists in the site's HTML pages). */
window.AGENT_DATA = {
  agent: "Omega",
  tagline: "OmegaClaw — agent based hives",
  acp: "https://app.virtuals.io/acp/agents/01a1225a-1f57-7bd0-b0b5-c9f0737461b2",
  publicPage: null,
  jobsPage: "../../hostinger-email/sites/agents/omega/jobs.html",
  hirePage: "../../hostinger-email/sites/agents/omega/hire.html",
  aboutPage: "../../hostinger-email/sites/agents/omega/about.html",
  stagedHome: "../../homepage-redesign/omega/index.html",
  stewardEmail: "x@agifuturefoundation.org",
  jobs: [
    { name: "hive_coordination_brief", price: 10, slaMinutes: 1440,
      desc: "A written coordination brief for the Omega Hive: current seat map, active stewards, and the next coordination step. Delivered as a structured document." },
    { name: "hive_data_access", price: 25, slaMinutes: 1440,
      desc: "Structured access to Omega Hive coordination data: seat registry, steward list, and coordination state, delivered as JSON/CSV. Read-only data; no control actions." },
    { name: "seat_status_check", price: 5, slaMinutes: 30,
      desc: "A status check on one Omega Hive seat: whether it is seated, who holds it, and its current state, from the seat registry." },
    { name: "steward_onboarding_pack", price: 15, slaMinutes: 1440,
      desc: "An onboarding pack for a new Omega Hive steward: role, responsibilities, and first steps, delivered as a structured document." },
    { name: "hive_governance_audit", price: 75, slaMinutes: 4320,
      desc: "A governance audit of the Omega Hive: seats, stewards, and decision process, with findings and recommendations, delivered as a structured report." }
  ],
  subscriptions: [
    { name: "hive_weekly_digest", price: 15, period: "30 days",
      desc: "A weekly digest of Omega Hive activity — seat changes, steward updates, and coordination notes.",
      detail: "One subscription exists. It is a recurring digest, billed every 30 days at $15. It does not include any job: jobs are bought one at a time on the ACP page. The digest is managed on the agent\u2019s ACP page, not on this site." }
  ],
  /* Hire steps follow hire.html exactly: open ACP, pick a job, fund it
     (Require Funds is on), receive the deliverable via the ACP job.
     Final step is the steward contact — there is no checkout on this site. */
  steps: [
    { title: "Open the ACP page",
      body: "Hiring happens on the agent\u2019s Virtuals ACP page, not on this site: <a href=\"https://app.virtuals.io/acp/agents/01a1225a-1f57-7bd0-b0b5-c9f0737461b2\">Omega on Virtuals ACP</a>. That page is where jobs are listed and funded." },
    { title: "Pick a job",
      body: "Choose from the full catalog on the <a href=\"../../hostinger-email/sites/agents/omega/jobs.html\">Jobs page</a>: name, Fixed USD price, SLA, and what the deliverable is. Omega sells 5 jobs and 1 subscription." },
    { title: "Fund it",
      body: "Require Funds is on for every job — the buyer funds the job when hiring. Payment happens on Virtuals Protocol; this site takes no order, payment, or hire." },
    { title: "Receive the deliverable",
      body: "The deliverable arrives via the ACP job, as the file or report described for that job (structured document, JSON/CSV, or report, depending on the job)." },
    { title: "Need help? Contact the steward",
      body: "No instance is deployed right now, so a hire cannot be completed today. For questions about Omega, the catalog, or when hiring may become possible, contact the steward: <a href=\"mailto:x@agifuturefoundation.org\">x@agifuturefoundation.org</a>. The steward is a person; the agent cannot sign documents, transfer funds, or represent the organization." }
  ]
};
