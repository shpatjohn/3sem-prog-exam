import React, { useEffect } from 'react';
import AddDirector from './AddDirector';
import DeleteDirector from './DeleteDirector';
import { Route } from 'react-router-dom';
import Col from 'react-bootstrap/Col';


const AdminDirectors = (props) => {

  return (

    <Col style={{ flexDirection: "column" }} md="7">
      <div className="default-box">
        <div className="box-header">Director administration</div>


        <Route exact path="/admin/directors/add">
          <AddDirector facade={props.facade} allDirectors={props.allDirectors} />
        </Route>
        <Route exact path="/admin/directors/delete">
          <DeleteDirector facade={props.facade} allDirectors={props.allDirectors} />
        </Route>

      </div>
    </Col>
  );
}
export default AdminDirectors;