import { Route, Switch } from 'react-router-dom';
import { action } from '@storybook/addon-actions';
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
  SideNav,
  SideNavItems,
  SkipToContent,
} from 'carbon-components-react';
import { Search20, Notification20, AppSwitcher20, Add16 } from '@carbon/icons-react';
const NavbarScroller = () => {
  return (
    <div>
      <div>
        <HeaderContainer
          render={({ isSideNavExpanded, onClickSideNavExpand }) => (
            <>
              <Header aria-label="AmpathPlus" className={styles.navbar}>
                <SkipToContent />
                <HeaderMenuButton aria-label="Open menu" onClick={onClickSideNavExpand} isActive={isSideNavExpanded} />
                <HeaderName href="#" prefix="AMPATH">
                  PLUS
                </HeaderName>
                <HeaderNavigation aria-label="AMPATH">
                  <HeaderMenuItem href="#">Home</HeaderMenuItem>
                  <HeaderMenuItem href="#">Timesheets</HeaderMenuItem>
                  <HeaderMenuItem href="#">Reports</HeaderMenuItem>
                  <HeaderMenuItem href="/EmployeeProfile">Log out</HeaderMenuItem>
                </HeaderNavigation>
                <HeaderGlobalBar>
                  <HeaderGlobalAction aria-label="Add " onClick={action('add click')}>
                    <Add16 />
                  </HeaderGlobalAction>
                  <HeaderGlobalAction aria-label="Search" onClick={action('search click')}>
                    <Search20 />
                  </HeaderGlobalAction>
                  <HeaderGlobalAction aria-label="Notifications" onClick={action('notification click')}>
                    <Notification20 />
                  </HeaderGlobalAction>
                  <HeaderGlobalAction
                    aria-label="App Switcher"
                    onClick={action('app-switcher click')}
                    tooltipAlignment="end"
                  >
                    <AppSwitcher20 />
                  </HeaderGlobalAction>
                </HeaderGlobalBar>
                <SideNav aria-label="Side navigation" expanded={isSideNavExpanded}>
                  <SideNavItems>
                    <HeaderSideNavItems hasDivider={true}>
                      <HeaderMenuItem href="#">Home</HeaderMenuItem>
                      <HeaderMenuItem href="#">Timesheets</HeaderMenuItem>
                      <HeaderMenuItem href="#">Reports</HeaderMenuItem>
                      <HeaderMenuItem href="#">Log out</HeaderMenuItem>
                    </HeaderSideNavItems>
                  </SideNavItems>
                </SideNav>
              </Header>
            </>
          )}
        />
      </div>
      <div>
        <Switch>
          <Route path="/Home"></Route>
          <Route path="/Timesheet"></Route>
          <Route path="/Reports"></Route>
          <Route path="/EmployeeProfile"></Route>
          <Route path="/Log out"></Route>
        </Switch>
      </div>
    </div>
  );
};
export default NavbarScroller;
