describe('divisibleBy',function(){
  it("Will return true if user number is evenly divisible by a set number without a remainder",function(){
    expect(divisibleBy(15,15)).to.equal(true);
  });
});

describe('typeChecker',function(){
  it("Will return false if the input is not a number",function(){
    expect(typeChecker("test")).to.equal(false);
  });
});

describe('makeUserInputArray',function(){
  it("Will take a non-sorted array and return a sorted array with ascending values",function(){
    expect(makeUserInputArray(16)).to.eql([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]);
  });
});

describe('pingPong',function(){
  it("Will take a non-sorted array and return a sorted array with ascending values",function(){
    expect(pingPong(16)).to.eql([1,2,"ping",4,"pong","ping",7,8,"ping","pong",11,"ping",13,14,"pingpong",16]);
  });
});
