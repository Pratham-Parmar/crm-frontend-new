import React, {useEffect, useState} from "react";
import Table from "@mui/material/Table";
import {styled} from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {Button} from "@mui/material";
import Paper from "@mui/material/Paper";
import BASE_URL from "../config";
import {useNavigate} from "react-router-dom";


function TablePage() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        source: "",
        destination: "",
        container_size: "",
        email: "",
    });
    const [data, setData] = useState([]);

    const StyledTableCell = styled(TableCell)(({theme}) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const deleteRate = (id) => {
        fetch(BASE_URL + "/delete", {
            method: "POST",
            credentials: "include",
            body: JSON.stringify({"id": id}),
        }).then(async function (resp) {
            window.location.reload();
        });
    };

    const search = () => {
        fetch(BASE_URL + "/search?" + new URLSearchParams(inputs), {
            method: "GET",
            credentials: "include",
        }).then(async function (resp) {
            let data = await resp.json()
            console.log(data)
            setData(data);
        });
    };
    useEffect(() => {
        if (
            !(
                "Login_status" in localStorage &&
                localStorage.getItem("Login_status") == "true"
            )
        )
            navigate("/login");
        search();
    }, []);

    const StyledTableRow = styled(TableRow)(({theme}) => ({
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        "&:last-child td, &:last-child th": {
            border: 0,
        },
    }));
    return (
        <div style={{margin: '10px'}}>
            <div style={{display: "grid", gridTemplateColumns: "85% 15%"}}>
                <Button style={{maxWidth: "150px"}}
                    // style={{marginRight:'10px'}}
                        variant="contained" onClick={() => navigate("/add")}>
                    Add Rate
                </Button>
                <Button style={{maxWidth: "150px"}}
                        variant="contained"
                        onClick={() => {
                            localStorage.clear();
                            navigate("/login")
                        }}
                >
                    Logout
                </Button>
            </div>
            <TableContainer style={{marginTop: '10px'}} component={Paper}>
                <Table sx={{minWidth: 450}} aria-label="simple table">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>Ex/Im</StyledTableCell>
                            <StyledTableCell>Port of Loading</StyledTableCell>
                            <StyledTableCell>
                                Port of Destination
                            </StyledTableCell>
                            <StyledTableCell>Container Size</StyledTableCell>
                            <StyledTableCell>Rate</StyledTableCell>
                            <StyledTableCell>Delete Rate</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <StyledTableRow
                                key={row.name}
                                sx={{"&:last-child td, &:last-child th": {border: 0}}}
                            >
                                <StyledTableCell component="th" scope="row">
                                    {row.exim}
                                </StyledTableCell>
                                <StyledTableCell>{row.source}</StyledTableCell>
                                <StyledTableCell>{row.destination}</StyledTableCell>
                                <StyledTableCell>{row.container_size}</StyledTableCell>
                                <StyledTableCell>{row.rate}</StyledTableCell>
                                {/*<StyledTableCell >{row.created_by}</StyledTableCell>*/}
                                <StyledTableCell>
                                    <Button onClick={() => deleteRate(row.id)}>
                                        Delete
                                    </Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default TablePage;
