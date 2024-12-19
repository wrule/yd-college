// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import { Ownable2Step, Ownable } from "@openzeppelin/contracts/access/Ownable2Step.sol";
import { YDC_Router } from "./YDC_Router.sol";

contract YDC_Base is Ownable2Step {
  constructor() Ownable(_msgSender()) { }

  YDC_Router router = YDC_Router(0x0a34EBbED22D230d1b1EdAa98931075C22AFD40F);
}
