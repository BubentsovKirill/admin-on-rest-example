import React from 'react';
import { Card } from 'material-ui/Card';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {ViewTitle} from 'admin-on-rest';
import segments from './data';
import LinkToRelatedCustomers from './LinkToRelatedCustomers';

const Segments = () => (
    <Card>
        <ViewTitle title="Segments"/>
        <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                    <TableHeaderColumn/>
                </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
                    {segments.map(segment => (
                        <TableRow key={segment.id}>
                            <TableRowColumn>{segment.name}</TableRowColumn>
                            <TableRowColumn>
                                <LinkToRelatedCustomers segment={segment.id}/>
                            </TableRowColumn>
                        </TableRow>
                        ))
                    }
            </TableBody>
        </Table>
    </Card>
);

export default Segments;