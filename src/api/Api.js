/* eslint-disable no-underscore-dangle */
/* eslint-disable no-extend-native */
/* eslint-disable class-methods-use-this */
import axios from 'axios';

const __SERVER__ = window.location.origin;

// Api class to get data from odoo
export default class CBMGraphApi {
  async getTasksCount() {
    const options = {
      method: 'GET',
      headers: { 'content-type': 'application/json', 'Accept-Language': '*' },
      params: JSON.stringify({}),
      url: `${__SERVER__}/missions/tasks_count`,
    };
    const res = await axios(options);
    return res.data;
  }

  async getTableTasksDrainage() {
    const options = {
      method: 'GET',
      headers: { 'content-type': 'application/json', 'Accept-Language': '*' },
      params: JSON.stringify({}),
      url: `${__SERVER__}/missions/table/tasks_drainage`,
    };
    const res = await axios(options);
    return res.data;
  }

  async getTableTasksQuickDiagnosis() {
    const options = {
      method: 'GET',
      headers: { 'content-type': 'application/json', 'Accept-Language': '*' },
      params: JSON.stringify({}),
      url: `${__SERVER__}/missions/table/tasks_quick_diagnosis`,
    };
    const res = await axios(options);
    return res.data;
  }

  async getGraphTasksDrainage() {
    const options = {
      method: 'GET',
      headers: { 'content-type': 'application/json', 'Accept-Language': '*' },
      params: JSON.stringify({}),
      url: `${__SERVER__}/missions/graph/tasks_drainage`,
    };
    const res = await axios(options);
    return res.data;
  }

  async getGraphTasksQuickDiagnosis() {
    const options = {
      method: 'GET',
      headers: { 'content-type': 'application/json', 'Accept-Language': '*' },
      params: JSON.stringify({}),
      url: `${__SERVER__}/missions/graph/tasks_quick_diagnosis`,
    };
    const res = await axios(options);
    return res.data;
  }
}
