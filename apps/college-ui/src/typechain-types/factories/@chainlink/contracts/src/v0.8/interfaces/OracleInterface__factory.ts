/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  OracleInterface,
  OracleInterfaceInterface,
} from "../../../../../../@chainlink/contracts/src/v0.8/interfaces/OracleInterface";

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
        name: "expiration",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "data",
        type: "bytes32",
      },
    ],
    name: "fulfillOracleRequest",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawable",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class OracleInterface__factory {
  static readonly abi = _abi;
  static createInterface(): OracleInterfaceInterface {
    return new Interface(_abi) as OracleInterfaceInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): OracleInterface {
    return new Contract(address, _abi, runner) as unknown as OracleInterface;
  }
}
