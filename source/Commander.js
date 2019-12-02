class Commander {
    constructor(socket, host, port){
        this.socket = socket;
        this.host = host;
        this.port = port;
    }

    sendInitCommand(){
       
        return new Promise((res, rej)=>{
            this.socket.send("command", 0, "command".length, this.port, this.host, (err)=>{
                if(err){
                   return rej(err)
                } else {
                    return res()
                }
            } )
        })
    }
    sendTakeoff(){
        return new Promise((res, rej)=>{
            this.socket.send('takeoff', 0, 'takeoff'.length, this.port, this.host, (err)=>{
                if(err){
                   return rej(err)
                } else {
                    return res()
                }
            } )
        })
    }
    sendLand(){
        return new Promise((res, rej)=>{
            this.socket.send('land', 0, 'land'.length, this.port, this.host, (err)=>{
                if(err){
                   return rej(err)
                } else {
                    return res()
                }
            } )
        })
    }

    sendForward(distance=20){
        return new Promise((res, rej)=>{
            this.socket.send(`forward ${distance}`, 0, `forward ${distance}`.length, this.port, this.host, (err)=>{
                if(err){
                   return rej(err)
                } else {
                    return res()
                }
            } )
        })
    }

    sendBack(distance=20){
        return new Promise((res, rej)=>{
            this.socket.send(`back ${distance}`, 0, `back ${distance}`.length, this.port, this.host, (err)=>{
                if(err){
                   return rej(err)
                } else {
                    return res()
                }
            } )
        })
    }

    sendRight(distance=20){
        return new Promise((res, rej)=>{
            this.socket.send(`right ${distance}`, 0, `right ${distance}`.length, this.port, this.host, (err)=>{
                if(err){
                   return rej(err)
                } else {
                    return res()
                }
            } )
        })
    }

    sendLeft(distance=20){
        return new Promise((res, rej)=>{
            this.socket.send(`left ${distance}`, 0, `left ${distance}`.length, this.port, this.host, (err)=>{
                if(err){
                   return rej(err)
                } else {
                    return res()
                }
            } )
        })
    }

    sendCw(distance=20){
        return new Promise((res, rej)=>{
            this.socket.send(`cw ${distance}`, 0, `cw ${distance}`.length, this.port, this.host, (err)=>{
                if(err){
                   return rej(err)
                } else {
                    return res()
                }
            } )
        })
    }

    sendCcw(distance=20){
        return new Promise((res, rej)=>{
            this.socket.send(`ccw ${distance}`, 0, `ccw ${distance}`.length, this.port, this.host, (err)=>{
                if(err){
                   return rej(err)
                } else {
                    return res()
                }
            } )
        })
    }

    sendFlip(){
        return new Promise((res, rej)=>{
            this.socket.send(`flip l`, 0, `flip l`.length, this.port, this.host, (err)=>{
                if(err){
                   return rej(err)
                } else {
                    return res()
                }
            } )
        })
    }

    getBattery(distance=20){
        return new Promise((res, rej)=>{
            this.socket.send(`battery?`, 0, `battery?`.length, this.port, this.host, (err)=>{
                if(err){
                   return rej(err)
                } else {
                    return res()
                }
            } )
        })
    }

}

module.exports = Commander