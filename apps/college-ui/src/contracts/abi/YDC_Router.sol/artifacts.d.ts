// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import "hardhat/types/artifacts";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";

import { YDC_Router$Type } from "./YDC_Router";

declare module "hardhat/types/artifacts" {
  interface ArtifactsMap {
    ["YDC_Router"]: YDC_Router$Type;
    ["contracts/YDC_Router.sol:YDC_Router"]: YDC_Router$Type;
  }

  interface ContractTypesMap {
    ["YDC_Router"]: GetContractReturnType<YDC_Router$Type["abi"]>;
    ["contracts/YDC_Router.sol:YDC_Router"]: GetContractReturnType<YDC_Router$Type["abi"]>;
  }
}
