// import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  Modal,
  Form,
  Container,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const EmployeesList = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [employees, setEmployees] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState([]);
  const [depName, setDepName] = useState("");
  const { dept } = useParams();
  useEffect(() => {
    // axios
    //   .get(`http://localhost:9999/employees/${dept}`)
    //   .then((response) => {
    //     const data = Array.isArray(response.data) ? response.data : [];
    //     setEmployees(data);
    //     setFilter(data);
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching projects:", error);
    //     setEmployees([]);
    //     setFilter([]);
    //   });
    const data = [
      {
        _id: "650f8e8c8b56a8c3333a1111",
        name: "John Doe",
        dob: "1990-01-01",
        gender: "Male",
        position: "Engineer",
      },
      {
        _id: "650f8e8c8b56a8c3333c1111",
        name: "Alice Johnson",
        dob: "1988-06-15",
        gender: "Female",
        position: "Designer",
      },
      {
        _id: "650f8e8c8b56a8c3333d1111",
        name: "Robert Brown",
        dob: "1985-10-20",
        gender: "Male",
        position: "Senior Engineer",
      },
    ];
    setEmployees(data);
    setFilter(data);
  }, []);
  useEffect(() => {
    // axios
    //   .get(`http://localhost:9999/department/${dept}`)
    //   .then((response) => {
    //     const data = response.data;
    //     setDepName(data);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching projects:", error);
    //   });
    const data = {
      _id: "660f8e8c8b56a8c3333a2222",
      name: "Engineering",
      createdAt: "2024-01-01T00:00:00.000Z",
      updatedAt: "2024-01-02T00:00:00.000Z",
    };
    setDepName(data);
  }, []);
  useEffect(() => {
    const filtered = employees.filter((employees) =>
      employees.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilter(filtered);
  }, [searchTerm, employees]);
  const handleModalOpen = (type, course = null) => {
    setModalType(type);
    setSelectedCourse(course);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedCourse(null);
  };

  const handleSave = () => {
    // Logic for adding/updating/deleting courses
    setShowModal(false);
  };

  return (
    <Container>
      <Row className="my-3">
        <Col>
          <h2 className="text-center">List of Employees</h2>
        </Col>
      </Row>
      <Link to="/">Back to home</Link>
      <h3>Department: {depName.name}</h3>
      <Row className="mb-3">
        <Col md={9}>
          <Form.Control
            placeholder="Search by Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
        <Col md={3} className="text-end">
          <Button variant="primary" onClick={() => handleModalOpen("add")}>
            Add employee
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Employee name</th>
                <th>Date of birth</th>
                <th>Gender</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              {filter.length > 0 ? (
                filter.map((e) => (
                  <tr key={e._id}>
                    <td>{e._id}</td>
                    <td>{e.name}</td>
                    <td>{e.dob}</td>
                    <td>{e.gender}</td>
                    <td>{e.position}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">
                    No courses available
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Col>
        {/* <Col>
          <Card>
            <Row>
              <Col md={2}>
                <Card.Img
                  src="/images/ipa2.jpg"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    margin: "10px",
                  }}
                />
              </Col>
              <Col md={10}>
                <Card.Body>
                  <h3>hello</h3>
                  <p>hi</p>
                  <p>hi</p>
                  <p>hi</p>
                  <p>hi</p>
                  <p>hi</p>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col> */}
      </Row>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalType === "add"
              ? "Add Course"
              : modalType === "update"
              ? "Update Course"
              : "Delete Course"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalType === "delete" ? (
            <p>Are you sure you want to delete this course?</p>
          ) : (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Course Title</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={selectedCourse?.Title || ""}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={selectedCourse?.Description || ""}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Instructor ID</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={selectedCourse?.InstructorId || ""}
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            {modalType === "delete" ? "Confirm" : "Save"}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default EmployeesList;
