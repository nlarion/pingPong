describe('divisibleBy',function(){
  it("Will return true if user number is divisible by a set number without a remainder",function(){
    expect(divisibleBy(15,15)).to.equal(true);
  });
});

describe('typeChecker',function(){
  it("Will return false if the input is not a number",function(){
    expect(typeChecker("test")).to.equal(false);
  });
});

describe('sortArray',function(){
  it("Will take a non-sorted array and return a sorted array with ascending values",function(){
    expect(sortArray([7,3,4,2,1,9])).to.eql([1,2,3,4,7,9]);
  });
});

describe('pingPong',function(){
  it("Will take a non-sorted array and return a sorted array with ascending values",function(){
    expect(pingPong([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])).to.eql([1,2,"ping",4,"pong","ping",7,8,"ping","pong",11,"ping",13,14,"pingpong",16]);
  });
});
