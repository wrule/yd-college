// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import "hardhat/types/artifacts";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";

import { YDC_AnchoredSwap$Type } from "./YDC_AnchoredSwap";

declare module "hardhat/types/artifacts" {
  interface ArtifactsMap {
    ["YDC_AnchoredSwap"]: YDC_AnchoredSwap$Type;
    ["contracts/YDC_AnchoredSwap.sol:YDC_AnchoredSwap"]: YDC_AnchoredSwap$Type;
  }

  interface ContractTypesMap {
    ["YDC_AnchoredSwap"]: GetContractReturnType<YDC_AnchoredSwap$Type["abi"]>;
    ["contracts/YDC_AnchoredSwap.sol:YDC_AnchoredSwap"]: GetContractReturnType<YDC_AnchoredSwap$Type["abi"]>;
  }
}