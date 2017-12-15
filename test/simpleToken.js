var SimpleToken = artifacts.require("./SimpleToken.sol");

contract('SimpleToken', function(accounts) {
  it("should get name of SimpleToken in this method", function() {
    return SimpleToken.deployed().then(function(instance) {
      return instance.name.call();
    }).then(function(result) {
      assert.equal(result, "Simple Token", "SimpleToken.name wasn't correct");
    });
  });

  it("should get symbol of SimpleToken in this method", function() {
    return SimpleToken.deployed().then(function(instance) {
      return instance.symbol.call();
    }).then(function(result) {
      assert.equal(result, "SPT", "SimpleToken.symbol wasn't correct");
    });
  });

  it("should get decimals of SimpleToken in this method", function() {
    return SimpleToken.deployed().then(function(instance) {
      return instance.decimals.call();
    }).then(function(result) {
      assert.equal(result.toNumber(), 18, "SimpleToken.decimals wasn't correct");
    });
  });

  it("should initial SimpleToken contract", function() {
    return SimpleToken.deployed().then(function(instance) {
      return instance.wallet.call();
    }).then(function(wallet) {
      assert.equal(wallet, '0x0000000000000000000000000000000000000000', "SimpleToken.wallet wasn't correct");
      //return instance.initialize();
    });
  });
});