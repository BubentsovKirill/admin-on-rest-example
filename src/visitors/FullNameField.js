import React from 'react';
import AvatarField from './AvatarField';
import pure from 'recompose/pure';

//TODO: FullNameField - аватар + fullName
const FullNameField = ({ record = {}, size = 25 }) => <span>
    {/*аватар*/}
    <AvatarField record={record} size={size} />
    <span style={{ display: 'inline-block', width: size/3 }}>&nbsp;</span>
    {record.first_name} {record.last_name}
</span>;

const PureFullNameField = pure(FullNameField);

PureFullNameField.defaultProps = {
    label: 'name',
    source: 'last_name'
};

export default PureFullNameField;

