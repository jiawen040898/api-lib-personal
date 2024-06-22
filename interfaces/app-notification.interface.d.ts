export declare enum AppNotificationErrorMessage {
    FAILED_TO_SEND = "Failed to send app notification"
}
export declare enum AppNotificationErrorCode {
    FAILED_TO_SEND_REQUEST = "failed_to_send_app_notification"
}
export interface AppNotificationRequest<T> {
    event_type: string;
    event_data: T;
}
