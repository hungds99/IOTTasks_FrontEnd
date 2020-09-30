// React
import React from "react";

// Material
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

// Component
import ObjectEdit from "../Object/ObjectEdit";
import ObjectRemove from "../Object/ObjectRemove";

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
                <ObjectEdit objectId={_id} object={props.object} />
                <ObjectRemove object={props.object} />
            </TableCell>
        </TableRow>
    );
}
