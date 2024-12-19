// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import { Strings } from "@openzeppelin/contracts/utils/Strings.sol";
import { Ownable2Step, Ownable } from "@openzeppelin/contracts/access/Ownable2Step.sol";
import { ERC721URIStorage, ERC721 } from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import { YDC_Token } from "./YDC_Token.sol";
import { YDC_Course } from "./YDC_Course.sol";

struct YDC_Item {
  address seller;
  uint64 courseId;
  uint64 courseTypeId;
  uint256 price;
}

contract YDC_Market is ERC721URIStorage, Ownable2Step {
  using Strings for uint64;

  uint256 private _nextTokenId;
  string private baseURI;

  address itemsOwner;
  YDC_Token ydcToken;
  YDC_Course ydcCourse;

  constructor() ERC721("YiDeng College Market Item", "YDCItem") Ownable(_msgSender()) {
    itemsOwner = _msgSender();
  }

  mapping(uint256 => YDC_Item) public mapItem;
  mapping(uint64 => uint256) public mapTokenId;

  function listItem(
    uint64 courseId,
    uint64 courseTypeId,
    uint256 price
  ) public returns (uint256) {
    uint256 tokenId = ++_nextTokenId;
    _mint(itemsOwner, tokenId);
    mapItem[tokenId] = YDC_Item({
      seller: _msgSender(),
      courseId: courseId,
      courseTypeId: courseTypeId,
      price: price
    });
    mapTokenId[courseId] = tokenId;
    return tokenId;
  }

  function buyItem(uint64 courseId) public {
    uint256 tokenId = mapTokenId[courseId];
    _requireOwned(tokenId);
    YDC_Item memory itemInfo = queryCourseInfo(tokenId);
    ydcToken.transferFrom(_msgSender(), address(this), itemInfo.price);
    ydcToken.transfer(itemInfo.seller, itemInfo.price);
    ydcCourse.deliver(_msgSender(), itemInfo.courseId, itemInfo.courseTypeId);
  }

  function updateItemsOwner(address newAddress) public onlyOwner {
    itemsOwner = newAddress;
  }

  function updateYDCTokenAddress(address newAddress) public onlyOwner {
    ydcToken = YDC_Token(newAddress);
  }

  function updateYDCCourseAddress(address newAddress) public onlyOwner {
    ydcCourse = YDC_Course(newAddress);
  }

  function queryCourseInfo(uint256 tokenId) public view returns (YDC_Item memory) {
    _requireOwned(tokenId);
    return mapItem[tokenId];
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
      mapItem[tokenId].courseId.toString(),
      "&id=",
      mapItem[tokenId].courseTypeId.toString()
    ) : "";
  }
}
