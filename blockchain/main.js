const SHA256 = require('crypto-js/sha256');

class Transaction {
	constructor(fromAddress, toAddress, amount){
		this.fromAddress = fromAddress;
		this.toAddress = toAddress;
		this.amount = amount;
	}
}

class Block {

	constructor (timestamp, transactions, previousHash = '') {
		this.timestamp = timestamp;
		this.transactions = transactions;
		this.previousHash = previousHash;
		this.nonce = 0;
		this.hash = this.calculateHash();
	}

	calculateHash() {
		return SHA256(this.previousHash + this.timestamp + JSON.stringify(this.transactions) + this.nonce).toString();
	}

	mineBlock(difficulty) {
		while ( this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0") ){
			this.nonce++;
			this.hash = this.calculateHash();
		}

		console.log("Block mined: " + this.hash);
	}
}

class BlockChain {

	constructor() {
		this.chain = [this.createGenesisBlock()];
		this.difficulty = 3;
		this.pendingTransactions = [];
		this.miningReward = 100;
	}

	createGenesisBlock() {
		return new Block(0, "04/04/2018", "Genesis Block", "0");
	}

	getLatestBlock() {
		return this.chain[this.chain.length -1];
	}

	minePendingTransactions(miningRewardAddress) {
		let block = new Block(Date.now(), this.pendingTransactions);
		block.mineBlock(this.difficulty);

		console.log('Block successfully mined');
		this.chain.push(block);

		this.pendingTransactions = [
			new Transaction(null, miningRewardAddress, this.miningReward)
		];
	}

	createTransaction(transaction) {
		this.pendingTransactions.push(transaction);
	}

	getBalanceOfAddress(address){
		let balance = 0;

		for ( const block of this.chain ){
			for ( const trans of block.transactions ) {
				if ( trans.fromAddress === address ){
					balance -= trans.amount;
				}

				if ( trans.toAddress === address ) {
					balance += trans.amount;
				}
			}
		}

		return balance;
	}
	
	isChainValid() {
		// Ersten Block können wir auslassen! Genesis
		for ( let i = 1; i < this.chain.length; i++){
			const currentBlock = this.chain[i];
			const previousBlock = this.chain[i - 1];

			if ( currentBlock.hash !== currentBlock.calculateHash() ){
				return false;
			}

			if ( currentBlock.previousHash !== previousBlock.hash ) {
				return false;
			}
		}

		return true;
	}
}

let domiCoin = new BlockChain();

domiCoin.createTransaction(new Transaction('Address1', 'Address2', 100));
domiCoin.createTransaction(new Transaction('Address2', 'Address1', 50));

domiCoin.minePendingTransactions('domisAddress');

// console.log(JSON.stringify(domiCoin));
console.log('Domis Balance ist: ' + domiCoin.getBalanceOfAddress('domisAddress'));

domiCoin.minePendingTransactions('domisAddress');

console.log('Domis Balance ist: ' + domiCoin.getBalanceOfAddress('domisAddress'));