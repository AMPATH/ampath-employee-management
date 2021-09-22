import React, { useMemo, useState } from 'react';
import {
  DataTable,
  TableContainer,
  Table,
  TableToolbar,
  TableToolbarContent,
  TableToolbarSearch,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from 'carbon-components-react';
import { Pagination } from 'carbon-components-react';
import { DataTableSkeleton } from 'carbon-components-react';
import { Button } from 'carbon-components-react';
import { Employee, getAllEmployees } from './employee.resource';
import dayjs from 'dayjs';

const EmployeeList: React.FC = () => {
  const [firstRowIndex, setFirstRowIndex] = React.useState(0);
  const [currentPageSize, setCurrentPageSize] = React.useState(5);
  const [employees, setEmployees] = React.useState<Array<Employee>>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const tableHeaders = useMemo(
    () => [
      { key: 'id', header: 'ID' },
      { key: 'pfNumber', header: 'PF Number' },
      { key: 'name', header: 'Name' },
      { key: 'dob', header: 'D.O.B' },
      { key: 'gender', header: 'Gender' },
      { key: 'telephone', header: 'Phone Number' },
      { key: 'email', header: 'Email' },
      { key: 'kraPin', header: 'KRA Pin' },
      { key: 'nssf', header: 'NSSF' },
      { key: 'nhif', header: 'NHIF' },
    ],
    [],
  );

  useMemo(() => {
    getAllEmployees().then((res) => {
      const results = res.map((employee: any) => {
        return {
          ...employee,
          id: employee.id,
          name: `${employee.firstName} ${employee.lastName}`,
          idNumber: employee.idNumber,
          dob: dayjs(employee.dob).format('YYYY-MM-DD'),
          age: employee.age,
          telephone: employee.telephone,
          email: employee.email,
          gender: employee.gender,
          kraPin: employee.kraPin,
          nssf: employee.nssf,
          nhif: employee.nhif,
          pfNumber: employee.pfNumber,
          salutation: employee.salutation,
        };
      });
      setEmployees(results);
    });
  }, []);

  const getRowItems = (rows: Array<Employee>) => {
    return rows.slice(firstRowIndex, firstRowIndex + currentPageSize).map((row: any) => ({ ...row }));
  };
  const rows = getRowItems(employees);

  const handleSearch = (e: any) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      {employees.length > 0 ? (
        <DataTable rows={rows} headers={tableHeaders}>
          {({ rows, headers, getHeaderProps, getTableProps }) => (
            <TableContainer title="Employees List" style={{ marginTop: '3rem' }}>
              <TableToolbar>
                <TableToolbarContent>
                  <TableToolbarSearch persistent={true} onChange={handleSearch} />
                  <Button kind="secondary">Create New Employee</Button>
                </TableToolbarContent>
              </TableToolbar>
              <Table {...getTableProps()}>
                <TableHead>
                  <TableRow>
                    {headers.map((header: any) => (
                      <TableHeader {...getHeaderProps({ header })}>{header.header}</TableHeader>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row: any) => (
                    <TableRow key={row.id}>
                      {row.cells.map((cell: any) => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Pagination
                totalItems={employees.length}
                backwardText="Previous page"
                forwardText="Next page"
                itemsPerPageText="Items per page:"
                pageNumberText="Page Number"
                pageSize={currentPageSize}
                pageSizes={[5, 10, 15, 20, 25]}
                onChange={({ page, pageSize }) => {
                  if (pageSize !== currentPageSize) {
                    setCurrentPageSize(pageSize);
                  }
                  setFirstRowIndex(pageSize * (page - 1));
                }}
              />
            </TableContainer>
          )}
        </DataTable>
      ) : (
        <DataTableSkeleton role="progressbar" />
      )}
    </>
  );
};
export default EmployeeList;
