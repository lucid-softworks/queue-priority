import { type QueueJob } from "@lucid-softworks/queue-core";
import { describe, expect, it } from "vitest";

import { compareQueuePriority, sortQueueJobs } from "../src/index.js";

const job = (id: string, priority: number, createdAt: number): QueueJob => ({
  attempt: 0,
  availableAt: 0,
  createdAt,
  data: null,
  id,
  maxAttempts: 1,
  name: "work",
  priority,
  state: "waiting",
  updatedAt: 0,
});

describe("queue priority", () => {
  it("orders by descending priority, age, then id without mutation", () => {
    const jobs = [
      job("b", 1, 0),
      job("a", 1, 0),
      job("old", 1, -1),
      job("high", 2, 5),
    ];
    const sorted = sortQueueJobs(jobs);
    expect(sorted.map(({ id }) => id)).toEqual(["high", "old", "a", "b"]);
    expect(jobs[0]?.id).toBe("b");
    expect(
      compareQueuePriority(jobs[0] as QueueJob, jobs[1] as QueueJob),
    ).toBeGreaterThan(0);
  });
});
