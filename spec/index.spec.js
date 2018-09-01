const { expect } = require("chai");
const  jobSorter  = require("../index.js");

describe("jobsSorter", () => {
  it("if there are no jobs, returns an empty array.", () => {
    let input = "";
    let actual = jobSorter(input);
    expect(actual).to.eql([]);
  });
  it("if only one job passed without dependencies, returns that element in an array", () => {
    let input = '{"z": ""}';
    let actual = jobSorter(input);
    expect(actual).to.eql(["z"]);
  });
  it("if only one job passed without dependencies, returns that element in an array", () => {
    let input = '{"a": ""}';
    let actual = jobSorter(input);
    expect(actual).to.eql(["a"]);
  });
  it("returns an array of elements in no particular order with no dependencies", () => {
    let input = '{"a": "", "b": "", "c": ""}';
    let actual = jobSorter(input);
    expect(actual).to.be.an("array").that.includes("b", "a", "c");
  });
  it("if no jobs depend on themselves, return them in an array", () => {
    let input = '{"a": "", "b": "" }';
    let actual = jobSorter(input);
    expect(actual).to.be.an("array").that.includes("a", "b");
  });

  it("returns an array in the correct order including jobs with dependencies", () => {
    let input = '{"a": "", "b": "", "c": ""}';
    let actual = jobSorter(input);
    expect(actual).to.be.an("array").that.includes("a", "b", "c");
  });
  it("if one job depends on itself, returns an error message.", () => {
    let input = '{"p": "p"}';
    let actual = jobSorter(input);
    expect(actual).to.equal("Sorry, but a job cant depend on itself!!");
  });
  it("if two jobs depends on themselves, returns an error message.", () => {
    let input = '{"s":"s","t": ""}';
    let actual = jobSorter(input);
    expect(actual).to.equal("Sorry, but a job cant depend on itself!!");
  });
  it("if five jobs depends on themselves, returns an error message.", () => {
    let input = '{"z": "z","s":"s", "a":"a", "f":"f","b": "b"}';
    let actual = jobSorter(input);
    expect(actual).to.equal("Sorry, but a job cant depend on itself!!");
  });

  it("returns an error when passed jobs that include circular dependencies", () => {
    let input = '{"a": "b", "b": "a", "c": "c"}';
    let actual = jobSorter(input);
    expect(actual).to.equal("Sorry, jobs cant have circular dependencies!!");
  });
  it("returns an error when passed jobs that include circular dependencies", () => {
    let input = '{"c": "d", "d": "c", "b": ""}';
    let actual = jobSorter(input);
    expect(actual).to.equal("Sorry, jobs cant have circular dependencies!!");
  });
  it("if a job has a dependency,return the elements in the correct order", () => {
    let input = '{"c": "b"}';
    let actual = jobSorter(input);
    expect(actual).to.eql(["b", "c"]);
  });
  it("if two jobs have dependencies,return the elements in the correct order ",()=>{
    let input = '{"z": "x", "b":"a"}';
    let actual = jobSorter(input);
    expect(actual).to.eql(["x","z","a","b"]);
})
  it("if multiple jobs have dependencies,return the elements in the correct order ", () => {
    let input = '{"a": "b", "c":"d", "e":"f", "g":"h"}';
    let actual = jobSorter(input);
    expect(actual).to.eql(["b", "a", "d", "c","f", "e", "h", "g"]);
  })
  it("if jobs depend on themselves along with jobs with no dependencies,return error message", () => {
    let input = '{"a": "a", "b": "", "c": "c", "z":""}';
    let actual = jobSorter(input);
    expect(actual).to.equal("Sorry, but a job cant depend on itself!!");
  });

})

