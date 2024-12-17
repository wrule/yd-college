// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import { Strings } from "@openzeppelin/contracts/utils/Strings.sol";
import { Ownable2Step, Ownable } from "@openzeppelin/contracts/access/Ownable2Step.sol";
import { ERC721URIStorage, ERC721 } from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract YDC_Course is ERC721URIStorage, Ownable2Step {
  using Strings for uint64;

  uint256 private _nextTokenId;
  string private baseURI;

  constructor() ERC721("YiDeng College Course", "YDCCourse") Ownable(msg.sender) { }

  mapping(uint256 => uint64) public mapCourseId;
  mapping(uint256 => uint64) public mapCourseTypeId;

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

  function queryCourseInfo(uint256 tokenId) public view returns (uint64) {
    _requireOwned(tokenId);
    return mapCourseId[tokenId];
  }

  function _baseURI() internal view virtual override returns (string memory) {
    return baseURI;
  }

  function setBaseURI(string memory newBaseURI) public onlyOwner {
    baseURI = newBaseURI;
  }

  function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
    _requireOwned(tokenId);
    return bytes(baseURI).length > 0 ? string.concat(
      baseURI,
      "?type=",
      mapCourseTypeId[tokenId].toString(),
      "&id=",
      mapCourseId[tokenId].toString()
    ) : "";
  }
}
