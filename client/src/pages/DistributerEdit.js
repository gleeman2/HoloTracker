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
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Chip from "@material-ui/core/Chip";
import Input from "@material-ui/core/Input";

// Custom Actions


// START IMPORT ACTIONS
import DistributerActions from "../redux/actions/DistributerActions";
import FarmActions from "../redux/actions/FarmActions";
import ProductActions from "../redux/actions/ProductActions";

// END IMPORT ACTIONS

/** APIs

* actionsDistributer.create
*	@description CRUD ACTION create
*
* actionsDistributer.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsDistributer.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsFarm.findBy_Distributer
*	@description CRUD ACTION findBy_Distributer
*	@param Objectid key - Id of model to search for
*
* actionsFarm.list
*	@description CRUD ACTION list
*
* actionsProduct.list
*	@description CRUD ACTION list
*

**/

class DistributerEdit extends Component {
  // Init distributer
  constructor(props) {
    super(props);
    this.state = {
      distributer: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsDistributer.loadDistributer(this.props.match.params.id);
      this.props.actionsFarm.findBy_Distributer(this.props.match.params.id);
    }
    
    this.props.actionsFarm.loadFarmList();
    this.props.actionsProduct.loadProductList();
  }

  // Insert props distributer in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      distributer: props.distributer
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.distributer._id) {
      this.props.actionsDistributer.saveDistributer(this.state.distributer).then(data => {
        this.props.history.push("/distributers/");
      });
    } else {
      this.props.actionsDistributer.createDistributer(this.state.distributer).then(data => {
        this.props.history.push("/distributers/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Distributer Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="Address"
            label="Address"
            value={this.state.distributer.Address || ""}
            onChange={Utils.handleChange.bind(this, "distributer")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="CampName"
            label="CampName"
            value={this.state.distributer.CampName || ""}
            onChange={Utils.handleChange.bind(this, "distributer")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.distributer.CampName && this.state.distributer.CampName === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Owner"
            label="Owner"
            value={this.state.distributer.Owner || ""}
            onChange={Utils.handleChange.bind(this, "distributer")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="Status"
            label="Status"
            value={this.state.distributer.Status || ""}
            onChange={Utils.handleChange.bind(this, "distributer")}
            margin="normal"
            fullWidth
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation m:m _Farms with Farm */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel htmlFor="_Farms">_Farms</InputLabel>
            <Select
              multiple
              value={this.state.distributer._Farms || []}
              onChange={Utils.handleChangeSelect.bind(this, "distributer")}
              input={<Input id="_Farms" name="_Farms" />}
              renderValue={selected => (
                <div>
                  {selected.map(value => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
            >
              {this.props.listFarm && this.props.listFarm.map(item => (
                <MenuItem
                  key={item._id}
                  value={item._id}
                  style={{
                    fontWeight:
                      this.state.distributer._Farms &&
                      this.state.distributer._Farms.indexOf(item._id) === -1
                        ? "regular"
                        : "bold"
                  }}
                >
                  {item._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          {/* Relation m:m _Product with Product */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel htmlFor="_Product">_Product</InputLabel>
            <Select
              multiple
              value={this.state.distributer._Product || []}
              onChange={Utils.handleChangeSelect.bind(this, "distributer")}
              input={<Input id="_Product" name="_Product" />}
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
                      this.state.distributer._Product &&
                      this.state.distributer._Product.indexOf(item._id) === -1
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

          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/distributers/">Back to list</Link>

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
    actionsDistributer: bindActionCreators(DistributerActions, dispatch),
    actionsFarm: bindActionCreators(FarmActions, dispatch),
    actionsProduct: bindActionCreators(ProductActions, dispatch),
  };
};

// Validate types
DistributerEdit.propTypes = { 
  actionsDistributer: PropTypes.object.isRequired,
  actionsFarm: PropTypes.object.isRequired,
  actionsProduct: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    distributer: state.DistributerEditReducer.distributer,
    listFarm: state.DistributerEditReducer.listFarm,
    listProduct: state.DistributerEditReducer.listProduct,
    listFarm: state.DistributerEditReducer.listFarm
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DistributerEdit);
