import { schema } from 'normalizr'

export const incomeTypesSchema = new schema.Entity(
    "incomeTypes", 
    {},
    {idAttribute: "_id" }
);