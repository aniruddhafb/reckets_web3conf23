// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
// import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol";

contract Shravan is ERC1155  {

  address owner;

  using Counters for Counters.Counter;
  Counters.Counter private tokenId;
    

  mapping(uint => string) public tokenURI;

  struct ListedToken {
    uint256 tokenId;
    address seller;
    uint price;
    bool isListed;
  }

  event TokenListedSuccess(      
    uint256 tokenId,
    address seller,
    uint price,
    bool isListed
  );

  mapping(uint => ListedToken) private ListedTokens;

  constructor() ERC1155("Shravan") {
    owner = msg.sender;
  }

   modifier onlyOwner {
      require(msg.sender == owner);
      _;
   }

  function mint(uint _amount, string memory metadata) external onlyOwner{
    _mint(msg.sender, tokenId.current(), _amount, "");
    tokenURI[tokenId.current()] = metadata;

    tokenId.increment();
  }

  function get_listed_token_by_id(uint listed_tokenId) public view returns(ListedToken memory){
      return ListedTokens[listed_tokenId];
  }

  function uri(uint _id) public override view returns (string memory) {
    return tokenURI[_id];
  }

  
}
