// React
import React from "react";

import dayjs from "dayjs";

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
            <TableCell align="center">
                <li>Longitude: {location.lng}</li>
                <li>Latitude: {location.lat}</li>
            </TableCell>
            <TableCell align="center">{description}</TableCell>
            <TableCell align="center">{createdBy}</TableCell>
            <TableCell align="center">
                {dayjs(createdAt).format("MM/DD/YYYY h:mm:ss A")}
            </TableCell>
            <TableCell align="center">
                {dayjs(updatedAt).format("MM/DD/YYYY h:mm:ss A")}
            </TableCell>
            <TableCell align="center">
                <ObjectEdit objectId={_id} object={props.object} />
                <ObjectRemove object={props.object} />
            </TableCell>
        </TableRow>
    );
}
