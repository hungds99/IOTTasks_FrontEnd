// React
import React from "react";

// Material
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";

export default function Object(props) {
    const {
        _id,
        name,
        location,
        description,
        createdBy,
        createdAt,
        updatedAt
    } = props.object;

    return (
        <TableRow>
            <TableCell align="center">{props.count + 1}</TableCell>
            <TableCell align="center">{name}</TableCell>
            <TableCell align="center">{location.lat}</TableCell>
            <TableCell align="center">{description}</TableCell>
            <TableCell align="center">{createdBy}</TableCell>
            <TableCell align="center">{createdAt}</TableCell>
            <TableCell align="center">{updatedAt}</TableCell>
            <TableCell align="center">
                <Tooltip title="Edit">
                    <IconButton aria-label="edit">
                        <Edit color="primary" />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Delete">
                    <IconButton aria-label="delete">
                        <Delete color="secondary" />
                    </IconButton>
                </Tooltip>
            </TableCell>
        </TableRow>
    );
}
