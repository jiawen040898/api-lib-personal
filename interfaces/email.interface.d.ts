export interface TemplateVariable {
    first_name?: string;
    last_name?: string;
    email?: string;
    job_title?: string;
    company_name?: string;
    download_link?: string;
    invite_link?: string;
    set_password_link?: string;
    program_name?: string;
    [key: string]: SafeAny;
}
export declare enum EmailActivityMessageRecipientGroup {
    CANDIDATE = "candidate",
    USER = "user"
}
export interface EmailTemplate {
    id?: number;
    subject: string;
    body_in_html: string;
}
export interface EmailRequest {
    recipient_email: string;
    recipient_group: EmailActivityMessageRecipientGroup;
    recipient_id?: string;
    company_id?: number;
    email_template_id?: number;
    email_communication_type?: string;
    variables: TemplateVariable;
    email_template?: EmailTemplate;
}
