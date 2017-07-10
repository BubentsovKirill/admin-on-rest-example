import React from 'react';
import {
    List,
    DateField,
    EditButton,
    Datagrid,
    TextField,
    NumberField,
    BooleanField,
    Edit,
    DateInput,
    SimpleForm,
    ReferenceInput,
    AutocompleteInput,
    SelectInput,
    BooleanInput,
    Filter,
    TextInput,
    NullableBooleanInput
} from 'admin-on-rest';
import CustomerReferenceField from '../visitors/CustomerReferenceField';
import NbItemsFiled from './NbItemsField';

const CommandFilter = (props) => (
    <Filter {...props}>
        <TextInput source="q" label="search" alwaysOn/>
        <ReferenceInput source="customer_id" reference="customers" label="customer">
            <AutocompleteInput optionText={choice => `${choice.first_name} ${choice.last_name}`}/>
        </ReferenceInput>
        {/*TODO: список выбора*/}
        <SelectInput source="status" choices={[
            {id: 'delivered', name: 'delivered'},
            {id: 'ordered', name: 'ordered'},
            {id: 'cancelled', name: 'cancelled'},
        ]}/>
        <NullableBooleanInput source="returned"/>
    </Filter>
)

export const CommandList = (props) => (
    <List {...props} filters={<CommandFilter/>}>
        <Datagrid bodyOptions={{ stripedRows: true, showRowHover: true }}>
            <DateField source="date" showTime/>
            <TextField source="reference"/>
            <CustomerReferenceField/>
            <NbItemsFiled/>
            <NumberField source="total" options={{ style: 'currency', currency: 'USD' }}/>
            <TextField source="status"/>
            <BooleanField source="returned"/>
            <EditButton/>
        </Datagrid>
    </List>
);


const CommandTitle = ({record}) => (
    <span> Order #{record.reference}</span>
)

//TODO: выбор пользователей через список. для обьединения использую optionText={choice => ......}
export const CommandEdit = (props) => (
    <Edit {...props} title={<CommandTitle/>}>
        <SimpleForm>
            <DateInput source="date"/>
            <ReferenceInput source="customer_id" reference="customers" label="Costumers">
                <AutocompleteInput optionText={choice => `${choice.first_name} ${choice.last_name}`} />
            </ReferenceInput>
            <SelectInput source="status" choices={[
                {id: 'delivered', name: 'delivered'},
                {id: 'ordered', name: 'ordered'},
                {id: 'cancelled', name: 'cancelled'}
            ]}/>
            <BooleanInput source="returned"/>
        </SimpleForm>
    </Edit>
)