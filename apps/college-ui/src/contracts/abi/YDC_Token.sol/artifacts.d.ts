// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import "hardhat/types/artifacts";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";

import { YDC_Token$Type } from "./YDC_Token";

declare module "hardhat/types/artifacts" {
  interface ArtifactsMap {
    ["YDC_Token"]: YDC_Token$Type;
    ["contracts/YDC_Token.sol:YDC_Token"]: YDC_Token$Type;
  }

  interface ContractTypesMap {
    ["YDC_Token"]: GetContractReturnType<YDC_Token$Type["abi"]>;
    ["contracts/YDC_Token.sol:YDC_Token"]: GetContractReturnType<YDC_Token$Type["abi"]>;
  }
}
