// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// 1000000000000000000 1YD

contract YDToken is ERC20 {
  constructor() ERC20("YiDeng Token", "YD") {
    _mint(msg.sender, 100_000_000 * (10 ** decimals()));
  }

  // 先开放给任意用户mint
  function mint(uint16 num) public {
    _mint(msg.sender, num * (10 ** decimals()));
  }
}
