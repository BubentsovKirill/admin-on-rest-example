import React from 'react';
import {
    ReferenceField
} from 'admin-on-rest';
import FullNameField from './FullNameField';

//TODO:создали ссылку на пользователя
const CustomerReferenceField = (props) => (
    <ReferenceField source="customer_id" reference="customers" {...props}>
        <FullNameField/>
    </ReferenceField>
);

CustomerReferenceField.defaultProps = {
    source: "customer_id",
    addLabel: true
};

export default CustomerReferenceField;

