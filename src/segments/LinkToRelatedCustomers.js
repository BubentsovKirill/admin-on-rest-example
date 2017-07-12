import React from 'react';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import { stringify } from 'query-string';

import VisitorIcon from 'material-ui/svg-icons/social/person';

//TODO: ссылка на посетителей с фильтрации
const LinkToRelatedCustomers = ({segment}) => (
    <FlatButton primary
                label="costumers"
                icon={<VisitorIcon />}
                containerElement={
                    <Link to={{
                        pathname: "/customers",
                        search: stringify({ page: 1, perPage: 25, filter: JSON.stringify({ groups: segment }) }),
                    }}/>
                }
    />
);

export default LinkToRelatedCustomers;


