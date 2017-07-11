import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import { stringify } from 'query-string';

import Icon from 'material-ui/svg-icons/image/collections';

const LinkToRelatedProducts = ({record}) => (
    <FlatButton
        primary
        label="products"
        icon={<Icon/>}
        containerElement={
            <Link to={{
                pathname: '/products',
                search: stringify({ filter: JSON.stringify({ category_id: record.id }) }),
            }}/>
        }
    />
);

export default LinkToRelatedProducts;