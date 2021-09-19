#  Chat Integration

This a chat plugin for our slack chat integration server, it is only compertable with react,
we intend to create a npm package btw we were limited by time

## Table of Contents
* Features
* Installation
* Config
* Tech Stack

## Features

- Integrate smoothly with our slack chat integration server
- Access your users straight from thier browsers
- Beautiful user interface for user to send and recieve messages 

## Installation
1. Download the code snippet of the plugin [here](https://github.com/JangasIntegrationplace/chat-fontend/tree/package)
2. Navigate to your app directory
3. Place the code in your src folder
4. Install the following dependencies you can find them [here](https://github.com/JangasIntegrationplace/chat-fontend/tree/package/dependencies.md)
5. Import the Chat-plugin from your/path/to/chat-plugin
6. Configure and start using

## Config
* display **icon**

 ```js
 <ChatPlugin icon={"</path/to/icon>"}/>
 ```
* display **title**

 ```js
 <ChatPlugin title={"<Heading on the Chat Plugin>"}/>
 ```
 * Api endpoints and Socket enpoints  
 create a .env file in your root dir and specify the endpoints for the api and websockets 
 ```
REACT_APP_API_ENDPOINT=http://public/url/to/api
REACT_APP_SOCKET_ENDPOINT=ws://public/url/to/websckets
 ```
## Techstack
* ReactJS

