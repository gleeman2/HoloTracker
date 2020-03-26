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
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { DateTimePicker } from "material-ui-pickers";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Chip from "@material-ui/core/Chip";
import Input from "@material-ui/core/Input";

// Custom Actions


// START IMPORT ACTIONS
import PlantsActions from "../redux/actions/PlantsActions";
import FarmActions from "../redux/actions/FarmActions";
import ProductActions from "../redux/actions/ProductActions";
import EmployeesActions from "../redux/actions/EmployeesActions";

// END IMPORT ACTIONS

/** APIs

* actionsPlants.create
*	@description CRUD ACTION create
*
* actionsPlants.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsPlants.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsFarm.findBy_Plants
*	@description CRUD ACTION findBy_Plants
*	@param Objectid key - Id of model to search for
*
* actionsFarm.list
*	@description CRUD ACTION list
*
* actionsProduct.list
*	@description CRUD ACTION list
*
* actionsProduct.findBy_Plants
*	@description CRUD ACTION findBy_Plants
*	@param Objectid key - Id of model to search for
*
* actionsEmployees.findBy_Plants
*	@description CRUD ACTION findBy_Plants
*	@param Objectid key - Id of model to search for
*

**/

class PlantsEdit extends Component {
  // Init plants
  constructor(props) {
    super(props);
    this.state = {
      plants: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsPlants.loadPlants(this.props.match.params.id);
      this.props.actionsFarm.findBy_Plants(this.props.match.params.id);
      this.props.actionsEmployees.findBy_Plants(this.props.match.params.id);
      this.props.actionsProduct.findBy_Plants(this.props.match.params.id);
    }
    
    this.props.actionsFarm.loadFarmList();
    this.props.actionsProduct.loadProductList();
  }

  // Insert props plants in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      plants: props.plants
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.plants._id) {
      this.props.actionsPlants.savePlants(this.state.plants).then(data => {
        this.props.history.push("/plantses/");
      });
    } else {
      this.props.actionsPlants.createPlants(this.state.plants).then(data => {
        this.props.history.push("/plantses/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Plants Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="BarCode"
            label="BarCode"
            value={this.state.plants.BarCode || ""}
            onChange={Utils.handleChange.bind(this, "plants")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.plants.BarCode && this.state.plants.BarCode === ""
              ? { error: true }
              : {})}
          />
          
          <DateTimePicker
            id="Date"
            label="Date"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.plants.Date
                ? new Date(this.state.plants.Date)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "plants", "Date")}
            fullWidth
            autoOk
            disableFuture
            required
            {...(!this.state.plants.Date && this.state.plants.Date === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Farm"
            label="Farm"
            value={this.state.plants.Farm || ""}
            onChange={Utils.handleChange.bind(this, "plants")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="SoulStatus"
            label="SoulStatus"
            value={this.state.plants.SoulStatus || ""}
            onChange={Utils.handleChange.bind(this, "plants")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="Temprature"
            label="Temprature"
            value={this.state.plants.Temprature || ""}
            onChange={Utils.handleChange.bind(this, "plants")}
            type="number"
            margin="normal"
            fullWidth
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation 1:m _Farms with Farm */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="_Farms">
              _Farms
            </InputLabel>
            <Select
              value={this.state.plants._Farms || ""}
              onChange={Utils.handleChangeSelect.bind(this, "plants")}
              inputProps={{
                id: "_Farms",
                name: "_Farms"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listFarm && this.props.listFarm.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Relation m:m _Products with Product */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel htmlFor="_Products">_Products</InputLabel>
            <Select
              multiple
              value={this.state.plants._Products || []}
              onChange={Utils.handleChangeSelect.bind(this, "plants")}
              input={<Input id="_Products" name="_Products" />}
              renderValue={selected => (
                <div>
                  {selected.map(value => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
            >
              {this.props.listProduct && this.props.listProduct.map(item => (
                <MenuItem
                  key={item._id}
                  value={item._id}
                  style={{
                    fontWeight:
                      this.state.plants._Products &&
                      this.state.plants._Products.indexOf(item._id) === -1
                        ? "regular"
                        : "bold"
                  }}
                >
                  {item._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          {/* EXTERNAL RELATIONS */}
          
          {/* External relation with Farm */}
          
          <h3>Farm</h3>
          {(!this.props.listFarm || this.props.listFarm.length === 0) && 
            <div>No Farm associated</div>
          }
          {this.props.listFarm &&
            this.props.listFarm.map((item, i) => {
              return (
                <Link to={"/farms/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* External relation with Employees */}
          
          <h3>Employees</h3>
          {(!this.props.listEmployees || this.props.listEmployees.length === 0) && 
            <div>No Employees associated</div>
          }
          {this.props.listEmployees &&
            this.props.listEmployees.map((item, i) => {
              return (
                <Link to={"/employeess/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* External relation with Product */}
          
          <h3>Product</h3>
          {(!this.props.listProduct || this.props.listProduct.length === 0) && 
            <div>No Product associated</div>
          }
          {this.props.listProduct &&
            this.props.listProduct.map((item, i) => {
              return (
                <Link to={"/products/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/plantses/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsPlants: bindActionCreators(PlantsActions, dispatch),
    actionsFarm: bindActionCreators(FarmActions, dispatch),
    actionsProduct: bindActionCreators(ProductActions, dispatch),
    actionsEmployees: bindActionCreators(EmployeesActions, dispatch),
  };
};

// Validate types
PlantsEdit.propTypes = { 
  actionsPlants: PropTypes.object.isRequired,
  actionsFarm: PropTypes.object.isRequired,
  actionsProduct: PropTypes.object.isRequired,
  actionsEmployees: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    plants: state.PlantsEditReducer.plants,
    listFarm: state.PlantsEditReducer.listFarm,
    listProduct: state.PlantsEditReducer.listProduct,
    listFarm: state.PlantsEditReducer.listFarm,
    listEmployees: state.PlantsEditReducer.listEmployees,
    listProduct: state.PlantsEditReducer.listProduct
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlantsEdit);