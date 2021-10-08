import { Route, Switch } from 'react-router-dom';
import styles from './NavigationBar.module.css';
import {
  Header,
  HeaderContainer,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
  HeaderSideNavItems,
  Modal,
  SideNav,
  SideNavItems,
  SkipToContent,
} from 'carbon-components-react';
import { Search20, Notification20, AppSwitcher20, Add16, Logout16 } from '@carbon/icons-react';
import { Dashboard } from '../Dashboard/dashboard';
import TimesheetUpload from '../Timesheets/timesheetUpload';
import { Report } from '../Reports/reports';
import { EmployeeRegistrationForm } from '../Employee/Registration/employee-registration.component';
import { Login } from '../Login/login';
import Employeeprofile from '../Employee/Profile/employee-profile';
import { EmployeeTrackingForm } from '../Employee/Tracking/employee-tracking.component';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { Register } from '../Register/register';
import { EmployeeTrackingInputProps } from '../Employee/Tracking/employee-tracking-types';
import ProtectedRoutes from '../ProtectedRoutes/ProtectedRoutes';

interface CallBackValuesProps {
  pfNumber: number;
  edit?: EmployeeTrackingInputProps;
}

const NavigationBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [sidebar, setSidebar] = useState<boolean>(true);
  const [callBackValues, setCallBackValues] = useState<CallBackValuesProps>();
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useHistory();
  const isAuthenticated = localStorage.getItem('token');

  const handleCallback = (data) => {
    setCallBackValues(data);
  };
  const onClickSideNavClosed = () => {
    if (sidebar == true) {
      setSidebar(false);
    } else {
      setSidebar(true);
    }
  };
  return (
    <div>
      <div>
        <HeaderContainer
          render={({ isSideNavExpanded, onClickSideNavExpand }) => (
            <>
              <Header aria-label="AmpathPlus" className={styles.navbar}>
                <SkipToContent />
                <HeaderMenuButton aria-label="Open menu" onClick={onClickSideNavClosed} isActive={isSideNavExpanded} />
                <HeaderName href="#" prefix="AMPATH">
                  PLUS
                </HeaderName>
                <HeaderNavigation aria-label="AMPATH">
                  <HeaderMenuItem href="/Home">Home</HeaderMenuItem>
                  <HeaderMenuItem onClick={() => setOpen(true)}>Timesheets</HeaderMenuItem>
                  <HeaderMenuItem href="/Reports">Reports</HeaderMenuItem>
                </HeaderNavigation>
                <HeaderGlobalBar>
                  <HeaderGlobalAction
                    id="logout"
                    aria-label="Log Out"
                    onClick={() => {
                      localStorage.clear();
                      history.push('/');
                    }}
                  >
                    <Logout16 />
                  </HeaderGlobalAction>
                </HeaderGlobalBar>
              </Header>
            </>
          )}
        />
      </div>
      <div>
        <Switch>
          <ProtectedRoutes path="/Home" component={Dashboard} isAuthenticated={!!isAuthenticated} />
          <ProtectedRoutes path="/RegisterUser" component={Register} isAuthenticated={!!isAuthenticated} />
          <ProtectedRoutes path="/Reports" component={Report} isAuthenticated={!!isAuthenticated} />
          <ProtectedRoutes
            path="/EmployeeRegistration"
            component={EmployeeRegistrationForm}
            isAuthenticated={isAuthenticated}
          />
          {/* <Route exact path="/">
            <Login />
          </Route> */}
          <ProtectedRoutes
            path="/EmployeeProfile/:pfNumber"
            isAuthenticated={isAuthenticated}
            component={() => <Employeeprofile parentCallback={handleCallback} />}
          />
          <ProtectedRoutes
            path="/AddEmployeeTracking"
            component={EmployeeTrackingForm}
            isAuthenticated={isAuthenticated}
          >
            <EmployeeTrackingForm pfNumber={callBackValues?.pfNumber} edit={callBackValues?.edit} />
          </ProtectedRoutes>
        </Switch>
      </div>
      <Modal
        modalHeading="Upload Timesheet"
        open={!!isAuthenticated && open}
        preventCloseOnClickOutside
        passiveModal
        onRequestClose={() => {
          setOpen(false);
        }}
        // style={{ textAlign: 'center' }}
      >
        <TimesheetUpload />
      </Modal>
    </div>
  );
};
export default NavigationBar;
