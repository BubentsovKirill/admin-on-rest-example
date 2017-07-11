import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    Edit,
    TextInput,
    SimpleForm,
    ReferenceManyField,
    NumberField
} from 'admin-on-rest';

import LinkToRelatedProducts from './LinkToRelatedProducts';
import ThumbnailField from '../products/ThumbnailField';
import ProductRefField from '../products/ProductRefField';

export const CategorieList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="name"/>
            <LinkToRelatedProducts />
            <EditButton/>
        </Datagrid>
    </List>
);

const CategorieTitleEdit = ({record}) => (
    <span>
        Category "{record.name}"
    </span>
);

export const CategorieEdit = (props) => (
    <Edit {...props} title={<CategorieTitleEdit/>}>
        <SimpleForm>
            <TextInput source="name"/>
            <ReferenceManyField reference="products" target="category_id" label="products">
                <Datagrid>
                    <ThumbnailField/>
                    <ProductRefField/>
                    <NumberField source="price" options={{ style: 'currency', currency: 'USD' }}/>
                    <NumberField source="width"/>
                    <NumberField source="height"/>
                    <NumberField source="stock"/>
                    <EditButton/>
                </Datagrid>
            </ReferenceManyField>
        </SimpleForm>
    </Edit>
)
