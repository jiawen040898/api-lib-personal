"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsCognitoServiceError = exports.AWS_COGNITO_USER_SUB_CACHE_KEY = void 0;
exports.AWS_COGNITO_USER_SUB_CACHE_KEY = 'AWS:COGNITO:USER:SUB';
var AwsCognitoServiceError;
(function (AwsCognitoServiceError) {
    AwsCognitoServiceError["API_URL_UNDEFINED"] = "The aws cognito aws uri is not defined in environment";
    AwsCognitoServiceError["INVALID_TOKEN_OR_AUTHORIZATION_HEADER"] = "token sub or authorization header must not be undefined";
    AwsCognitoServiceError["FAILED_GET_OAUTH2_USER_INFO"] = "Fail to get user info from aws cognito oauth2";
    AwsCognitoServiceError["FAILED_GET_IDP_USER_INFO"] = "Fail to get user info from aws cognito idp";
})(AwsCognitoServiceError || (exports.AwsCognitoServiceError = AwsCognitoServiceError = {}));
//# sourceMappingURL=aws-cognito.constant.js.map