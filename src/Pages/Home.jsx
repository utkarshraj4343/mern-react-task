// import './App.css';
import Accordion from "react-bootstrap/Accordion";
import { NavLink } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import data from "../Data";
function Home() {
  return (
    <div classNameName="Home">
      <header className="pb-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center text-dark text-decoration-none"
        >
          <span className="fs-4">Ethnus</span>
        </a>
      </header>

      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">MERN Tasks</h1>
          <p className="col-md-8 fs-4">
            Name -UtkarshRaj
            <br />
            Roll No. - 21BHI10080
            <br />
            Email - utkarsh_raj2021@vitbhopal.ac.in
          </p>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>React deployment links</Accordion.Header>
              <Accordion.Body>
                <ListGroup>
                  {data.map((task, index) => {
                    return (
                      <NavLink to={task.depLink} key={index}>
                        <ListGroup.Item action variant="info">
                          {`${task.srNo}-${task.name}`}
                        </ListGroup.Item>
                      </NavLink>
                    );
                  })}
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>React Repository links</Accordion.Header>
              <Accordion.Body>
                <ListGroup>
                  {data.map((task, index) => {
                    return (
                      <NavLink to={task.repoLink} key={index}>
                        <ListGroup.Item action variant="info">
                          {`${task.srNo}-${task.name}`}
                        </ListGroup.Item>
                      </NavLink>
                    );
                  })}
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>

            <footer className="pt-3 mt-4 text-muted border-top">
              &copy; 2023 Utkarsh Raj -
              utkarsh_raj2021@vitbhopal.ac.in            </footer>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Home;
