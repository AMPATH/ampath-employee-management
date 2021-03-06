import React from 'react';
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
  DataTableRow,
  DataTableHeader,
  Pagination,
  DataTableSkeleton,
  Select,
  SelectItem,
  TextInput,
  Button,
  Modal,
} from 'carbon-components-react';
import { getBudgets, getCounties } from '../../commonResources/common.resource';
import { useEffect, useMemo, useState } from 'react';
import styles from './dimensions.module.scss';
import { getUser, updateRole } from './dimensions.resource';
import { Link, useHistory } from 'react-router-dom';
import { Formik, Form, FormikHelpers } from 'formik';
import { userInputProps, userValues } from './dimensions.types';
import { userSchema } from './dimensions.validation';
import { Add24 } from '@carbon/icons-react';

const User: React.FC = () => {
  const [users, setUsers] = React.useState<Array<userInputProps>>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [firstRowIndex, setFirstRowIndex] = React.useState(0);
  const [currentPageSize, setCurrentPageSize] = React.useState(5);
  const [open, setOpen] = useState(false);
  const [textuser, setTextuser] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState<boolean>(false);
  const history = useHistory();

  const tableHeaders: Array<DataTableHeader> = useMemo(
    () => [
      { key: 'userName', header: 'User' },
      { key: 'role', header: 'Role' },
    ],
    [],
  );

  const roleOptions: Array<{ id: string; text: string }> = [
    {
      id: 'user',
      text: 'User',
    },
    {
      id: 'admin',
      text: 'Admin',
    },
    {
      id: 'hrManager',
      text: 'HR-Manager',
    },
  ];

  const handleSearch = (e: any) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  const fetchUsers = () => {
    getUser(searchTerm).then((res) => {
      const results = res.map((user: any) => {
        return {
          ...user,
          userName: user.userName,
          role: user.role,
        };
      });
      setUsers(results);
    });
  };

  const token = sessionStorage.getItem('token');
  useMemo(() => {
    fetchUsers();
  }, []);

  const filterField = (search: string, value: string) => value;
  const filteredUsers = users.filter((item) => {
    if (searchTerm === '') {
      return item;
    } else if (filterField(searchTerm, item.userName).toString().includes(searchTerm)) {
      return item;
    }
  });

  const handleRole = () => {
    let data;
    role
      ? (data = JSON.stringify({
          userName: textuser,
          role: role,
        }))
      : setError(true);

    updateRole(data).then((response) => {
      if (response) {
        setOpen(false);
        fetchUsers();
      }
    });
  };

  const handleRowClick = (value) => {
    setOpen(true);
    setTextuser(value);
  };

  const handleChange = (e) => {
    e.target.value ? [setRole(e.target.value), setError(false)] : [setRole(e.target.value), setError(true)];
  };

  const getRowItems = (rows: Array<DataTableRow>) => {
    return rows.slice(firstRowIndex, firstRowIndex + currentPageSize).map((row: any) => ({ ...row }));
  };
  const rows = getRowItems(filteredUsers);

  return (
    <>
      {users.length > 0 ? (
        <>
          <DataTable rows={rows} headers={tableHeaders} isSortable useZebraStyles>
            {({
              rows,
              headers,
              getHeaderProps,
              getTableProps,
            }: {
              rows: any;
              headers: any;
              getHeaderProps: any;
              getTableProps: any;
            }) => (
              <TableContainer title="User List" style={{ marginBottom: '1rem' }}>
                <TableToolbar>
                  <TableToolbarContent>
                    <TableToolbarSearch persistent={true} onChange={handleSearch} />
                    <Button
                      type="button"
                      kind="ghost"
                      className={styles.addUserBtn}
                      onClick={() => history.push('/RegisterUser')}
                    >
                      Add <Add24 aria-label="Add user" />
                    </Button>
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
                      <TableRow
                        key={row.id}
                        onClick={() => handleRowClick(row.cells[0].value)}
                        title="Update User Roles"
                        style={{ cursor: 'pointer' }}
                      >
                        {row.cells.map((cell: any) => (
                          <TableCell key={cell.id}>{cell.value}</TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <Pagination
                  totalItems={filteredUsers.length}
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
        </>
      ) : (
        <DataTableSkeleton role="progressbar" />
      )}

      <Modal
        open={open}
        modalHeading="Update User Role"
        passiveModal
        preventCloseOnClickOutside
        onRequestClose={() => {
          setOpen(false);
          setRole('');
        }}
      >
        <TextInput value={textuser} id="text-input-1" labelText="Current User" />
        <Select id="role" value={role} labelText="Role" onChange={handleChange}>
          <SelectItem value="" text="--Select role--" />
          {roleOptions.map((value) => (
            <SelectItem id={value.id} value={value.text} text={value.text} />
          ))}
        </Select>
        {error && <p style={{ color: 'tomato' }}>Select valid user role</p>}
        <Button kind="primary" onClick={handleRole} className={styles.btn}>
          Update Role
        </Button>
        <Button kind="secondary" onClick={() => setOpen(false)} className={styles.btn}>
          Cancel
        </Button>
      </Modal>
    </>
  );
};
export default User;
