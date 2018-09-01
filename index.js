function jobSorter(jobs) {
  //if there are no jobs, return an empty array.
  if (jobs.length === 0) return [];
// we can convert strings into an object E.G '{z:z}' {z:z} and array as [z:z].
  let orderedJobs = [];
  let jobsObj = JSON.parse(jobs);
  // we can loop through the objects keys and can checkif the key is the same as its key value pair,
  // throw an error message as jobs cant depend on themeselves.
  for (let currentJob in jobsObj) {
    //return an error if a job depends on itself
    if (jobsObj[currentJob] === currentJob)
        return "Sorry, but a job cant depend on itself!!";
    //if jobs obj is the same length as array length, check if the array doesnt include the current job (has no job dependencies)if it doesnt, add it to the ordered jobs list.
    if (jobsObj[currentJob].length === orderedJobs.length) {
      if (!orderedJobs.includes(currentJob)) orderedJobs.push(currentJob);
    }
    // if it does include currentJob and job dependency in the array return an error. 
    //If there is no currentJob or a dependency value then put the jobs in order and push into the array.
    else {
      if (orderedJobs.includes(jobsObj[currentJob]) && orderedJobs.includes(currentJob)) 
        return "Sorry, jobs cant have circular dependencies!!";
      else if
       (!orderedJobs.includes(jobsObj[currentJob]) && !orderedJobs.includes(currentJob)) {
           orderedJobs.push(jobsObj[currentJob], currentJob);
           }
    
    }
    
  }
  return orderedJobs;

}
module.exports = jobSorter;
