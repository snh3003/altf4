import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export const NavBar = () => {
	return (
		<div>
			<Navbar expand="lg" bg="primary" variant="dark" >
				<Navbar.Brand href="#">
				<img alt=""
					src="https://img.icons8.com/color/48/000000/health-book.png"
					width='40px' height='40px'
				/>
				Serguro Medico
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					
					<Nav className="ml-auto">
						<Nav.Item>
						    <label>
						    	<Nav.Link href="/" className="NavLink">
									Home
								</Nav.Link>
						    </label>
													 
						</Nav.Item>
						<Nav.Item>
							<label>
						    	<Nav.Link href="/doctor" className="NavLink">
									Doctor
								</Nav.Link>
						    </label>						 
						</Nav.Item>
						<Nav.Item>
							<label>
						    	<Nav.Link href="/donate" className="NavLink">
									Donate
								</Nav.Link>
						    </label>					 
						</Nav.Item>
						<Nav.Item>
							<label>
						    	<Nav.Link href="/assigndoctor" className="NavLink">
									Patient List
								</Nav.Link>
						    </label>					 
						</Nav.Item>	
						<Nav.Item>
							<label>
						    	<Nav.Link href="/admin" className="NavLink">
									Admin
								</Nav.Link>
						    </label>					 
						</Nav.Item>						
					</Nav>
				</Navbar.Collapse>
			</Navbar>			
		</div>
	)
}