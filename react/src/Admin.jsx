import { useEffect, useState } from "react";
import { API_URL } from "../utils";
import { useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";
import axios from "axios";

const Admin = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);

  useEffect(() => {
    if (isLoggedIn) {
      axios.get(`${API_URL}/feebackList`).then((res) => {
        console.log(res);
        setList(res.data.list);
      });
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className="mt-5 container">
      <h1>Feedback List</h1>
      <Table striped="columns" className="mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {list.map((each, idx) => {
            return (
              <tr key={each.email}>
                <td>{idx + 1}</td>
                <td>{each.name}</td>
                <td>{each.email}</td>
                <td>{each.company}</td>
                <td>{each.comments}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Admin;
