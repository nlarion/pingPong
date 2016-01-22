// describe('addAy',function(){
//   it("Will add 'ay' to the end of a word that starts with a vowel",function(){
//     expect(addAy("open")).to.equal("openay");
//   });
// }); //example test

describe('divisibleBy',function(){
  it("Will return true if user number is divisible by a set number without a remainder",function(){
    expect(divisibleBy(15,15)).to.equal(true);
  });
});

describe('typeChecker',function(){
  it("Will add 'ay' to the end of a word that starts with a vowel",function(){
    expect(typeChecker("test")).to.equal(false);
  });
});
