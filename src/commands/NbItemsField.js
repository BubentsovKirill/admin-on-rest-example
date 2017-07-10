import React from 'react';
import {FunctionField} from 'admin-on-rest';

//TODO: количeство элементов в basket
const amount = record => record.basket.length;
const NbItemsField = (props) => (
    <span>
        <FunctionField {...props} render={amount}/>
    </span>
);

NbItemsField.defaultProps = {
    source : "basket"
}
export default NbItemsField;
