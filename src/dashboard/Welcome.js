import React from 'react';
import { Card, CardHeader, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import LightBulbIcon from 'material-ui/svg-icons/action/lightbulb-outline';
import HomeIcon from 'material-ui/svg-icons/action/home';
import CodeIcon from 'material-ui/svg-icons/action/code';
import FlatButton from 'material-ui/FlatButton';

export default ({style}) => (
    <Card>
        <CardHeader title="Welcome to admin-on-rest demo"
                    subtitle="This is the admin of an imaginary poster shop. Fell free to explore and modify the data - it's local to your computer, and will reset each time you reload."
                    avatar={<Avatar backgroundColor="#FFEB3B" icon={<LightBulbIcon />} />}
        />
        <CardActions style={{ textAlign: 'right' }}>
            <FlatButton label="Admin-on-rest website" icon={<HomeIcon />}  href="https://marmelab.com/admin-on-rest/" />
            <FlatButton label="Source for this demo" icon={<CodeIcon />} href="https://github.com/marmelab/admin-on-rest-demo" />
        </CardActions>
    </Card>
);

