import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import BASE_URL from "../config";
import { useNavigate } from "react-router-dom";
function TablePage() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    source: "",
    destination: "",
    container_size: "",
    email: "pratham.parmar@cogoport.com",
  });
  const [data, setData] = useState([]);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const search = () => {
    fetch(BASE_URL + "/search?" + new URLSearchParams(inputs), {
      method: "GET",
      credentials: "include",
    }).then(async function (resp) {
      setData(await resp.json());
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

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  return (
    <>
      <Button variant="contained" onClick={() => navigate("/add")}>
        Add Rate
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          localStorage.clear();
          navigate("/login")
        }}
      >
        Logout
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Ex/Im</StyledTableCell>
              <StyledTableCell align="right">Port of Loading</StyledTableCell>
              <StyledTableCell align="right">
                Port of Destination
              </StyledTableCell>
              <StyledTableCell align="right">Container Size</StyledTableCell>
              <StyledTableCell align="right">Rate</StyledTableCell>
              <StyledTableCell align="right">Uploaded By</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <StyledTableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  {row.exim}
                </StyledTableCell>
                <StyledTableCell align="right">{row.source}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.destination}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.container_size}
                </StyledTableCell>
                <StyledTableCell align="right">{row.rate}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.created_by}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default TablePage;
