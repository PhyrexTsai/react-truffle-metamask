pragma solidity ^0.4.11;

import './StandardToken.sol';
import './Ownable.sol';

contract SimpleToken is StandardToken, Ownable {
    using SafeMath for uint256;

    // Token Info.
    string  public constant name = "Simple Token";
    string  public constant symbol = "SPT";
    uint8   public constant decimals = 18;

    // Sale period.
    uint256 public startDate;
    uint256 public endDate;

    // Token Cap for each rounds
    uint256 public saleCap;

    // Address where funds are collected.
    address public wallet;

    // Amount of raised money in wei.
    uint256 public weiRaised;

    // User ID
    mapping(address => bytes32) public userIDs;

    // Event
    event TokenPurchase(address indexed purchaser, uint256 value,
                        uint256 amount);
    event PreICOTokenPushed(address indexed buyer, uint256 amount);
    event UserIDChanged(address owner, bytes32 user_id);

    // Modifiers
    modifier uninitialized() {
        require(wallet == 0x0);
        _;
    }

    function SimpleToken() {
    }

    function initialize(address _wallet, uint256 _start, uint256 _end,
                        uint256 _saleCap, uint256 _totalSupply)
                        onlyOwner uninitialized {
        require(_start >= getCurrentTimestamp());
        require(_start < _end);
        require(_wallet != 0x0);
        require(_totalSupply > _saleCap);

        startDate = _start;
        endDate = _end;
        saleCap = _saleCap;
        wallet = _wallet;
        totalSupply = _totalSupply;

        balances[wallet] = _totalSupply.sub(saleCap);
        balances[0xb1] = saleCap;
    }

    function supply() internal returns (uint256) {
        return balances[0xb1];
    }

    function getCurrentTimestamp() internal returns (uint256) {
        return now;
    }

    function getRateAt(uint256 at) constant returns (uint256) {
        if (at < startDate) {
            return 0;
        } else if (at < (startDate + 7 days)) {
            return 11;
        } else if (at <= endDate) {
            return 10;
        } else {
            return 0;
        }
    }

    // Fallback function can be used to buy tokens
    function () payable {
        buyTokens(msg.sender, msg.value);
    }

    // For pushing pre-ICO records
    function push(address buyer, uint256 amount) onlyOwner {
        require(balances[wallet] >= amount);

        // Transfer
        balances[wallet] = balances[wallet].sub(amount);
        balances[buyer] = balances[buyer].add(amount);
        PreICOTokenPushed(buyer, amount);
    }

    function buyTokens(address sender, uint256 value) internal {
        require(saleActive());
        require(value >= 0.1 ether);

        uint256 weiAmount = value;
        uint256 updatedWeiRaised = weiRaised.add(weiAmount);

        // Calculate token amount to be purchased
        uint256 actualRate = getRateAt(getCurrentTimestamp());
        uint256 amount = weiAmount.mul(actualRate);

        // We have enough token to sale
        require(supply() >= amount);

        // Transfer
        balances[0xb1] = balances[0xb1].sub(amount);
        balances[sender] = balances[sender].add(amount);
        TokenPurchase(sender, weiAmount, amount);

        // Update state.
        weiRaised = updatedWeiRaised;

        // Forward the fund to fund collection wallet.
        wallet.transfer(msg.value);
    }

    function finalize() onlyOwner {
        require(!saleActive());

        // Transfer the rest of token to wallet
        balances[wallet] = balances[wallet].add(balances[0xb1]);
        balances[0xb1] = 0;
    }

    function saleActive() public constant returns (bool) {
        return (getCurrentTimestamp() >= startDate &&
                getCurrentTimestamp() < endDate && supply() > 0);
    }

    function setUserID(bytes32 user_id) {
        userIDs[msg.sender] = user_id;
        UserIDChanged(msg.sender, user_id);
    }
}