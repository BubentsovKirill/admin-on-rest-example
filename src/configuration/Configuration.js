import React from 'react';
import {connect} from 'react-redux';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { ViewTitle } from 'admin-on-rest';

import { changeTheme as changeThemeAction } from './action';


const styles = {
    label: { width: '10em', display: 'inline-block' },
    button: { margin: '1em' },
};

const Configuration = ({theme, changeTheme }) => (
    <Card>
        <ViewTitle title="Configuration"/>
        <CardText>
            <div style={styles.label}>Theme</div>
            <RaisedButton style={styles.button} label="light" primary onClick={() => changeTheme('light')} />
            <RaisedButton style={styles.button} label="dark" secondary onClick={() => changeTheme('dark')} />
        </CardText>
    </Card>
);

const mapStateToProps = state => ({
    theme: state.theme
});

export default connect(mapStateToProps, {
    changeTheme: changeThemeAction,
})(Configuration);