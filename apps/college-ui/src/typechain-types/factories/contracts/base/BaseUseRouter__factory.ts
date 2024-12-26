/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  BaseUseRouter,
  BaseUseRouterInterface,
} from "../../../contracts/base/BaseUseRouter";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
] as const;

const _bytecode =
  "0x60806040527349155f5a274fc463e6ef9cefc122b51cd899303e6000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550348015606357600080fd5b50603f8060716000396000f3fe6080604052600080fdfea26469706673582212203a92f2ef780249edc8ed97752204f4c3fa7d9bf7c0cad434cd9e9e8f33c1621864736f6c634300081c0033";

type BaseUseRouterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BaseUseRouterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BaseUseRouter__factory extends ContractFactory {
  constructor(...args: BaseUseRouterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      BaseUseRouter & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): BaseUseRouter__factory {
    return super.connect(runner) as BaseUseRouter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BaseUseRouterInterface {
    return new Interface(_abi) as BaseUseRouterInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): BaseUseRouter {
    return new Contract(address, _abi, runner) as unknown as BaseUseRouter;
  }
}
