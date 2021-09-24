import {
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  Button,
} from 'carbon-components-react';
import styles from './employee-profile.module.css';
// const headerData = [
//   {
//     header: 'Name',
//     key: 'name',
//   },
//   {
//     header: 'Protocol',
//     key: 'protocol',
//   },
//   {
//     header: 'Port',
//     key: 'port',
//   },
//   {
//     header: 'Rule',
//     key: 'rule',
//   },
//   {
//     header: 'Attached Groups',
//     key: 'attached_groups',
//   },
//   {
//     header: 'Status',
//     key: 'status',
//   },
// ];

// const rowData = [
//   {
//     attached_groups: 'Kevins VM Groups',
//     id: 'a',
//     name: 'Load Balancer 3',
//     port: 3000,
//     protocol: 'HTTP',
//     rule: 'Round robin',
//     status: 'Disabled',
//   },
//   {
//     attached_groups: 'Maureens VM Groups',
//     id: 'b',
//     name: 'Load Balancer 1',
//     port: 443,
//     protocol: 'HTTP',
//     rule: 'Round robin',
//     status: 'Starting',
//   },
//   {
//     attached_groups: 'Andrews VM Groups',
//     id: 'c',
//     name: 'Load Balancer 2',
//     port: 80,
//     protocol: 'HTTP',
//     rule: 'DNS delegation',
//     status: 'Active',
//   },
//   {
//     attached_groups: 'Marcs VM Groups',
//     id: 'd',
//     name: 'Load Balancer 6',
//     port: 3000,
//     protocol: 'HTTP',
//     rule: 'Round robin',
//     status: 'Disabled',
//   },
//   {
//     attached_groups: 'Mels VM Groups',
//     id: 'e',
//     name: 'Load Balancer 4',
//     port: 443,
//     protocol: 'HTTP',
//     rule: 'Round robin',
//     status: 'Starting',
//   },
//   {
//     attached_groups: 'Ronjas VM Groups',
//     id: 'f',
//     name: 'Load Balancer 5',
//     port: 80,
//     protocol: 'HTTP',
//     rule: 'DNS delegation',
//     status: 'Active',
//   },
// ];

const headerData = [
  {
    header: 'PF NO',
    key: 'pfNo',
  },
  {
    header: 'Month',
    key: 'month',
  },
  {
    header: 'Timesheet Link',
    key: 'timesheetLink',
  },
];

const rowData: any = [
  {
    pfNo: 'b',
    month: 'December',
    timesheetLink: '7771sheet',
  },
];
const Employeeprofile = () => {
  return (
    <>
      <div className={styles.profileStyles}>
        <div>
          <div className={styles.profileItems}>
            <DataTable rows={rowData} headers={headerData}>
              {({ rows, headers, getHeaderProps, getTableProps }) => (
                <TableContainer title="EMPLOYEE PROFILE">
                  <div className={styles.name}>Name:</div>
                  <Table {...getTableProps()}>
                    <TableHead>
                      <TableRow>
                        {headers.map((header) => (
                          <TableHeader {...getHeaderProps({ header })}>{header.header}</TableHeader>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.id}>
                          {row.cells.map((cell) => (
                            <TableCell key={cell.id}>{cell.value}</TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </DataTable>
          </div>
          <div className={styles.btn}>
            <Button className="bx--btn--secondary">Update Details</Button>
            <Button>Upload Timesheets</Button>
          </div>
          <div className={styles.bio}>
            <div>Age:</div>
            <div>Gender:</div>
            <div>Email address:</div>
            <div>Phone Number:</div>
          </div>
          <div className={styles.contacts}>
            <div>PF NO:</div>
            <div>Project:</div>
            <div>Department:</div>
            <div>Program Area:</div>
            <div>Site:</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Employeeprofile;
