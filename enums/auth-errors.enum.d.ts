export declare enum AuthErrorMessage {
    INVALID = "Invalid JWT token",
    NULL = "JWT token not provided",
    INVALID_APP_ID = "JWT token app id does not match",
    INVALID_COMPANY_ID = "JWT token does not contains company id",
    ROLE_NO_ACCESS = "The current access token does not contains the correct role to access the endpoint",
    SCOPE_NO_ACCESS = "The current access token does not contains the correct scope to access the endpoint",
    RESOURCE_NO_ACCESS = "The current access token does not contains the correct resource to access the endpoint",
    FAILED_TO_GET_ACCESS_TOKEN = "Unable to get access token from Auth0",
    FAILED_GET_TOKEN = "Error while trying to obtain access token from auth0"
}
