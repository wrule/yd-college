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
import type { NonPayableOverrides } from "../../common";
import type {
  Test_Chainlink,
  Test_ChainlinkInterface,
} from "../../contracts/Test_Chainlink";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "ChainlinkCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "ChainlinkFulfilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "ChainlinkRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "num",
        type: "uint256",
      },
    ],
    name: "RequestVolume",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_requestId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_num",
        type: "uint256",
      },
    ],
    name: "fulfill",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "num",
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
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "web2ApiURI",
        type: "string",
      },
    ],
    name: "requestVolumeData",
    outputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawLink",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052600160045534801561001557600080fd5b50338060008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610088576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161007f906103bc565b60405180910390fd5b81600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461010d5761010c816101a960201b60201c565b5b50505061013373779877a7b0d9e8603169ddbd7836e478b46247896102d760201b60201c565b610156736090149792daaee9d1d568c9f9a6f6b46aa29efd61031b60201b60201c565b7f6361393833363663633733313439353762386330313263373266303561656562600981905550600a670de0b6b3a764000060016101949190610415565b61019e9190610486565b600a81905550610523565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610217576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161020e90610503565b60405180910390fd5b80600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127860405160405180910390a350565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600082825260208201905092915050565b7f43616e6e6f7420736574206f776e657220746f207a65726f0000000000000000600082015250565b60006103a660188361035f565b91506103b182610370565b602082019050919050565b600060208201905081810360008301526103d581610399565b9050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610420826103dc565b915061042b836103dc565b9250828202610439816103dc565b915082820484148315176104505761044f6103e6565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610491826103dc565b915061049c836103dc565b9250826104ac576104ab610457565b5b828204905092915050565b7f43616e6e6f74207472616e7366657220746f2073656c66000000000000000000600082015250565b60006104ed60178361035f565b91506104f8826104b7565b602082019050919050565b6000602082019050818103600083015261051c816104e0565b9050919050565b61200b806105326000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806379ba50971161005b57806379ba5097146100ec5780638da5cb5b146100f65780638dc654a214610114578063f2fde38b1461011e5761007d565b80634357855e146100825780634e70b1dc1461009e5780635f956d1a146100bc575b600080fd5b61009c600480360381019061009791906113e2565b61013a565b005b6100a6610283565b6040516100b39190611431565b60405180910390f35b6100d660048036038101906100d19190611592565b610289565b6040516100e391906115ea565b60405180910390f35b6100f46103d0565b005b6100fe610567565b60405161010b9190611646565b60405180910390f35b61011c610591565b005b6101386004803603810190610133919061168d565b6106de565b005b816005600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146101dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101d39061173d565b60405180910390fd5b6005600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055807f7cc135e0cebb02c3480ae5d74d377283180a2601f8f644edf7987b009316c63a60405160405180910390a2827f673b38182859a514d734bdfcb49d3a05c4a641dec9311d9894c9717bcb79af768360405161026f9190611431565b60405180910390a281600881905550505050565b60085481565b6000806102a060095430634357855e60e01b6106f2565b90506102ec6040518060400160405280600381526020017f676574000000000000000000000000000000000000000000000000000000000081525084836107239092919063ffffffff16565b61036b6040518060400160405280600481526020017f70617468000000000000000000000000000000000000000000000000000000008152506040518060400160405280600d81526020017f646174612c70726f677265737300000000000000000000000000000000000000815250836107239092919063ffffffff16565b6000600190506103bb6040518060400160405280600581526020017f74696d657300000000000000000000000000000000000000000000000000000081525082846107569092919063ffffffff16565b6103c782600a54610789565b92505050919050565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610460576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610457906117a9565b60405180910390fd5b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905033600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a350565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6105996107c0565b60006105a3610852565b90508073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb338373ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016105fb9190611646565b602060405180830381865afa158015610618573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061063c91906117de565b6040518363ffffffff1660e01b815260040161065992919061180b565b6020604051808303816000875af1158015610678573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061069c919061186c565b6106db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d2906118e5565b60405180910390fd5b50565b6106e66107c0565b6106ef8161087c565b50565b6106fa6112db565b6107026112db565b610719858585846109aa909392919063ffffffff16565b9150509392505050565b61073a828460800151610a5a90919063ffffffff16565b610751818460800151610a5a90919063ffffffff16565b505050565b61076d828460800151610a5a90919063ffffffff16565b610784818460800151610a7f90919063ffffffff16565b505050565b60006107b8600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168484610b2c565b905092915050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610850576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084790611951565b60405180910390fd5b565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036108ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e1906119bd565b60405180910390fd5b80600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127860405160405180910390a350565b6109b26112db565b6109c28560800151610100610bf8565b508385600001818152505082856020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508185604001907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681525050849050949350505050565b610a678260038351610c62565b610a7a8183610de790919063ffffffff16565b505050565b7fffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000811215610ab657610ab18282610e09565b610b28565b67ffffffffffffffff811315610ad557610ad08282610e80565b610b27565b60008112610aee57610ae982600083610c62565b610b26565b610b25826001837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610b209190611a16565b610c62565b5b5b5b5050565b6000806004549050600181610b419190611a59565b6004819055506000634042994660e01b60008087600001513089604001518760018c6080015160000151604051602401610b82989796959493929190611b47565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050509050610bed86838684610ecc565b925050509392505050565b610c00611348565b6000602083610c0f9190611bfb565b14610c3b57602082610c219190611bfb565b6020610c2d9190611c2c565b82610c389190611a59565b91505b81836020018181525050604051808452600081528281016020016040525082905092915050565b60178167ffffffffffffffff1611610c9957610c938160058460ff16901b60ff16178461106190919063ffffffff16565b50610de2565b60ff8167ffffffffffffffff1611610cef57610cc8601860058460ff16901b178461106190919063ffffffff16565b50610ce98167ffffffffffffffff166001856110819092919063ffffffff16565b50610de1565b61ffff8167ffffffffffffffff1611610d4657610d1f601960058460ff16901b178461106190919063ffffffff16565b50610d408167ffffffffffffffff166002856110819092919063ffffffff16565b50610de0565b63ffffffff8167ffffffffffffffff1611610d9f57610d78601a60058460ff16901b178461106190919063ffffffff16565b50610d998167ffffffffffffffff166004856110819092919063ffffffff16565b50610ddf565b610dbc601b60058460ff16901b178461106190919063ffffffff16565b50610ddd8167ffffffffffffffff166008856110819092919063ffffffff16565b505b5b5b5b505050565b610def611348565b610e01838460000151518485516110a3565b905092915050565b610e2760036005600660ff16901b178361106190919063ffffffff16565b50610e7c82827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610e589190611a16565b604051602001610e689190611431565b604051602081830303815290604052611192565b5050565b610e9e60026005600660ff16901b178361106190919063ffffffff16565b50610ec88282604051602001610eb49190611431565b604051602081830303815290604052611192565b5050565b60003084604051602001610ee1929190611d19565b604051602081830303815290604052805190602001209050846005600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550807fb5e6e01e79f91267dc17b4e6314d5d4d03593d2ceee0fbb452b750bd70ea5af960405160405180910390a2600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634000aea08685856040518463ffffffff1660e01b8152600401610fd793929190611d45565b6020604051808303816000875af1158015610ff6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061101a919061186c565b611059576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161105090611df5565b60405180910390fd5b949350505050565b611069611348565b61107983846000015151846111b7565b905092915050565b611089611348565b61109a84856000015151858561120d565b90509392505050565b6110ab611348565b82518211156110b957600080fd5b846020015182856110ca9190611a59565b11156110ff576110fe8560026110ef886020015188876110ea9190611a59565b61129b565b6110f99190611e15565b6112b7565b5b60008086518051876020830101935080888701111561111e5787860182525b60208701925050505b6020841061116557805182526020826111409190611a59565b915060208161114f9190611a59565b905060208461115e9190611c2c565b9350611127565b60006001856020036101000a03905080198251168184511681811785525050508692505050949350505050565b61119f8260028351610c62565b6111b28183610de790919063ffffffff16565b505050565b6111bf611348565b836020015183106111e5576111e484600286602001516111df9190611e15565b6112b7565b5b83518051602085830101848153818603611200576001820183525b5050508390509392505050565b611215611348565b846020015184836112269190611a59565b111561124e5761124d856002868561123e9190611a59565b6112489190611e15565b6112b7565b5b60006001836101006112609190611f8a565b61126a9190611c2c565b9050855183868201018583198251161781528151858801111561128d5784870182525b505085915050949350505050565b6000818311156112ad578290506112b1565b8190505b92915050565b6000826000015190506112ca8383610bf8565b506112d58382610de7565b50505050565b6040518060a0016040528060008019168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200160008152602001611342611348565b81525090565b604051806040016040528060608152602001600081525090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b61138981611376565b811461139457600080fd5b50565b6000813590506113a681611380565b92915050565b6000819050919050565b6113bf816113ac565b81146113ca57600080fd5b50565b6000813590506113dc816113b6565b92915050565b600080604083850312156113f9576113f861136c565b5b600061140785828601611397565b9250506020611418858286016113cd565b9150509250929050565b61142b816113ac565b82525050565b60006020820190506114466000830184611422565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61149f82611456565b810181811067ffffffffffffffff821117156114be576114bd611467565b5b80604052505050565b60006114d1611362565b90506114dd8282611496565b919050565b600067ffffffffffffffff8211156114fd576114fc611467565b5b61150682611456565b9050602081019050919050565b82818337600083830152505050565b6000611535611530846114e2565b6114c7565b90508281526020810184848401111561155157611550611451565b5b61155c848285611513565b509392505050565b600082601f8301126115795761157861144c565b5b8135611589848260208601611522565b91505092915050565b6000602082840312156115a8576115a761136c565b5b600082013567ffffffffffffffff8111156115c6576115c5611371565b5b6115d284828501611564565b91505092915050565b6115e481611376565b82525050565b60006020820190506115ff60008301846115db565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061163082611605565b9050919050565b61164081611625565b82525050565b600060208201905061165b6000830184611637565b92915050565b61166a81611625565b811461167557600080fd5b50565b60008135905061168781611661565b92915050565b6000602082840312156116a3576116a261136c565b5b60006116b184828501611678565b91505092915050565b600082825260208201905092915050565b7f536f75726365206d75737420626520746865206f7261636c65206f662074686560008201527f2072657175657374000000000000000000000000000000000000000000000000602082015250565b60006117276028836116ba565b9150611732826116cb565b604082019050919050565b600060208201905081810360008301526117568161171a565b9050919050565b7f4d7573742062652070726f706f736564206f776e657200000000000000000000600082015250565b60006117936016836116ba565b915061179e8261175d565b602082019050919050565b600060208201905081810360008301526117c281611786565b9050919050565b6000815190506117d8816113b6565b92915050565b6000602082840312156117f4576117f361136c565b5b6000611802848285016117c9565b91505092915050565b60006040820190506118206000830185611637565b61182d6020830184611422565b9392505050565b60008115159050919050565b61184981611834565b811461185457600080fd5b50565b60008151905061186681611840565b92915050565b6000602082840312156118825761188161136c565b5b600061189084828501611857565b91505092915050565b7f556e61626c6520746f207472616e736665720000000000000000000000000000600082015250565b60006118cf6012836116ba565b91506118da82611899565b602082019050919050565b600060208201905081810360008301526118fe816118c2565b9050919050565b7f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000600082015250565b600061193b6016836116ba565b915061194682611905565b602082019050919050565b6000602082019050818103600083015261196a8161192e565b9050919050565b7f43616e6e6f74207472616e7366657220746f2073656c66000000000000000000600082015250565b60006119a76017836116ba565b91506119b282611971565b602082019050919050565b600060208201905081810360008301526119d68161199a565b9050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611a21826119dd565b9150611a2c836119dd565b9250828203905081811260008412168282136000851215161715611a5357611a526119e7565b5b92915050565b6000611a64826113ac565b9150611a6f836113ac565b9250828201905080821115611a8757611a866119e7565b5b92915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611ac281611a8d565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611b02578082015181840152602081019050611ae7565b60008484015250505050565b6000611b1982611ac8565b611b238185611ad3565b9350611b33818560208601611ae4565b611b3c81611456565b840191505092915050565b600061010082019050611b5d600083018b611637565b611b6a602083018a611422565b611b7760408301896115db565b611b846060830188611637565b611b916080830187611ab9565b611b9e60a0830186611422565b611bab60c0830185611422565b81810360e0830152611bbd8184611b0e565b90509998505050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000611c06826113ac565b9150611c11836113ac565b925082611c2157611c20611bcc565b5b828206905092915050565b6000611c37826113ac565b9150611c42836113ac565b9250828203905081811115611c5a57611c596119e7565b5b92915050565b6000819050919050565b6000611c85611c80611c7b84611605565b611c60565b611605565b9050919050565b6000611c9782611c6a565b9050919050565b6000611ca982611c8c565b9050919050565b60008160601b9050919050565b6000611cc882611cb0565b9050919050565b6000611cda82611cbd565b9050919050565b611cf2611ced82611c9e565b611ccf565b82525050565b6000819050919050565b611d13611d0e826113ac565b611cf8565b82525050565b6000611d258285611ce1565b601482019150611d358284611d02565b6020820191508190509392505050565b6000606082019050611d5a6000830186611637565b611d676020830185611422565b8181036040830152611d798184611b0e565b9050949350505050565b7f756e61626c6520746f207472616e73666572416e6443616c6c20746f206f726160008201527f636c650000000000000000000000000000000000000000000000000000000000602082015250565b6000611ddf6023836116ba565b9150611dea82611d83565b604082019050919050565b60006020820190508181036000830152611e0e81611dd2565b9050919050565b6000611e20826113ac565b9150611e2b836113ac565b9250828202611e39816113ac565b91508282048414831517611e5057611e4f6119e7565b5b5092915050565b60008160011c9050919050565b6000808291508390505b6001851115611eae57808604811115611e8a57611e896119e7565b5b6001851615611e995780820291505b8081029050611ea785611e57565b9450611e6e565b94509492505050565b600082611ec75760019050611f83565b81611ed55760009050611f83565b8160018114611eeb5760028114611ef557611f24565b6001915050611f83565b60ff841115611f0757611f066119e7565b5b8360020a915084821115611f1e57611f1d6119e7565b5b50611f83565b5060208310610133831016604e8410600b8410161715611f595782820a905083811115611f5457611f536119e7565b5b611f83565b611f668484846001611e64565b92509050818404811115611f7d57611f7c6119e7565b5b81810290505b9392505050565b6000611f95826113ac565b9150611fa0836113ac565b9250611fcd7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484611eb7565b90509291505056fea2646970667358221220b19ec9a31bb50ee442966856614b9e51873c628323e25c38e3cdd1c98f52afba64736f6c634300081c0033";

type Test_ChainlinkConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Test_ChainlinkConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Test_Chainlink__factory extends ContractFactory {
  constructor(...args: Test_ChainlinkConstructorParams) {
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
      Test_Chainlink & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Test_Chainlink__factory {
    return super.connect(runner) as Test_Chainlink__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Test_ChainlinkInterface {
    return new Interface(_abi) as Test_ChainlinkInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): Test_Chainlink {
    return new Contract(address, _abi, runner) as unknown as Test_Chainlink;
  }
}
