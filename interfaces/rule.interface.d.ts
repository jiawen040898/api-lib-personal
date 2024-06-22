export interface Rule<T> {
    match: (value: T) => boolean;
    action: (value: T) => T;
}
