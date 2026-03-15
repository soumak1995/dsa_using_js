// Problem: Given meeting start and end times, select max non-overlapping meetings.
// Implement `maxMeetings(start, end)` returning the maximum number of meetings.
const start = [1,3,0,5,8,5]
const end = [2,4,6,7,9,9]

function findNumOfRoom(start,end){
  const q = []
  let lastEnd = 0
   for(let i = 0;i <start.length;i++){
       q.push([start[i],end[i],i+1])
   }
   q.sort((a,b)=>{
     if(a.end < b.end)
     return -1
     else if(a.end > b.end)
       return 1
     else if(a.i > b.i)
     return -1
     else
     return 1
   })
   while(q.length){
      const [start,end,i] = q.shift()
      if(lastEnd < start){
         console.log(i)
         lastEnd = end
      }
     
   }
}


function maxMeetings(start, end) {
    const meetings = start.map((s, i) => ({
      start: s,
      end: end[i]
    }));
  
    // 1️⃣ Sort by end time
    meetings.sort((a, b) => a.end - b.end);
  
    let count = 1;
    let lastEnd = meetings[0].end;
  
    // 2️⃣ Select meetings greedily
    for (let i = 1; i < meetings.length; i++) {
      if (meetings[i].start > lastEnd) {
        count++;
        lastEnd = meetings[i].end;
      }
    }
  
    return count;
  }

// Time: O(n log n) (sorting)
// Space: O(n)