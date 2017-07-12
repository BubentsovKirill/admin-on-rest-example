import React from 'react';
import {
    List,
    Datagrid,
    DateField,
    TextField,
    EditButton,
    Edit,
    SimpleForm,
    ReferenceField,
    LongTextInput,
    SelectInput,
    Delete,
    Filter,
    TextInput,
    AutocompleteInput,
    ReferenceInput
} from 'admin-on-rest';
import CustomerReferenceField from '../visitors/CustomerReferenceField';
import ProductReferenceField from '../products/ProductReferenceField';
import StarRatingField from './StarRatingField';
//ипортируем => [{if => {stule}}*3]
import rowStyle from './rowStyle';
//RichTextInput - smart textinput
import RichTextInput from 'aor-rich-text-input';

const ReviewFilter = (props) => (
    <Filter {...props}>
        {/*TODO:alwaysOn - show searchInput on panel*/}
        <TextInput source="q" label="search" alwaysOn/>
        {/*TODO: SelectInput choices => [{}] - search for variable*/}
        <SelectInput source="status" choices={[
            { id: 'accepted', name: 'Accepted' },
            { id: 'pending', name: 'Pending' },
            { id: 'rejected', name: 'Rejected' }
        ]}/>
        {/*TODO: - ReferenceInput - Link for render element */}
        <ReferenceInput source="customer_id" reference="customers" label="Customers">
            <AutocompleteInput optionText={choice => `${choice.first_name} ${choice.last_name}`}/>
        </ReferenceInput>
        <ReferenceInput source="product_id" reference="products" label="Products">
            <AutocompleteInput optionText="reference"/>
        </ReferenceInput>
    </Filter>
)

export const ReviewList = (props) => (
    <List {...props} filters={<ReviewFilter/>}>
        <Datagrid rowStyle={rowStyle}>
            <DateField source="date"/>
            <CustomerReferenceField />
            <ProductReferenceField />
            <StarRatingField/>
            {/*cделали кросивый field comment*/}
            <TextField source="comment" style={{ maxWidth: '20em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}/>
            <TextField source="status"/>
            <EditButton/>
        </Datagrid>
    </List>
);

const ReviewTitleEdit = ({record}) => (
    <span>Review #{record.id}</span>
);
const detailStyle = { display: 'inline-block', verticalAlign: 'top', marginRight: '2em', minWidth: '8em' };
export const ReviewEdit = (props) => (
    <Edit {...props} title={<ReviewTitleEdit/>}>
        <SimpleForm>
            <DateField source="date" style={detailStyle}/>
            <CustomerReferenceField style={detailStyle}/>
            <ProductReferenceField style={detailStyle}/>
            <ReferenceField source="command_id" reference="commands" addLabel style={detailStyle}>
                <TextField source="reference" />
            </ReferenceField>
            <StarRatingField style={detailStyle}/>
            <RichTextInput source="comment" />
            <SelectInput source="status" choices={[
                { id: 'accepted', name: 'Accepted' },
                { id: 'pending', name: 'Pending' },
                { id: 'rejected', name: 'Rejected' },
            ]} />
        </SimpleForm>
    </Edit>
);

const ReviewTitleDelete = ({record}) => (
    <span>Review #"{record.id}"</span>
);

export const ReviewDelete = (props) => (
    <Delete {...props} title={<ReviewTitleDelete/>}/>
);

