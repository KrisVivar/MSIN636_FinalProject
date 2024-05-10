class errorResponse extends Error{
    constructor(errorCode, message){
        super(message)
        this.errorCode = errorCode
    }
}

module.exports = errorResponse;
