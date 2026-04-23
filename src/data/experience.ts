export interface Experience {
  company: string;
  companyUrl: string;
  role: string;
  location: string;
  period: string;
  bullets: readonly string[];
  stack: readonly string[];
}

export const experience: readonly Experience[] = [
  {
    company: "SunExpress",
    companyUrl: "https://www.sunexpress.com",
    role: "Senior Software Engineer",
    location: "Antalya, Turkey",
    period: "Nov 2024 — Current",
    bullets: [
      "Core engineer on the Crew Applications team (7 devs, 3 PMs); led architectural decisions including a monolith-vs-microservices evaluation that preserved delivery velocity, and mentor junior engineers and interns through active PR reviews and cloud onboarding.",
      "Reduced P95 latency from 4s to 1.5s via DB connection pool refactoring, indexing, and heap memory tuning; led team-wide Datadog adoption and engineered a Support-ID incident framework enabling rapid error triage for 3,000+ daily users.",
      "Led end-to-end migration of 10-year legacy .NET modules to ASP.NET Core with comprehensive unit and integration test coverage, powering the cabin-crew performance and upgrade platform used daily by 2,000+ crew members.",
      "Led the Azure DevOps to GitHub migration, designed self-hosted CI/CD pipelines, and authored BE/FE pipeline best practices now adopted as the team-wide standard; currently supporting the infrastructure team on the Azure-to-AWS migration.",
      "Built internal agentic flows on the Microsoft Agent Framework and deployed an MCP server exposing core business data to AI tools; authored a central Claude configuration repository adopted by 30+ engineers across 3 departments, driving the company’s SDLC-to-ADLC transition.",
    ],
    stack: [
      "Azure",
      "AWS",
      ".NET Core",
      "C#",
      "SQL Server",
      "PostgreSQL",
      "Redis",
      "Event Hub",
      "TypeScript",
      "React",
      "GitHub Actions",
      "Datadog",
      "Agent Framework",
      "MCP",
    ],
  },
  {
    company: "Ericsson",
    companyUrl: "https://www.ericsson.com",
    role: "Software Engineer",
    location: "Antalya, Turkey",
    period: "Oct 2023 — Nov 2024",
    bullets: [
      "Led the monolith-to-microservices transition of Turkcell.com.tr (1M+ daily visits), owning the invoice-settings microservice that today powers all Turkcell billing-preference flows.",
      "Designed a reusable SOAP-to-REST Adapter Pattern enabling every new microservice to communicate with legacy SOAP backends without protocol coupling.",
      "Authored the integration-test framework for the SOAP/REST adapter layer; adopted team-wide as the standard testing practice across Ericsson’s Turkcell account, lifting coverage to 90%+.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "SOAP/REST",
      "Kafka",
      "Redis",
      "JUnit",
      "Mockito",
      "Jenkins",
    ],
  },
  {
    company: "Atmosware",
    companyUrl: "https://www.atmosware.com.tr",
    role: "Software Engineer · Turkcell Group",
    location: "Antalya, Turkey",
    period: "Feb 2023 — Sep 2023",
    bullets: [
      "Re-engineered PL/SQL stored procedures powering music-provider royalty calculations for Fizy (1M+ daily users), cutting execution time from 5 hours to 30 minutes and enabling faster, more reliable payouts for the business unit.",
      "Cut personalized playlist query latency by 50% across millions of user-interaction records through DB-level index redesign and application-layer tuning, directly improving in-session UX for Fizy listeners.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Oracle SQL",
      "PL/SQL",
      "Cassandra",
      "Hazelcast",
      "Kafka",
    ],
  },
] as const;
