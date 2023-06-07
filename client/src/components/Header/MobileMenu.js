import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { logout } from "../../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";

import Sidebar from "./Sidebar";
import Roadmap from "./Roadmap";
import { StyledButton } from "../../styles/reusable/Button";

const Overlay = styled.div`
  background-color: var(--black);
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 100;
  animation-name: overlayFade;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;

  @keyframes overlayFade {
    from {
      opacity: 0%;
    }
    to {
      opacity: 50%;
    }
  }
`;

const Menu = styled.div`
  background-color: var(--offWhite);
  width: 72%;
  height: 100%;
  z-index: 150;
  padding: 1.5rem 1.5rem 0 1.5rem;
  position: fixed;
  animation-name: slideIn;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;

  @keyframes slideIn {
    from {
      right: -50%;
    }
    to {
      right: 0%;
    }
  }
`;

const Button = styled(StyledButton)`
  display: block;
  margin: 0 auto 1rem;
  max-width: 225px;
`;

const MobileMenu = ({ toggle }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value["name"]);

  return (
    <div>
      <Overlay onClick={() => toggle()} />
      <Menu>
        {user !== "Guest" ? (
          <Button
            onClick={() => dispatch(logout({ name: null, username: null }))}
          >
            Logout
          </Button>
        ) : (
          <div>
            <Button as={Link} to="/login">
              Login
            </Button>

            <Button as={Link} to="/signup">
              Sign Up
            </Button>
          </div>
        )}

        <Sidebar />
        <Roadmap />
      </Menu>
    </div>
  );
};

export default MobileMenu;
