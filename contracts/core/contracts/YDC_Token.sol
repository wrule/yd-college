// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import { Ownable2Step, Ownable } from "@openzeppelin/contracts/access/Ownable2Step.sol";
import { ERC20Votes, ERC20 } from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";

contract YDC_Token is ERC20, Ownable2Step {
  constructor() ERC20("YiDeng College Token", "YD") Ownable(msg.sender) { }

  function mintFor(address user, uint256 amount) public onlyOwner {
    _mint(user, amount);
  }

  function decimals() public view virtual override returns (uint8) {
    return 0;
  }
}
