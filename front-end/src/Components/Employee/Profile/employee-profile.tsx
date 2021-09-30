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
import { useMemo, useState } from 'react';
import styles from './employee-profile.module.css';
import { getEmployeeProfile, getTimesheet } from './EmployeeProfileConnection';
import dayjs from 'dayjs';
const headerData = [
  {
    header: 'Month',
    key: 'month',
  },
  {
    header: 'Timesheet Link',
    key: 'timesheetLink',
  },
];

interface EmployeeDetails {
  firstName: string;
  middleName: string;
  lastName: string;
  idNumber: string;
  dob: string;
  age: number;
  telephone: string;
  email: string;
  gender: string;
  pfNumber: string;
  Project: string;
  Department: string;
  ProgramArea: string;
  Site: string;
}

const Employeeprofile = () => {
  const [timesheets, setTimesheet] = useState([]);
  const [employeeDetails, setEmployeeDetails] = useState<EmployeeDetails>();
  useMemo(() => {
    getTimesheet().then((res) => {
      const results = res.map((timesheet: any) => {
        return {
          id: `${timesheet.timesheetsId}`,
          pfNumber: timesheet.pfnumber,
          month: dayjs(timesheet.month).format('MMMM'),
          timesheetLink: <a href={timesheet.upload}>{timesheet.upload}</a>,
        };
      });
      setTimesheet(results);
    });
    getEmployeeProfile()
      .then((response) => {
        const result = response.map((resp) => {
          setEmployeeDetails(resp);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [getTimesheet]);

  return (
    <>
      <div className={styles.profileStyles}>
        <div>
          <div className={styles.profileItems}>
            <div className={styles.name}>
              Name:{employeeDetails?.firstName} {employeeDetails?.middleName} {employeeDetails?.lastName}
              <br />
              PF number:{employeeDetails?.pfNumber}
            </div>
            <DataTable rows={timesheets} headers={headerData}>
              {({ rows, headers, getHeaderProps, getTableProps }) => (
                <TableContainer title="EMPLOYEE PROFILE">
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
            <Button type="submit" className="bx--btn--secondary" onClick={getTimesheet}>
              Update Details
            </Button>
            <Button>Upload Timesheets</Button>
          </div>
          <div className={styles.bio}>
            <div>Age:{employeeDetails?.age}</div>
            <div>Gender:{employeeDetails?.gender}</div>
            <div>Email address:{employeeDetails?.email}</div>
            <div>Phone Number:{employeeDetails?.telephone}</div>
          </div>
          <div className={styles.contacts}>
            <div>Project:{employeeDetails?.Project}</div>
            <div>Department:{employeeDetails?.Department}</div>
            <div>Program Area:{employeeDetails?.ProgramArea}</div>
            <div>Site:{employeeDetails?.Site}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Employeeprofile;
