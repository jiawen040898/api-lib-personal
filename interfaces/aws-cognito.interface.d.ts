export interface AwsCognitoUserInfo {
    sub: string;
    email_verified: string;
    given_name: string;
    family_name: string;
    email: string;
    username: string;
    'custom:profile_id': string;
    'custom:user_account_id': number;
}
export declare enum AwsCognitoUserAttribute {
    'sub' = "sub",
    'custom:user_account_id' = "custom:user_account_id",
    'email_verified' = "email_verified",
    'given_name' = "given_name",
    'custom:profile_id' = "custom:profile_id",
    'family_name' = "family_name",
    'email' = "email"
}
export type AwsCognitoUserAttributeNameValue = {
    Name: AwsCognitoUserAttribute;
    Value: string;
};
export type AwsCognitoIdpServiceGetUserResponse = {
    UserAttributes: AwsCognitoUserAttributeNameValue[];
    Username: string;
};
