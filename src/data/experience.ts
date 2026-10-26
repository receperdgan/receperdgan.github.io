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
    role: "Senior Software Engineer (since Apr 2026); Software Engineer (Nov 2024 to Mar 2026)",
    location: "Antalya, Turkey",
    period: "Nov 2024 — Current",
    bullets: [
      "Built AviroConnect MCP, validated read-only AI access to the data hub of 20+ crew apps: 32 tasks ran 8x faster (132 h to 16 h); 10 users in 3 functions; ~1 FTE saved monthly.",
      "Secured it with MCP-compliant OAuth 2.1 on Entra ID, a WAF-safe query engine (the model never writes raw queries) and PII-free logs; 1,200+ tests, mutation testing, agent benchmarks.",
      "With DBA and cloud teams, cut cloud cost 75% at equal traffic (1M+ requests/day peaks); P50 latency 385 ms to 50 ms, P95 4.2 s to 1.5 s, 99.99% success.",
      "Traced Redis timeouts to thread-pool starvation (breaker trips 14/week to 0) and SQL pool exhaustion to auth lookups (38% of DB round trips, now cached).",
      "Built a passwordless external-access gateway on AWS (YARP, Elastic Beanstalk, RDS, OIDC; 590+ tests); cleared 62 SAST/SCA findings before launch, high severity 4 to 0.",
      "Replaced a third-party push provider with an in-house service (outbox, claim/lease): 7,000+ notifications to 3,500 devices in two weeks, zero errors.",
      "Moved team repos from Azure DevOps to GitHub and wrote the migration guide other teams use; added Datadog P95 dashboards and a support-ID scheme other teams adopted.",
      "In the team that moved crew ops off a 25-year-old stack (20+ apps, zero downtime); wrote the org's Claude coding standard; AI-native delivery task force member.",
    ],
    stack: [
      "C#",
      ".NET / ASP.NET Core",
      "Azure",
      "AWS",
      "SQL Server",
      "PostgreSQL",
      "Redis",
      "GitHub Actions",
      "Datadog",
      "MCP",
      "Microsoft Agent Framework",
      "React Native",
      "TypeScript",
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
