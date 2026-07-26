# `@lucid-softworks/queue-priority`

Deterministic queue ordering: higher priority first, then older creation time,
then lexical id.

```ts
import { sortQueueJobs } from "@lucid-softworks/queue-priority";

const ready = sortQueueJobs(jobs);
```

`sortQueueJobs` returns a new array and never mutates the readonly input.
`compareQueuePriority` is suitable for standard sorting and priority queues.
