"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthErrorMessage = void 0;
var AuthErrorMessage;
(function (AuthErrorMessage) {
    AuthErrorMessage["INVALID"] = "Invalid JWT token";
    AuthErrorMessage["NULL"] = "JWT token not provided";
    AuthErrorMessage["INVALID_APP_ID"] = "JWT token app id does not match";
    AuthErrorMessage["INVALID_COMPANY_ID"] = "JWT token does not contains company id";
    AuthErrorMessage["ROLE_NO_ACCESS"] = "The current access token does not contains the correct role to access the endpoint";
    AuthErrorMessage["SCOPE_NO_ACCESS"] = "The current access token does not contains the correct scope to access the endpoint";
    AuthErrorMessage["RESOURCE_NO_ACCESS"] = "The current access token does not contains the correct resource to access the endpoint";
    AuthErrorMessage["FAILED_TO_GET_ACCESS_TOKEN"] = "Unable to get access token from Auth0";
    AuthErrorMessage["FAILED_GET_TOKEN"] = "Error while trying to obtain access token from auth0";
})(AuthErrorMessage || (exports.AuthErrorMessage = AuthErrorMessage = {}));
//# sourceMappingURL=auth-errors.enum.js.map