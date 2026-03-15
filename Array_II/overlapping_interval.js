function merge(intervals) {
    if (!intervals.length) return [];
  
    // Step 1: Sort by start time
    intervals.sort((a, b) => a[0] - b[0]);
  
    const result = [];
    let [start, end] = intervals[0];
  
    for (let i = 1; i < intervals.length; i++) {
      const [currStart, currEnd] = intervals[i];
  
      // Overlapping intervals
      if (currStart <= end) {
        end = Math.max(end, currEnd);
      } 
      // Non-overlapping
      else {
        result.push([start, end]);
        [start, end] = [currStart, currEnd];
      }
    }
  
    // Push last interval
    result.push([start, end]);
  
    return result;
  }
const intervals = [[1,3],[2,6],[8,10],[15,18]];
console.log(merge(intervals));
