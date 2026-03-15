// Problem: Schedule jobs with deadlines and profits to maximize total profit.
// Implement `jobSequencing(jobs)` returning [scheduledCount, totalProfit].
function jobSequencing(jobs) {
    // Step 1: sort jobs by profit descending
    jobs.sort((a, b) => b.profit - a.profit);

    // Step 2: find maximum deadline
    let maxDeadline = 0;
    for (let job of jobs) {
        maxDeadline = Math.max(maxDeadline, job.deadline);
    }

    // Step 3: create slots
    const slots = Array(maxDeadline + 1).fill(false);

    let jobCount = 0;
    let totalProfit = 0;

    // Step 4: schedule jobs
    for (let job of jobs) {
        for (let t = job.deadline; t > 0; t--) {
            if (!slots[t]) {
                slots[t] = true;
                jobCount++;
                totalProfit += job.profit;
                break;
            }
        }
    }

    return [jobCount, totalProfit];
}

const jobs = [
    { id: 'A', deadline: 2, profit: 100 },
    { id: 'B', deadline: 1, profit: 19 },
    { id: 'C', deadline: 2, profit: 27 },
    { id: 'D', deadline: 1, profit: 25 },
    { id: 'E', deadline: 3, profit: 15 }
];

console.log(jobSequencing(jobs)); // [3, 142]


// | Part            | Complexity     |
// | --------------- | -------------- |
// | Sorting         | O(N log N)     |
// | Slot allocation | O(N × D)       |
// | Overall         | **O(N log N)** |
