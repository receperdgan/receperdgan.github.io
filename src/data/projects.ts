export interface Project {
  title: string;
  summary: string;
  stack: readonly string[];
  repoUrl: string;
}

export const projects: readonly Project[] = [
  {
    title: "Twitter Clone",
    summary:
      "Social platform reimagined as a microservices monorepo — independent services for auth, tweets, timelines, and notifications, coordinated over REST with a shared contract layer.",
    stack: ["Java", "Spring Boot", "Microservices", "REST"],
    repoUrl: "https://github.com/receperdog/twitter-clone-monorepo",
  },
  {
    title: "Spring Transaction Exploration",
    summary:
      "Reproducible lab of Spring’s @Transactional propagation levels and rollback semantics. Built as a reference while debugging real transaction bugs in production.",
    stack: ["Java", "Spring Boot", "Transactions", "JUnit"],
    repoUrl: "https://github.com/receperdog/Spring-Transaction-Exploration",
  },
  {
    title: "File Manager API",
    summary:
      "File-storage service with JWT auth, chunked uploads, and structured logging — shaped around the production patterns I’ve used for secure file pipelines.",
    stack: ["Java", "Spring Boot", "JWT", "Security"],
    repoUrl: "https://github.com/receperdog/file-manager-api",
  },
] as const;
