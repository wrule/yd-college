/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ChainlinkRequestInterface,
  ChainlinkRequestInterfaceInterface,
} from "../../../../../../@chainlink/contracts/src/v0.8/interfaces/ChainlinkRequestInterface";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "payment",
        type: "uint256",
      },
      {
        internalType: "bytes4",
        name: "callbackFunctionId",
        type: "bytes4",
      },
      {
        internalType: "uint256",
        name: "expiration",
        type: "uint256",
      },
    ],
    name: "cancelOracleRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "requestPrice",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "serviceAgreementID",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "callbackAddress",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "callbackFunctionId",
        type: "bytes4",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "dataVersion",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "oracleRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ChainlinkRequestInterface__factory {
  static readonly abi = _abi;
  static createInterface(): ChainlinkRequestInterfaceInterface {
    return new Interface(_abi) as ChainlinkRequestInterfaceInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ChainlinkRequestInterface {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as ChainlinkRequestInterface;
  }
}
