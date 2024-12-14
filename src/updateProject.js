import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const UpdateProject = () => {
  const [p, setP] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    startDate: "",
    type: "",
    department: "",
  });
  const { id } = useParams();
  useEffect(() => {
    // axios
    //   .get(`http://localhost:9999/project/${id}`)
    //   .then((response) => {
    //     const data = response.data;
    //     setP(data);
    //     setFormData({
    //       name: data.name,
    //       description: data.description,
    //       startDate: data.startDate,
    //       type: data.type,
    //       department: data.department._id,
    //     });
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching projects:", error);
    //   });
    const data = {
      _id: "675cef66bd8e5e833c8a2712",
      name: "Project E",
      description: "dasda",
      startDate: "2024-12-09",
      type: "Software",
      department: {
        _id: "660f8e8c8b56a8c3333c2222",
        name: "Human Resources",
        createdAt: "2024-04-01T00:00:00.000Z",
        updatedAt: "2024-04-02T00:00:00.000Z",
      },
      createdAt: "2024-12-14T02:37:26.926Z",
      updatedAt: "2024-12-14T02:37:26.926Z",
      __v: 0,
    };
    setP(data);
    setFormData({
      name: data.name,
      description: data.description,
      startDate: data.startDate,
      type: data.type,
      department: data.department._id,
    });
  }, []);

  const [errors, setErrors] = useState({});
  const [department, setDepartment] = useState([]);
  useEffect(() => {
    // axios
    //   .get("http://localhost:9999/departments")
    //   .then((response) => {
    //     const data = Array.isArray(response.data) ? response.data : [];
    //     setDepartment(data);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching projects:", error);
    //   });
    const data = [
      {
        _id: "660f8e8c8b56a8c3333a2222",
        name: "Engineering",
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-02T00:00:00.000Z",
      },
      {
        _id: "660f8e8c8b56a8c3333b2222",
        name: "Marketing",
        createdAt: "2024-02-01T00:00:00.000Z",
        updatedAt: "2024-02-02T00:00:00.000Z",
      },
      {
        _id: "660f8e8c8b56a8c3333c2222",
        name: "Human Resources",
        createdAt: "2024-04-01T00:00:00.000Z",
        updatedAt: "2024-04-02T00:00:00.000Z",
      },
    ];
    setDepartment(data);
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Project name is required";
    if (!formData.description)
      newErrors.description = "Description is required";
    if (!formData.startDate) newErrors.startDate = "Start date is required";
    if (!formData.type) newErrors.type = "Type is required";
    if (!formData.department) newErrors.department = "Department is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // axios
      //   .put(`http://localhost:9999/project/${id}`, formData)
      //   .catch((error) => {
      //     console.error("Error submitting form:", error);
      //   });
      // alert("Form submitted successfully", formData);
      setErrors({});
      // Reset the form
      setFormData({
        name: "",
        description: "",
        startDate: "",
        type: "",
        department: "",
      });
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-center">Update Project</h2>
      <Link to="/" className="px-3 py-5">
        Home page
      </Link>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Project ID *</Form.Label>
          <Form.Control type="text" name="name" value={p._id} disabled={true} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formProjectName">
          <Form.Label>Project name *</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={formData.description}
            onChange={handleChange}
            isInvalid={!!errors.description}
          />
          <Form.Control.Feedback type="invalid">
            {errors.description}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formStartDate">
          <Form.Label>Start date</Form.Label>
          <Form.Control
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            isInvalid={!!errors.startDate}
          />
          <Form.Control.Feedback type="invalid">
            {errors.startDate}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formType">
          <Form.Label>Type</Form.Label>
          <Form.Control
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            isInvalid={!!errors.type}
          />
          <Form.Control.Feedback type="invalid">
            {errors.type}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDepartment">
          <Form.Label>Department</Form.Label>
          <Form.Control
            as="select"
            name="department"
            value={formData.department}
            onChange={handleChange}
            isInvalid={!!errors.department}
          >
            <option value="">Select department</option>
            {department.map((department) => (
              <option key={department._id} value={department._id}>
                {department.name}
              </option>
            ))}
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            {errors.department}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDepartment">
          <Form.Label>Department</Form.Label>
          {department.map((department) => (
            <div>
              <Form.Check
                type="radio"
                name="department"
                id={department._id}
                label={department.name}
                value={department._id}
                checked={formData.department === department._id}
                onChange={handleChange}
              />
            </div>
          ))}
        </Form.Group>

        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </Container>
  );
};

export default UpdateProject;
