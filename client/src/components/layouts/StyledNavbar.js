import styled from 'styled-components';

const StyledNavbar = styled.div`
	/**************Navbar ******************/
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');

	.navbar, .footer {
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  padding: 0.7rem 2rem;
	  z-index: 1;
	  width: 100%;
	  color:var(--light-color);
	  background-color: var(--primary-color);
	  margin-bottom: 1rem;
	}
	.logo {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  font-family: 'Poppins', sans-serif;

	  	p {
		  font-size: 0.9rem;
		  margin-top:0.5rem;
		  color:#ccc
		}
	}

	// Design
	.logo {
		text-transform: uppercase;
		background-color: transparent;
		font-weight: bold;
		font-size: 12px;
		letter-spacing: 2px;
		outline: none;
		z-index: 1;
		border: 3px solid #fff;
		border-radius: 1px 20px;
	}

	.logo span {
	  color: rgb(255, 57, 22)
	}
	.navbar ul {
	  display: flex;
	 }
	 .navbar i, h1 {
	  padding: 0 1rem
	}
	li {
	  list-style: none;
	  padding: 0 1rem;
	  transition: all 0.3s ease 0s;
	}
	a {
	  text-decoration: none;
	  color:var(--light-color)
	}
	li i:hover ,a:hover{
	  opacity: 0.5;  
	  cursor: pointer;
	}
`;

export default StyledNavbar;