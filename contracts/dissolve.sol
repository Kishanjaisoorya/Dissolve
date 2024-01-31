// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DissolveSocial {
    // Define data structures for user profiles and posts
    struct Profile {
        string name;
        uint256 age;
        string dob;
        string username;
        string password; // NOTE: Storing passwords in plaintext is not recommended in a production environment
    }

    struct Post {
        address author;
        string content;
        string media;
        uint256 timestamp;
    }

    // Mapping from address to user profiles
    mapping(address => Profile) public profiles;

    // Array of posts
    Post[] public posts;

    // Event to emit when a new post is created
    event PostCreated(address indexed author, string content, string media, uint256 timestamp);

    // Function to register a new user profile
    function registerProfile(string memory _name, uint256 _age, string memory _dob, string memory _username, string memory _password) public {
        profiles[msg.sender] = Profile(_name, _age, _dob, _username, _password);
    }

    // Function to create a new post
    function createPost(string memory _content, string memory _media) public {
        Post memory newPost = Post(msg.sender, _content, _media, block.timestamp);
        posts.push(newPost);
        emit PostCreated(msg.sender, _content, _media, block.timestamp);
    }
}

