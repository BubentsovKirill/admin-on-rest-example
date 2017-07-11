import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    DateField,
    NumberField,
    EditButton,
    BooleanField,
    Edit,
    TabbedForm,
    FormTab,
    TextInput,
    DateInput,
    ReferenceManyField,
    NullableBooleanInput,
    Filter,
    Delete
} from 'admin-on-rest';
import FullNameField from './FullNameField';
import SegmentFiled from './SegmentField';
import NbItemsField from '../commands/NbItemsField';
import ProductReferenceField from '../products/ProductReferenceField';
import StarRatingFiled from '../reviews/StarRatingField';
import SegmentsInput from './SegmentsInput';
import SegmentInput from './SegmentInput';


const VisitorFilter = (props) => (
    <Filter {...props}>
        <TextInput source="q" label="search" alwaysOn/>
        <DateInput source="last_seen"/>
        <NullableBooleanInput source="has_ordered"/>
        <NullableBooleanInput source="has_newsletter"/>
        <SegmentInput/>
    </Filter>
);

//TODO: ColoredNumberField - кастомный фиелд c условием
const colored = WrapperComponent => props => props.record[props.source] > 500 ?
    <span style={{color: 'red'}}><WrapperComponent {...props}/></span> :
    <WrapperComponent {...props}/>;
const ColoredNumberField = colored(NumberField);

export const VisitorList = (props) => (
    <List {...props}  perPage={30} filters={<VisitorFilter/>}>
        {/*TODO: стили для списка*/}
        <Datagrid bodyOptions={{ stripedRows: true, showRowHover: true }}>
            {/*кастомный филд*/}
            <FullNameField/>
            <DateField source="last_seen"/>
            <NumberField source="nb_commands" label="orders"/>
            {/*кастомный филд*/}
            {/*TODO: добали валюту*/}
            <ColoredNumberField source="total_spent" label="total" options={{ style: 'currency', currency: 'USD' }}/>
            <DateField source="latest_purchase" showTime/>
            <BooleanField source="has_newsletter" label="news"/>
            {/*поля segments*/}
            <SegmentFiled/>
            <EditButton/>
        </Datagrid>
    </List>
);

//TODO: Title для окна редактирования
const VisitorTitle = ({record}) => record ? <FullNameField record={record}/> : null;

const textInputStyle = {
    first: {
        display: 'inline-block'
    },
    last: {
        display: 'inline-block', marginLeft: 20
    }
};

const dateFieldStyle = {
    display: 'inline-block',
    width: 128
};
export const VisitorEdit = (props) => (
    <Edit {...props} title={<VisitorTitle/>}>
        {/*TODO: форма для TabsForm*/}
        <TabbedForm>
            {/*TODO:  сами табы*/}
            <FormTab label="identity">
                <TextInput source="first_name" style={textInputStyle.first}/>
                <TextInput source="last_name" style={textInputStyle.last}/>
                {/*TODO: validate input and set options*/}
                <TextInput source="email"
                           validation={{ email: true }}
                           options={{fullWidth : true}}
                           style={{width:530}}/>
                <DateInput source="birthday"/>
            </FormTab>
            <FormTab label="address">
                <TextInput source="address"
                           options={{fullWidth : true}}
                           style={{width:530}}/>
                <TextInput source="zipcode" style={textInputStyle.first}/>
                <TextInput source="city" style={textInputStyle.last}/>
            </FormTab>
            <FormTab label="orders">
                {/*ReferenceManyField - получить список данных связанных с текущим обьектом*/}
                {/*TODO:ReferenceManyField - требует манипуляций с label*/}
                <ReferenceManyField addLabel={false} reference="commands" target="customer_id">
                    <Datagrid>
                        <DateField source="date"/>
                        <TextField source="reference"/>
                        <NbItemsField label="nb items"/>
                        <NumberField source="total" options={{ style: 'currency', currency: 'USD' }}/>
                        <TextField source="status"/>
                        <EditButton/>
                    </Datagrid>
                </ReferenceManyField>
            </FormTab>
            <FormTab label="reviews">
                <ReferenceManyField addLabel={false} reference="reviews" target="customer_id">
                    <Datagrid>
                        <TextField source="date"/>
                        {/*TODO: ProductReferenceField - ссылка на product*/}
                        <ProductReferenceField/>
                        <StarRatingFiled/>
                        {/*style -- наводим красоту в коментарии*/}
                        <TextField source="comment" style={{ maxWidth: '20em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}/>
                        <EditButton/>
                    </Datagrid>
                </ReferenceManyField>
            </FormTab>
            <FormTab label="stats">
                {/*кастомный input для ввода segments*/}
                <SegmentsInput/>
                <NullableBooleanInput source="has_newsletter"/>
                <DateField source="first_seen" style={dateFieldStyle}/>
                <DateField source="latest_purchase" style={dateFieldStyle}/>
                <DateField source="last_seen" style={dateFieldStyle}/>
            </FormTab>
        </TabbedForm>
    </Edit>
);

//TODO: кастомная форма для удаления чего либо
const VisitorTitleDelete = ({record}) => <span>
    Delete &nbsp;&nbsp;
    {record && <img src={`${record.avatar}?size=30x30`} width="30" alt="" />}
    &nbsp;&nbsp;
    {record && `${record.first_name} ${record.last_name}`}
</span>;
export const VisitorDelete = (props) => <Delete title={<VisitorTitleDelete/>} {...props}/>

