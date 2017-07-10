import React from 'react';
import Chip from 'material-ui/Chip';
import serments from '../segments/data';

//TODO: перебираем customers.groups и сравниваем с [serments], если есть совпадение выводим [serments].name

const style = {
    main: { display: 'flex', flexWrap: 'wrap' },
    chip: { margin: 4}
}
const SegmentFiled = ({record}) => (
    <span style={style.main}>
        {record.groups.map(segment => (
            <Chip key={segment} style={style.chip}>
                {serments.find(s => s.id === segment).name}
            </Chip>
        ))}
    </span>
);

SegmentFiled.defaultProps = {
    addLabel: true,
    source: 'group'
};

export default SegmentFiled;