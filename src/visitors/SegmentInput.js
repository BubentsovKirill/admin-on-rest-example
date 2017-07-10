import React from 'react';
import segments from '../segments/data';
import {
    SelectInput
} from 'admin-on-rest';

const SegmentInput = ({...rest}) => (
    <SelectInput {...rest} choices={segments.map(segment => ({id: segment.id, name: segment.name}))}/>
);

SegmentInput.defaultProps = {
    addLabel : true,
    addField: true,
    source: 'groups'
};

export default SegmentInput;
