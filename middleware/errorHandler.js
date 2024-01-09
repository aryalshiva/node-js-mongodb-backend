const {constants} =require("../constants");
const errorHandler = (error,req,res,next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
switch(statusCode){

    case constants.VALIDATION_ERROR :
        res.json({title :"Validation Failed ",message:error.message, stackTrace: error.stack});

    break;
    case constants.NOT_FOUND:
        res.json({title :"Not Found ",message:error.message, stackTrace: error.stack});
        
    case constants.UNAUTHORIZED:
        res.json({title :"Unauthorize",message:error.message, stackTrace: error.stack});

    case constants.FORBIDDEN:
        res.json({title :"Forbidden ",message:error.message, stackTrace: error.stack});

    case constants.SERVER_Error:
        res.json({title :"Server error ",message:error.message, stackTrace: error.stack});
        

    default:
        console.log("No Error ,All good !");


        break;

}




};

module.exports =errorHandler;