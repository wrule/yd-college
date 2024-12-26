/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../../../common";

export interface OperatorInterfaceInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "cancelOracleRequest"
      | "distributeFunds"
      | "fulfillOracleRequest"
      | "fulfillOracleRequest2"
      | "operatorRequest"
      | "oracleRequest"
      | "ownerTransferAndCall"
      | "withdraw"
      | "withdrawable"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "cancelOracleRequest",
    values: [BytesLike, BigNumberish, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "distributeFunds",
    values: [AddressLike[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "fulfillOracleRequest",
    values: [
      BytesLike,
      BigNumberish,
      AddressLike,
      BytesLike,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "fulfillOracleRequest2",
    values: [
      BytesLike,
      BigNumberish,
      AddressLike,
      BytesLike,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "operatorRequest",
    values: [
      AddressLike,
      BigNumberish,
      BytesLike,
      BytesLike,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "oracleRequest",
    values: [
      AddressLike,
      BigNumberish,
      BytesLike,
      AddressLike,
      BytesLike,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "ownerTransferAndCall",
    values: [AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawable",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "cancelOracleRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "distributeFunds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fulfillOracleRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fulfillOracleRequest2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "operatorRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "oracleRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ownerTransferAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawable",
    data: BytesLike
  ): Result;
}

export interface OperatorInterface extends BaseContract {
  connect(runner?: ContractRunner | null): OperatorInterface;
  waitForDeployment(): Promise<this>;

  interface: OperatorInterfaceInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  cancelOracleRequest: TypedContractMethod<
    [
      requestId: BytesLike,
      payment: BigNumberish,
      callbackFunctionId: BytesLike,
      expiration: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  distributeFunds: TypedContractMethod<
    [receivers: AddressLike[], amounts: BigNumberish[]],
    [void],
    "payable"
  >;

  fulfillOracleRequest: TypedContractMethod<
    [
      requestId: BytesLike,
      payment: BigNumberish,
      callbackAddress: AddressLike,
      callbackFunctionId: BytesLike,
      expiration: BigNumberish,
      data: BytesLike
    ],
    [boolean],
    "nonpayable"
  >;

  fulfillOracleRequest2: TypedContractMethod<
    [
      requestId: BytesLike,
      payment: BigNumberish,
      callbackAddress: AddressLike,
      callbackFunctionId: BytesLike,
      expiration: BigNumberish,
      data: BytesLike
    ],
    [boolean],
    "nonpayable"
  >;

  operatorRequest: TypedContractMethod<
    [
      sender: AddressLike,
      payment: BigNumberish,
      specId: BytesLike,
      callbackFunctionId: BytesLike,
      nonce: BigNumberish,
      dataVersion: BigNumberish,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  oracleRequest: TypedContractMethod<
    [
      sender: AddressLike,
      requestPrice: BigNumberish,
      serviceAgreementID: BytesLike,
      callbackAddress: AddressLike,
      callbackFunctionId: BytesLike,
      nonce: BigNumberish,
      dataVersion: BigNumberish,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  ownerTransferAndCall: TypedContractMethod<
    [to: AddressLike, value: BigNumberish, data: BytesLike],
    [boolean],
    "nonpayable"
  >;

  withdraw: TypedContractMethod<
    [recipient: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  withdrawable: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "cancelOracleRequest"
  ): TypedContractMethod<
    [
      requestId: BytesLike,
      payment: BigNumberish,
      callbackFunctionId: BytesLike,
      expiration: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "distributeFunds"
  ): TypedContractMethod<
    [receivers: AddressLike[], amounts: BigNumberish[]],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "fulfillOracleRequest"
  ): TypedContractMethod<
    [
      requestId: BytesLike,
      payment: BigNumberish,
      callbackAddress: AddressLike,
      callbackFunctionId: BytesLike,
      expiration: BigNumberish,
      data: BytesLike
    ],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "fulfillOracleRequest2"
  ): TypedContractMethod<
    [
      requestId: BytesLike,
      payment: BigNumberish,
      callbackAddress: AddressLike,
      callbackFunctionId: BytesLike,
      expiration: BigNumberish,
      data: BytesLike
    ],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "operatorRequest"
  ): TypedContractMethod<
    [
      sender: AddressLike,
      payment: BigNumberish,
      specId: BytesLike,
      callbackFunctionId: BytesLike,
      nonce: BigNumberish,
      dataVersion: BigNumberish,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "oracleRequest"
  ): TypedContractMethod<
    [
      sender: AddressLike,
      requestPrice: BigNumberish,
      serviceAgreementID: BytesLike,
      callbackAddress: AddressLike,
      callbackFunctionId: BytesLike,
      nonce: BigNumberish,
      dataVersion: BigNumberish,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "ownerTransferAndCall"
  ): TypedContractMethod<
    [to: AddressLike, value: BigNumberish, data: BytesLike],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<
    [recipient: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawable"
  ): TypedContractMethod<[], [bigint], "view">;

  filters: {};
}
