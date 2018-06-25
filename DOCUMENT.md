# Document

Document about this repository.

## Code Structure
Inside this repository, it will include the structure:

```
react-truffle-metamask
├── DOCUMENT.md
├── README.md
├── truffle.js
├── contracts
├── migrations
├── node_modules
├── test
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── actions
    ├── apis
    ├── components
    │   ├── MetaMask
    │   └── App.js
    ├── constants
    ├── container
    │   └── AppContainer.js
    ├── lib
    ├── reducers
    │   ├── index.js
    │   └── initialState.js
    ├── sagas
    │   ├── index.js
    │   └── watcher.js
    ├── store
    │   └── configureStore.js
    ├── index.css
    ├── index.js
    ├── registerServiceWorker.js
    └── routes.js
```

#### 💡truffle.js

定義 `ganache` 的設定檔，包含所指向的機器位置(host)、埠(port)、對應的網路(network_id)

#### 💡/contracts

放置智能合約的資料夾，此專案的設計有預設一個ERC20的智能合約 `SimpleToken.sol`，可以簡單的發行最基礎的代幣智能合約。  
更多 `SimpleToken.sol` 資訊，參考[這裏](./SMART_CONTRACT.md)

#### 💡/migrations

truffle 框架所定義的部署結構，如果有任何新增與刪除智能合約，需要更新 `2_deploy_contracts.js`
更多 `truffle` 資訊，參考[這裏](./TRUFFLE.md)

#### 💡/test

撰寫測試智能合約以及測試，使用 `jest` 測試框架  
智能合約部分需要謹慎的測試與開發，包含 code coverage

#### 💡/src/actions

定義專案內所有的操作行為

#### 💡/src/apis

串接第三方的API都會封裝在這個資料夾內，`api.http` 使用 [Rest Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) 進行測試，可以模擬 HTTP request & response

#### 💡/src/components

所有元件以及與 MetaMask 操作都會包裝在這個資料夾下，內容包含 .js, .css

#### 💡/src/constants

定義專案內的常數變數，最大宗的常數變數為 `actionTypes.js` 的內容

#### 💡/src/container

封裝所有 actions 行為的容器

#### 💡/src/lib

包含智能合約的 ABI、智能合約的函數呼叫方式，以及 web3 的設定函數

#### 💡/src/reducers

承接 API 回來的 response，並且轉換成對應格式

#### 💡/src/sagas

API 串接主要管道，透過 Generator 來實現

#### 💡src/store

定義 Redux 資料儲存內容

#### 💡/src/index.js & /src/index.css

主程式的入口，將封裝後的 components 包裝進去

#### 💡/src/routes.js

設定 react route 的地方
