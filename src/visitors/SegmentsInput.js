import React from 'react';
import {SelectArrayInput} from 'admin-on-rest';
import segments from '../segments/data';


//TODO: SegmentsInput - с помощью SelectArrayInput выводим данные из массива segments
const SegmentsInput = ({...rest}) => (
    <SelectArrayInput {...rest} choices={ segments.map(segment => ({id: segment.id , name: segment.name}) )}/>
);

SegmentsInput.defaultProps = {
    addField: true,
    source: 'groups'
};

export default SegmentsInput;
