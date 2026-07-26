import { type QueueJob } from "@lucid-softworks/queue-core";

/** Higher priority first, then oldest creation time, then lexical id. */
export function compareQueuePriority(left: QueueJob, right: QueueJob): number {
  return (
    right.priority - left.priority ||
    left.createdAt - right.createdAt ||
    left.id.localeCompare(right.id)
  );
}

export function sortQueueJobs<TJob extends QueueJob>(
  jobs: readonly TJob[],
): TJob[] {
  const sorted = [...jobs];
  // Sorting a copy preserves the readonly input.
  // eslint-disable-next-line unicorn/no-array-sort
  return sorted.sort(compareQueuePriority);
}
