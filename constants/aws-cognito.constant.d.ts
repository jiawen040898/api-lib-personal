export declare const AWS_COGNITO_USER_SUB_CACHE_KEY = "AWS:COGNITO:USER:SUB";
export declare enum AwsCognitoServiceError {
    API_URL_UNDEFINED = "The aws cognito aws uri is not defined in environment",
    INVALID_TOKEN_OR_AUTHORIZATION_HEADER = "token sub or authorization header must not be undefined",
    FAILED_GET_OAUTH2_USER_INFO = "Fail to get user info from aws cognito oauth2",
    FAILED_GET_IDP_USER_INFO = "Fail to get user info from aws cognito idp"
}
