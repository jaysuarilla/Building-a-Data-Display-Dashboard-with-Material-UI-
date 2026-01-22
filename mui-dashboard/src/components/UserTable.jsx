import { useState } from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, Paper, TablePagination, TableSortLabel, Avatar
} from "@mui/material";

// Table displaying users with pagination and sorting
export default function UserTable() {
  const rows = [
    { name: "Mark", role: "Admin", image: "https://i.pravatar.cc/150?img=11" },
    { name: "John", role: "User", image: "https://i.pravatar.cc/150?img=12" },
    { name: "Charlie", role: "Manager", image: "https://i.pravatar.cc/150?img=13" },
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState("asc");

  const handleSort = () => {
    setOrder(order === "asc" ? "desc" : "asc");
  };

  const sortedRows = [...rows].sort((a, b) =>
    order === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  );

  return (
    <Paper sx={{ background: "linear-gradient(135deg, #e6e8efff 0%, #0040ffff 100%)" }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ background: "#a77501ff" }}>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Photo</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                <TableSortLabel active direction={order} onClick={handleSort} sx={{ color: "white !important", "& .MuiTableSortLabel-icon": { color: "white !important" } }}>
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Role</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {sortedRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.name} sx={{ background: "#a68c51ff", "&:hover": { background: "#cce5ff" } }}>
                  <TableCell>
                    <Avatar src={row.image} alt={row.name} />
                  </TableCell>
                  <TableCell sx={{ color: "#ffffffff", fontWeight: "500" }}>{row.name}</TableCell>
                  <TableCell sx={{ color: "#ffffffff", fontWeight: "500" }}>{row.role}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={rows.length}
        page={page}
        onPageChange={(e, newPage) => setPage(newPage)}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(e) => setRowsPerPage(+e.target.value)}
        sx={{ 
          background: "#a77501ff", 
          color: "white",
          "& .MuiSelect-icon": { color: "white" },
          "& .MuiIconButton-root": { color: "white" },
          "& .MuiSvgIcon-root": { color: "white" }
        }}
      />
    </Paper>
  );
}
