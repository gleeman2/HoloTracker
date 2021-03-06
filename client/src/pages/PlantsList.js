/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5e7c773a06e8563f322999e8
*
* You will get 10% discount for each one of your friends
* 
*/
// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DialogDelete from "../components/DialogDelete";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import Button from "@material-ui/core/Button";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";

// Table
import EnhancedTable from "../components/EnhancedTable";

// Custom Actions


// START IMPORT ACTIONS
import PlantsActions from "../redux/actions/PlantsActions";

// END IMPORT ACTIONS

/** APIs

* actionsPlants.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsPlants.list
*	@description CRUD ACTION list
*

**/


class PlantsList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsPlants.loadPlantsList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsPlants.deletePlants(this.state.idDelete).then(data => {
      this.props.actionsPlants.loadPlantsList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "BarCode",
        type: "string",
        label: "BarCode"
      }, 
      {
        id: "Date",
        type: "date",
        label: "Date"
      }, 
      {
        id: "Farm",
        type: "string",
        label: "Farm"
      }, 
      {
        id: "SoulStatus",
        type: "string",
        label: "SoulStatus"
      }, 
      {
        id: "Temprature",
        type: "number",
        label: "Temprature"
      },
    ];
    const link = "/plantses/";

    return (
      <div>
        <h1>Plants List</h1>

        <EnhancedTable
          data={this.props.list}
          columns={columns}
          link={link}
          onDelete={this.delete.bind(this)}
        />

        <DialogDelete
          open={this.state.openDialogDelete}
          onClose={this.closeDialogDelete.bind(this)}
          onConfirm={this.confirmDialogDelete.bind(this)}
        />

        {/*
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">BarCode</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Farm</TableCell>
              <TableCell align="right">SoulStatus</TableCell>
              <TableCell align="right">Temprature</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/plantses/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.BarCode }</TableCell>
                <TableCell align="right">{ row.Date }</TableCell>
                <TableCell align="right">{ row.Farm }</TableCell>
                <TableCell align="right">{ row.SoulStatus }</TableCell>
                <TableCell align="right">{ row.Temprature }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/plantses/new">
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsPlants: bindActionCreators(PlantsActions, dispatch),
  };
};

// Validate types
PlantsList.propTypes = { 
  actionsPlants: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.PlantsListReducer.listPlants
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlantsList);
