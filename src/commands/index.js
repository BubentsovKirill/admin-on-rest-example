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
    NullableBooleanInput,
    Delete
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
        {/*TODO:Стили для списка*/}
        <Datagrid bodyOptions={{ stripedRows: true, showRowHover: true }} perPage={30}>
            {/*showTime - в поле Date показывать дополнительно время*/}
            <DateField source="date" showTime/>
            <TextField source="reference"/>
            {/*ссылка на пользователя*/}
            <CustomerReferenceField/>
            {/*количество элементов в корзине*/}
            <NbItemsFiled/>
            <NumberField source="total" options={{ style: 'currency', currency: 'USD' }}/>
            <TextField source="status"/>
            {/*выводит boolean значения*/}
            <BooleanField source="returned"/>
            <EditButton/>
        </Datagrid>
    </List>
);


const CommandTitle = ({record}) => (
    <span> Order #{record.reference}</span>
);

//TODO: выбор пользователей через список. для обьединения использую optionText={choice => ......}
export const CommandEdit = (props) => (
    <Edit {...props} title={<CommandTitle/>}>
        <SimpleForm>
            <DateInput source="date"/>
            <ReferenceInput source="customer_id" reference="customers" label="Costumers">
                {/*TODO: AutocompleteInput - обьединяем first_name + last_name, через - (choice) */}
                <AutocompleteInput optionText={choice => `${choice.first_name} ${choice.last_name}`} />
            </ReferenceInput>
            {/*сравнивает приходящие значение с id, выводит name совпадшего id*/}
            <SelectInput source="status" choices={[
                {id: 'delivered', name: 'delivered'},
                {id: 'ordered', name: 'ordered'},
                {id: 'cancelled', name: 'cancelled'}
            ]}/>
            <BooleanInput source="returned"/>
        </SimpleForm>
    </Edit>
);

//TODO: Title для удаления элемента
const CommandTitleDelete = ({record}) => (
    <span>
        Delete #{record.reference}
    </span>
);
//TODO: Кастомная форма для удаления элемента
export const CommandDelete = (props) => (<Delete title={<CommandTitleDelete/>} {...props}/>);