import React from 'react';
import {
    List,
    Filter,
    TextInput,
    ReferenceInput,
    SelectInput,
    Create,
    TabbedForm,
    FormTab,
    NumberInput,
    Edit,
    ReferenceManyField,
    Datagrid,
    TextField,
    DateField,
    Delete
} from 'admin-on-rest';
import GridList from './GridList';
import RichTextInput from 'aor-rich-text-input';
import Poster from './Poster';
import CustomerReferenceFiled from '../visitors/CustomerReferenceField';
import StarRatingField from '../reviews/StarRatingField';


const ProductFilter = (props) => (
    <Filter {...props}>
        <TextInput source="q" label="search" alwaysOn/>
        <ReferenceInput source="category_id" reference="categories" label="Categories">
            <SelectInput source="name"/>
        </ReferenceInput>
    </Filter>
);

//TODO: GridList - кастомный вывод продукции
export const ProductList = (props) => (
    <List {...props} filters={<ProductFilter/>} perPage={32}>
        <GridList/>
    </List>
);

const imageInputStyle = {
  width: 500
};

export const ProductCreate = (props) => (
    <Create {...props}>
        <TabbedForm>
            <FormTab label="image">
                <TextInput source="image" options={{fullWidth: true}} style={imageInputStyle} validation={{ required: true }}/>
                <TextInput source="thumbnail" options={{fullWidth: true}} style={imageInputStyle} validation={{ required: true }}/>
            </FormTab>
            <FormTab label="details">
                <TextInput source="reference"/>
                <NumberInput source="price"/>
                <NumberInput source="width"/>
                <NumberInput source="height"/>
                <ReferenceInput source="category_id" reference="categories" label="Categories" allowEmpty>
                    <SelectInput source="name"/>
                </ReferenceInput>
            </FormTab>
            <FormTab label="description">
                <RichTextInput source="description"/>
            </FormTab>
        </TabbedForm>
    </Create>
);


const ProductTitleEdit = ({record}) => (
    <span>
        Poster #{record.reference}
    </span>
);

export const ProductEdit = (props) => (
    <Edit {...props} title={<ProductTitleEdit/>}>
        <TabbedForm>
            <FormTab label="image">
                <Poster/>
                <TextInput source="image" options={{fullWidth: true}} style={imageInputStyle} validation={{ required: true }}/>
                <TextInput source="thumbnail" options={{fullWidth: true}} style={imageInputStyle} validation={{ required: true }}/>
            </FormTab>
            <FormTab label="details">
                <TextInput source="reference"/>
                <NumberInput source="price"/>
                <NumberInput source="width"/>
                <NumberInput source="height"/>
                <ReferenceInput source="category_id" reference="categories" label="Categories" allowEmpty>
                    <SelectInput source="name"/>
                </ReferenceInput>
            </FormTab>
            <FormTab label="description">
                <RichTextInput source="description"/>
            </FormTab>
            <FormTab label="reviews">
                <ReferenceManyField reference="reviews" target="product_id" addLabel={false}>
                    <Datagrid>
                        <DateField source="date"/>
                        {/*вывод пользователей*/}
                        <CustomerReferenceFiled/>
                        {/*вывод рейтинга*/}
                        <StarRatingField/>
                        <TextField source="comment" style={{ maxWidth: '20em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} />
                        <TextField source="status" />
                    </Datagrid>
                </ReferenceManyField>
            </FormTab>
        </TabbedForm>
    </Edit>
);

const ProductDeleteTitle = ({record}) => (
    <span>
        Poster #{record.reference}
    </span>
);

export const ProductDelete = (props) => (
    <Delete {...props} title={<ProductDeleteTitle/>}/>
)
