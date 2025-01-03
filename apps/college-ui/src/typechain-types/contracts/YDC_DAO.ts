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

export type YDC_DAO_ProposalStruct = {
  id: BigNumberish;
  proposer: AddressLike;
  target: AddressLike;
  action: BytesLike;
  prototype: string;
  summary: string;
  yesVotes: BigNumberish;
  noVotes: BigNumberish;
  createdAt: BigNumberish;
  deadlineAt: BigNumberish;
};

export type YDC_DAO_ProposalStructOutput = [
  id: bigint,
  proposer: string,
  target: string,
  action: string,
  prototype: string,
  summary: string,
  yesVotes: bigint,
  noVotes: bigint,
  createdAt: bigint,
  deadlineAt: bigint
] & {
  id: bigint;
  proposer: string;
  target: string;
  action: string;
  prototype: string;
  summary: string;
  yesVotes: bigint;
  noVotes: bigint;
  createdAt: bigint;
  deadlineAt: bigint;
};

export interface YDC_DAOInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "acceptOwnershipForMe"
      | "currentProposalId"
      | "execute"
      | "flow"
      | "initiateProposal"
      | "vote"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "Event_Vote"): EventFragment;

  encodeFunctionData(
    functionFragment: "acceptOwnershipForMe",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "currentProposalId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "flow", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "initiateProposal",
    values: [AddressLike, BytesLike, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "vote",
    values: [BigNumberish, boolean]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptOwnershipForMe",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentProposalId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "flow", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initiateProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;
}

export namespace Event_VoteEvent {
  export type InputTuple = [
    sender: AddressLike,
    proposalId: BigNumberish,
    yes: boolean,
    votes: BigNumberish
  ];
  export type OutputTuple = [
    sender: string,
    proposalId: bigint,
    yes: boolean,
    votes: bigint
  ];
  export interface OutputObject {
    sender: string;
    proposalId: bigint;
    yes: boolean;
    votes: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface YDC_DAO extends BaseContract {
  connect(runner?: ContractRunner | null): YDC_DAO;
  waitForDeployment(): Promise<this>;

  interface: YDC_DAOInterface;

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

  acceptOwnershipForMe: TypedContractMethod<
    [target: AddressLike],
    [void],
    "nonpayable"
  >;

  currentProposalId: TypedContractMethod<[], [bigint], "view">;

  execute: TypedContractMethod<
    [proposalId: BigNumberish],
    [void],
    "nonpayable"
  >;

  flow: TypedContractMethod<
    [head: BigNumberish],
    [YDC_DAO_ProposalStructOutput[]],
    "view"
  >;

  initiateProposal: TypedContractMethod<
    [
      target: AddressLike,
      action: BytesLike,
      prototype: string,
      summary: string,
      deadlineAt: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;

  vote: TypedContractMethod<
    [proposalId: BigNumberish, yes: boolean],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "acceptOwnershipForMe"
  ): TypedContractMethod<[target: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "currentProposalId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "execute"
  ): TypedContractMethod<[proposalId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "flow"
  ): TypedContractMethod<
    [head: BigNumberish],
    [YDC_DAO_ProposalStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "initiateProposal"
  ): TypedContractMethod<
    [
      target: AddressLike,
      action: BytesLike,
      prototype: string,
      summary: string,
      deadlineAt: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "vote"
  ): TypedContractMethod<
    [proposalId: BigNumberish, yes: boolean],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "Event_Vote"
  ): TypedContractEvent<
    Event_VoteEvent.InputTuple,
    Event_VoteEvent.OutputTuple,
    Event_VoteEvent.OutputObject
  >;

  filters: {
    "Event_Vote(address,uint64,bool,uint256)": TypedContractEvent<
      Event_VoteEvent.InputTuple,
      Event_VoteEvent.OutputTuple,
      Event_VoteEvent.OutputObject
    >;
    Event_Vote: TypedContractEvent<
      Event_VoteEvent.InputTuple,
      Event_VoteEvent.OutputTuple,
      Event_VoteEvent.OutputObject
    >;
  };
}
