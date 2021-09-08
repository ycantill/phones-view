import './PhoneDetail.css';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";

export default function PhoneDetail(props) {
  const details = Object.entries(props.details);

  return (
    <TableContainer>
      <Table size="small" aria-label="phone details">
        <TableBody>
          {details.map((detail, index) => (
            <TableRow key={index}>
              <TableCell align="right" className="PhoneDetail-attribute">{`${detail[0]}:`}</TableCell>
              <TableCell align="left">{detail[1]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
