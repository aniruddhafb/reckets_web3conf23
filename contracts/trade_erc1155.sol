// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
// import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol";
import "./collection.sol";

contract marketplace is ERC1155, IERC1155Receiver {

  address owner;

  using Counters for Counters.Counter;
  Counters.Counter private listed_token_id;

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
 
  constructor() ERC1155("Marketplace") {
    owner = msg.sender;
  }

  function buy_token(uint256 tokenId, uint amount, Shravan collection) public payable {
    require(msg.value == ListedTokens[tokenId].price * amount, "Cannot Find This Token");
    payable(ListedTokens[tokenId].seller).transfer(ListedTokens[tokenId].price * amount);
  
    ListedTokens[tokenId].seller = msg.sender;
    ListedTokens[tokenId].isListed = false;
    
    collection.safeTransferFrom(address(this), msg.sender, tokenId, amount, "");
  }

  function sell_token(uint256 tokenId, uint amount, uint price, Shravan collection) public payable {
      require(collection.balanceOf(msg.sender, tokenId) > 0, "You don't own any nft");
      ListedToken memory new_token = ListedToken(
        listed_token_id.current(),
        msg.sender,
        price,
        true
      );
    ListedTokens[listed_token_id.current()] = new_token;
    listed_token_id.increment();
    collection.safeTransferFrom(msg.sender, address(this), tokenId, amount, "");
  }


  function get_listed_token_by_id(uint listed_tokenId) public view returns(ListedToken memory){
    return ListedTokens[listed_tokenId];
  }

   function onERC1155Received(
    address operator,
    address from,
    uint256 id,
    uint256 value,
    bytes calldata data
    ) external override returns (bytes4) {
        // Handle the incoming ERC1155 token transfer
        // Add your logic here
        return IERC1155Receiver.onERC1155Received.selector;
    }

    function onERC1155BatchReceived(
        address operator,
        address from,
        uint256[] calldata ids,
        uint256[] calldata values,
        bytes calldata data
    ) external override returns (bytes4) {
        // Handle the incoming ERC1155 batch token transfer
        // Add your logic here
        return IERC1155Receiver.onERC1155BatchReceived.selector;
    }
}