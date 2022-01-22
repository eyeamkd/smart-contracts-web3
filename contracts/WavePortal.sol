// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "hardhat/console.sol"; 

contract WavePortal{
    
    uint256 totalHois; //called state variable, stored permanently 

    constructor(){
        console.log("Smart Contract, here"); 
    } 

    function hoi() public{ 
        totalHois+=1;
        console.log("%s has Hoied you", msg.sender);//The msg object comes in built in by whoever calls it
    }  

    function getTotalHois() public view returns(uint256){
        console.log("We had a total of %d number of Hois",totalHois);
        return totalHois; 
    }
}
