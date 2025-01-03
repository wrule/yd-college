// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import "hardhat/types/artifacts";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";

import { Base$Type } from "./Base";

declare module "hardhat/types/artifacts" {
  interface ArtifactsMap {
    ["Base"]: Base$Type;
    ["contracts/base/Base.sol:Base"]: Base$Type;
  }

  interface ContractTypesMap {
    ["Base"]: GetContractReturnType<Base$Type["abi"]>;
    ["contracts/base/Base.sol:Base"]: GetContractReturnType<Base$Type["abi"]>;
  }
}
