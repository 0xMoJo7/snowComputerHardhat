# Snow Computer 

The Snow Computer is an on-chain, community art experiment made up of multiple programs contributing smaller canvases of pixel art via bytes to a larger canvas on the Polygon network. See it in action [here!](https://snow.computer/)

## About
The Snow computer is deployed at [0xF53D926c13Af77C53AFAe6B33480DDd94B167610](https://polygonscan.com/address/0xf53d926c13af77c53afae6b33480ddd94b167610)
- Call `applyToBecomeOperator` with an existing or new Snow program to potentially get approved to become an operator.
- Call `becomeOperator` with an existing or new Snow program to get an access key once approved.
- You can call `storeProgram` at any time to update your Snow program.
- `tick` is called every 5 min, which runs every program with a 50k gas stipend and updates the art.

### Examples:
* `Arrow`, found in `contracts/Arrow.sol` in this repo. Which creates a diagonal arrow across 3 selected canvases on the larger canvas, also shows and example of reversing a piece of art.
* `Sprite`, found in `contracts/Sprites.sol` in this repo. Which psuedo-randomly selects a spot on the canvas and fills with one of the "Sprites"
* `Chaos` and `Invertor` [gist](https://gist.github.com/w1nt3r-eth/eac0d0a4ae1fb8795f031ca580a40717)
* `Oighty` at [0x476920b3cf1B893F641745cDc8D30DfF55DD0920](https://polygonscan.com/address/0x476920b3cf1B893F641745cDc8D30DfF55DD0920#code)


### Reference:
* https://snow.computer/operators
* `SnowV1` source code is deployed at (interact with the proxy contract when actually interacting) [0x7B07afdD4b384B36DFadF4654B19932dc9164Bd6](https://polygonscan.com/address/0x7b07afdd4b384b36dfadf4654b19932dc9164bd6#code)

### Getting started
- [Getting Started with Hardhat](https://hardhat.org/hardhat-runner/docs/getting-started#overview)
- Install the dependecies of this repo with `npm i` or `yarn install`

### .env Example
```
POLYGON_INFURA_ENDPOINT="https://polygon-mainnet.infura.io/v3/<your-key-here>"
PRIVATE_KEY="<your-private-key>"
POLYGONSCAN_API_KEY="<your-polygonscan-api-key>"
```

### Deploy Command
`npx hardhat run scripts/deploy.js --network polygon`

### Foundry Example
https://github.com/karmacoma-eth/snow-operator-template
