// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import { Ownable2Step, Ownable } from "@openzeppelin/contracts/access/Ownable2Step.sol";
import { ERC20Votes, ERC20 } from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";

// 1000000000000000000 1YD

contract YDC_Token is ERC20, Ownable2Step {
  constructor() ERC20("YiDeng College Token", "YD") Ownable(msg.sender) {
    _mint(msg.sender, 100_000_000 * (10 ** decimals()));
  }
}
