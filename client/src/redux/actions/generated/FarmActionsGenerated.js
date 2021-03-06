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
 *  TO CUSTOMIZE FUNCTIONS IN FarmActionsGenerated.js PLEASE EDIT ../FarmActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import FarmApi from "../../../api/FarmApi";

let actionsFunction = {

  //CRUD METHODS

  // Create farm
  createFarm: function(farm) {
    return function(dispatch) {
      return FarmApi
        .createFarm(farm)
        .then(farm => {
          dispatch(actionsFunction.createFarmSuccess(farm));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createFarmSuccess: function(farm) {
    return { type: types.CREATE_FARM_SUCCESS, payload: farm };
  },


  // Delete farm
  deleteFarm: function(id) {
    return function(dispatch) {
      return FarmApi
        .deleteFarm(id)
        .then(farm => {
          dispatch(actionsFunction.deleteFarmSuccess(farm));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteFarmSuccess: function(farm) {
    return { type: types.DELETE_FARM_SUCCESS, payload: farm };
  },


  // Find by _Distributer
  findBy_Distributer: function(key) {
    return function(dispatch) {
      return FarmApi
        .findBy_Distributer(key)
        .then(item => {
          dispatch(actionsFunction.findBy_DistributerSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findBy_DistributerSuccess: function(item) {
    return { type: types.FINDBY_DISTRIBUTER_FARM_SUCCESS, payload: item };
  },


  // Find by _Plants
  findBy_Plants: function(key) {
    return function(dispatch) {
      return FarmApi
        .findBy_Plants(key)
        .then(item => {
          dispatch(actionsFunction.findBy_PlantsSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findBy_PlantsSuccess: function(item) {
    return { type: types.FINDBY_PLANTS_FARM_SUCCESS, payload: item };
  },


  // Get farm
  loadFarm: function(id) {
    return function(dispatch) {
      return FarmApi
        .getOneFarm(id)
        .then(farm => {
          dispatch(actionsFunction.loadFarmSuccess(farm));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadFarmSuccess: function(farm) {
    return { type: types.GET_FARM_SUCCESS, payload: farm };
  },

  // Load  list
  loadFarmList: function() {
    return function(dispatch) {
      return FarmApi
        .getFarmList()
        .then(list => {
          dispatch(actionsFunction.loadFarmListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadFarmListSuccess: function(list) {
    return { type: types.LIST_FARM_SUCCESS, payload: list };
  },

	
  // Save farm
  saveFarm: function(farm) {
    return function(dispatch) {
      return FarmApi
        .saveFarm(farm)
        .then(farm => {
          dispatch(actionsFunction.saveFarmSuccess(farm));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveFarmSuccess: function(farm) {
    return { type: types.UPDATE_FARM_SUCCESS, payload: farm };
  },


};

export default actionsFunction;
