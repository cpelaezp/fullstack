// click on view
class Block {
    constructor(index, data, prevHash){
        this.index = index;
        this.timestamp = Math.fllor(Date.now() / 1000);
        
        this.data = data;
        this.prevHash = prevHash;
    }

    addBlock(data){
        let index = this.chain.length;
        let prevHast = this.chain.length !== 0 ? this.chain[this.chain.length - 1].hash:0;

        let block = new Block(index, data, precHash)
    }
}

