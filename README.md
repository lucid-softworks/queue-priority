# `@lucid-softworks/queue-priority`

Deterministic queue ordering: higher priority first, then older creation time,
then lexical id.

```ts
import { sortQueueJobs } from "@lucid-softworks/queue-priority";
import type { QueueJob } from "@lucid-softworks/queue-core";

const jobs: QueueJob[] = [
  {
    attempt: 0,
    availableAt: 0,
    createdAt: 0,
    data: null,
    id: "normal",
    maxAttempts: 1,
    name: "work",
    priority: 0,
    state: "waiting",
    updatedAt: 0,
  },
  {
    attempt: 0,
    availableAt: 0,
    createdAt: 1,
    data: null,
    id: "urgent",
    maxAttempts: 1,
    name: "work",
    priority: 10,
    state: "waiting",
    updatedAt: 1,
  },
];
const ready = sortQueueJobs(jobs);
```

`sortQueueJobs` returns a new array and never mutates the readonly input.
`compareQueuePriority` is suitable for standard sorting and priority queues.
