export declare const objectParser: {
    toJSON: <T>(value: T) => JSON;
    toDto: <TEntity, TDto>(value: TEntity | null | undefined, type: new (entity: TEntity) => TDto) => TDto | null;
    toDtos: <TEntity_1, TDto_1>(value: TEntity_1[] | null | undefined, type: new (entity: TEntity_1) => TDto_1) => TDto_1[];
    parseJsonArrayToDtos: <TDto_2>(rawJson: JSON | undefined | null, type: new (json: JSON) => TDto_2) => TDto_2[];
    tryParseTo: <T_1>(jsonString: string | undefined | null) => T_1 | undefined;
};
