// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import { Strings } from "@openzeppelin/contracts/utils/Strings.sol";
import { Ownable2Step, Ownable } from "@openzeppelin/contracts/access/Ownable2Step.sol";
import { ERC721URIStorage, ERC721 } from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract YDC_Course is ERC721URIStorage, Ownable2Step {
  uint256 private _nextTokenId;

  constructor() ERC721("YiDeng College Course", "YDCCourse") Ownable(msg.sender) { }

  mapping(uint256 => uint64) mapCourseId;
  mapping(uint256 => uint64) mapCourseTypeId;

  function mint(address user, uint64 courseId, uint64 courseTypeId) private returns (uint256) {
    uint256 tokenId = _nextTokenId++;
    _mint(user, tokenId);
    mapCourseId[tokenId] = courseId;
    mapCourseTypeId[tokenId] = courseTypeId;
    return tokenId;
  }

  function deliver(address user, uint64 courseId, uint64 courseTypeId) public onlyOwner returns (uint256) {
    return mint(user, courseId, courseTypeId);
  }
}
