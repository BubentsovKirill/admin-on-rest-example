import React from 'react';
import { DashboardMenuItem } from 'admin-on-rest';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import compose from 'recompose/compose';

import VisitorIcon from 'material-ui/svg-icons/social/person';
import LabelIcon from 'material-ui/svg-icons/action/label';
import CommandIcon from 'material-ui/svg-icons/editor/attach-money';
import ProductIcon from 'material-ui/svg-icons/image/collections';
import CategoryIcon from 'material-ui/svg-icons/action/bookmark';
import ReviewIcon from 'material-ui/svg-icons/communication/comment';
import SettingsIcon from 'material-ui/svg-icons/action/settings';

//список меню
const items = [
    { name: 'customers', icon: <VisitorIcon /> },
    { name: 'segments', icon: <LabelIcon /> },
    { name: 'commands', icon: <CommandIcon /> },
    { name: 'products', icon: <ProductIcon /> },
    { name: 'categories', icon: <CategoryIcon /> },
    { name: 'reviews', icon: <ReviewIcon /> },
    { name: 'configuration', icon: <SettingsIcon /> },
];

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '100%',
    },
};

//TODO: application Menu
const Menu = ({onMenuTap, logout}) => (
    <div style={styles.main}>
        {/*TODO: подключили Dashboard к меню*/}
        <DashboardMenuItem onTouchTap={onMenuTap}/>
        {
            items.map(function(item){
                const itemName = item.name.charAt(0).toUpperCase() + item.name.substring(1);
                    return (
                        <MenuItem
                            key={item.name}
                            containerElement={<Link to={`/${item.name}`} />}
                            primaryText={itemName}
                            leftIcon={item.icon}
                            onTouchTap={onMenuTap}
                        />
                    )
                }
            )
        }
        {/*TODO: подключили logout к меню*/}
        {logout}
    </div>
);

const enhance = compose(
    connect(state => ({
        theme: state.theme
    }))
);

export default enhance(Menu);
