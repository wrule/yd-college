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
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface Test_ChainlinkInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "acceptOwnership"
      | "fulfill"
      | "num"
      | "owner"
      | "requestVolumeData"
      | "transferOwnership"
      | "withdrawLink"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ChainlinkCancelled"
      | "ChainlinkFulfilled"
      | "ChainlinkRequested"
      | "OwnershipTransferRequested"
      | "OwnershipTransferred"
      | "RequestVolume"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fulfill",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "num", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "requestVolumeData",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawLink",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fulfill", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "num", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "requestVolumeData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawLink",
    data: BytesLike
  ): Result;
}

export namespace ChainlinkCancelledEvent {
  export type InputTuple = [id: BytesLike];
  export type OutputTuple = [id: string];
  export interface OutputObject {
    id: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ChainlinkFulfilledEvent {
  export type InputTuple = [id: BytesLike];
  export type OutputTuple = [id: string];
  export interface OutputObject {
    id: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ChainlinkRequestedEvent {
  export type InputTuple = [id: BytesLike];
  export type OutputTuple = [id: string];
  export interface OutputObject {
    id: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferRequestedEvent {
  export type InputTuple = [from: AddressLike, to: AddressLike];
  export type OutputTuple = [from: string, to: string];
  export interface OutputObject {
    from: string;
    to: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [from: AddressLike, to: AddressLike];
  export type OutputTuple = [from: string, to: string];
  export interface OutputObject {
    from: string;
    to: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RequestVolumeEvent {
  export type InputTuple = [requestId: BytesLike, num: BigNumberish];
  export type OutputTuple = [requestId: string, num: bigint];
  export interface OutputObject {
    requestId: string;
    num: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Test_Chainlink extends BaseContract {
  connect(runner?: ContractRunner | null): Test_Chainlink;
  waitForDeployment(): Promise<this>;

  interface: Test_ChainlinkInterface;

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

  acceptOwnership: TypedContractMethod<[], [void], "nonpayable">;

  fulfill: TypedContractMethod<
    [_requestId: BytesLike, _num: BigNumberish],
    [void],
    "nonpayable"
  >;

  num: TypedContractMethod<[], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  requestVolumeData: TypedContractMethod<
    [web2ApiURI: string],
    [string],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [to: AddressLike],
    [void],
    "nonpayable"
  >;

  withdrawLink: TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "acceptOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "fulfill"
  ): TypedContractMethod<
    [_requestId: BytesLike, _num: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "num"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "requestVolumeData"
  ): TypedContractMethod<[web2ApiURI: string], [string], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[to: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawLink"
  ): TypedContractMethod<[], [void], "nonpayable">;

  getEvent(
    key: "ChainlinkCancelled"
  ): TypedContractEvent<
    ChainlinkCancelledEvent.InputTuple,
    ChainlinkCancelledEvent.OutputTuple,
    ChainlinkCancelledEvent.OutputObject
  >;
  getEvent(
    key: "ChainlinkFulfilled"
  ): TypedContractEvent<
    ChainlinkFulfilledEvent.InputTuple,
    ChainlinkFulfilledEvent.OutputTuple,
    ChainlinkFulfilledEvent.OutputObject
  >;
  getEvent(
    key: "ChainlinkRequested"
  ): TypedContractEvent<
    ChainlinkRequestedEvent.InputTuple,
    ChainlinkRequestedEvent.OutputTuple,
    ChainlinkRequestedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferRequested"
  ): TypedContractEvent<
    OwnershipTransferRequestedEvent.InputTuple,
    OwnershipTransferRequestedEvent.OutputTuple,
    OwnershipTransferRequestedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "RequestVolume"
  ): TypedContractEvent<
    RequestVolumeEvent.InputTuple,
    RequestVolumeEvent.OutputTuple,
    RequestVolumeEvent.OutputObject
  >;

  filters: {
    "ChainlinkCancelled(bytes32)": TypedContractEvent<
      ChainlinkCancelledEvent.InputTuple,
      ChainlinkCancelledEvent.OutputTuple,
      ChainlinkCancelledEvent.OutputObject
    >;
    ChainlinkCancelled: TypedContractEvent<
      ChainlinkCancelledEvent.InputTuple,
      ChainlinkCancelledEvent.OutputTuple,
      ChainlinkCancelledEvent.OutputObject
    >;

    "ChainlinkFulfilled(bytes32)": TypedContractEvent<
      ChainlinkFulfilledEvent.InputTuple,
      ChainlinkFulfilledEvent.OutputTuple,
      ChainlinkFulfilledEvent.OutputObject
    >;
    ChainlinkFulfilled: TypedContractEvent<
      ChainlinkFulfilledEvent.InputTuple,
      ChainlinkFulfilledEvent.OutputTuple,
      ChainlinkFulfilledEvent.OutputObject
    >;

    "ChainlinkRequested(bytes32)": TypedContractEvent<
      ChainlinkRequestedEvent.InputTuple,
      ChainlinkRequestedEvent.OutputTuple,
      ChainlinkRequestedEvent.OutputObject
    >;
    ChainlinkRequested: TypedContractEvent<
      ChainlinkRequestedEvent.InputTuple,
      ChainlinkRequestedEvent.OutputTuple,
      ChainlinkRequestedEvent.OutputObject
    >;

    "OwnershipTransferRequested(address,address)": TypedContractEvent<
      OwnershipTransferRequestedEvent.InputTuple,
      OwnershipTransferRequestedEvent.OutputTuple,
      OwnershipTransferRequestedEvent.OutputObject
    >;
    OwnershipTransferRequested: TypedContractEvent<
      OwnershipTransferRequestedEvent.InputTuple,
      OwnershipTransferRequestedEvent.OutputTuple,
      OwnershipTransferRequestedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "RequestVolume(bytes32,uint256)": TypedContractEvent<
      RequestVolumeEvent.InputTuple,
      RequestVolumeEvent.OutputTuple,
      RequestVolumeEvent.OutputObject
    >;
    RequestVolume: TypedContractEvent<
      RequestVolumeEvent.InputTuple,
      RequestVolumeEvent.OutputTuple,
      RequestVolumeEvent.OutputObject
    >;
  };
}
