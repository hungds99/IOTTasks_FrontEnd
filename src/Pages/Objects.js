// React
import React, { useEffect, useState } from "react";

// Material UI
import { fade, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import SearchIcon from "@material-ui/icons/Search";
import Pagination from "@material-ui/lab/Pagination";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Component
import Object from "../Components/Object/Object";
import ObjectAdd from "../Components/Object/ObjectAdd";
import { getObjects } from "../Redux/Actions/ObjectAction";

const useStyles = makeStyles(theme => ({
    object: {
        marginTop: 50
    },
    table: {
        minWidth: 650
    },
    pagination: {
        marginTop: 10,
        marginBottom: 10,
        float: "right"
    },
    action: {
        display: "flex",
        justifyContent: "space-between"
    },
    addBtn: {
        marginLeft: 25
    },
    searchBox: {
        marginRight: 50
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        marginRight: theme.spacing(7),
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(3),
            width: "auto"
        }
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    inputRoot: {
        color: "inherit",
        border: "1px solid #ccc"
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch"
        }
    },
    loading: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh"
    }
}));

export default function Objects() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const { objects } = useSelector(state => state.object);
    const { loading } = useSelector(state => state.ui);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(getObjects(page));
    }, [page, dispatch]);

    const changePage = value => {
        setPage(value);
    };

    const recentObjectsMarkup = objects.map((object, index) => (
        <Object key={index} object={object} count={index} />
    ));

    return (
        <div className={classes.object}>
            {loading ? (
                <div className={classes.loading}>
                    <CircularProgress />
                </div>
            ) : (
                <TableContainer component={Paper}>
                    <div className={classes.action}>
                        <ObjectAdd />
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput
                                }}
                                inputProps={{ "aria-label": "search" }}
                            />
                        </div>
                    </div>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">ID</TableCell>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">Location</TableCell>
                                <TableCell align="center">
                                    Description
                                </TableCell>
                                <TableCell align="center">CreatedBy</TableCell>
                                <TableCell align="center">CreatedAt</TableCell>
                                <TableCell align="center">UpdatedAt</TableCell>
                                <TableCell align="center">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>{recentObjectsMarkup}</TableBody>
                    </Table>
                    <Pagination
                        className={classes.pagination}
                        count={20}
                        color="primary"
                        page={page}
                        onChange={changePage}
                    />
                </TableContainer>
            )}
        </div>
    );
}
