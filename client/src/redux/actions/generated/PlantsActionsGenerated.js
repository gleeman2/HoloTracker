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
/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE FUNCTIONS IN PlantsActionsGenerated.js PLEASE EDIT ../PlantsActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import PlantsApi from "../../../api/PlantsApi";

let actionsFunction = {

  //CRUD METHODS

  // Create plants
  createPlants: function(plants) {
    return function(dispatch) {
      return PlantsApi
        .createPlants(plants)
        .then(plants => {
          dispatch(actionsFunction.createPlantsSuccess(plants));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createPlantsSuccess: function(plants) {
    return { type: types.CREATE_PLANTS_SUCCESS, payload: plants };
  },


  // Delete plants
  deletePlants: function(id) {
    return function(dispatch) {
      return PlantsApi
        .deletePlants(id)
        .then(plants => {
          dispatch(actionsFunction.deletePlantsSuccess(plants));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deletePlantsSuccess: function(plants) {
    return { type: types.DELETE_PLANTS_SUCCESS, payload: plants };
  },


  // Find by _Farms
  findBy_Farms: function(key) {
    return function(dispatch) {
      return PlantsApi
        .findBy_Farms(key)
        .then(item => {
          dispatch(actionsFunction.findBy_FarmsSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findBy_FarmsSuccess: function(item) {
    return { type: types.FINDBY_FARMS_PLANTS_SUCCESS, payload: item };
  },


  // Find by _Products
  findBy_Products: function(key) {
    return function(dispatch) {
      return PlantsApi
        .findBy_Products(key)
        .then(item => {
          dispatch(actionsFunction.findBy_ProductsSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findBy_ProductsSuccess: function(item) {
    return { type: types.FINDBY_PRODUCTS_PLANTS_SUCCESS, payload: item };
  },


  // Get plants
  loadPlants: function(id) {
    return function(dispatch) {
      return PlantsApi
        .getOnePlants(id)
        .then(plants => {
          dispatch(actionsFunction.loadPlantsSuccess(plants));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadPlantsSuccess: function(plants) {
    return { type: types.GET_PLANTS_SUCCESS, payload: plants };
  },

  // Load  list
  loadPlantsList: function() {
    return function(dispatch) {
      return PlantsApi
        .getPlantsList()
        .then(list => {
          dispatch(actionsFunction.loadPlantsListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadPlantsListSuccess: function(list) {
    return { type: types.LIST_PLANTS_SUCCESS, payload: list };
  },

	
  // Save plants
  savePlants: function(plants) {
    return function(dispatch) {
      return PlantsApi
        .savePlants(plants)
        .then(plants => {
          dispatch(actionsFunction.savePlantsSuccess(plants));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  savePlantsSuccess: function(plants) {
    return { type: types.UPDATE_PLANTS_SUCCESS, payload: plants };
  },


};

export default actionsFunction;
