import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import AdminSidebar from './AdminSidebar';

const AdminHeader = () => {
  const { userInfo } = useSelector(state => state.auth);

  return (
    <Navbar
      bg='dark'
      variant='dark'
      expand='md'
      collapseOnSelect
      className='fixed-top'
    >
      <Container fluid>
        <LinkContainer to='/admin/dashboard'>
          <Navbar.Brand>Shopkart Admin Dashboard</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto m-2 '>
            <Nav.Link> {userInfo?.name}</Nav.Link>
            <div className='d-md-none '>
              <AdminSidebar />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AdminHeader;
