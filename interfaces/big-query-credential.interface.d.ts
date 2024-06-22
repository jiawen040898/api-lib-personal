export interface BigQueryCredential {
    client_email: string;
    private_key: string;
    project_id: string;
    type?: string;
    private_key_id?: string;
    client_id?: string;
    auth_uri?: string;
    token_uri?: string;
    auth_provider_x509_cert_url?: string;
    client_x509_cert_url?: string;
}
