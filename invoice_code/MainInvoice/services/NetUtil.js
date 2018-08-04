'use strict';
import React, { Component } from 'react';
// import Immutable from 'im'
import { Alert } from 'react-native';

class NetUitl extends Component {
    constructor(props) {
        super(props);

    }

    static postJson(url, data, callback) {
        var fetchOptions = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            //body:JSON.stringify(data),
            body: data
        };
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((responseText) => {

                console.log(responseText);
                //callback(JSON.parse(responseText))
                callback(responseText)
            }).catch((error) => {
                console.error("error:", error);
            }).done();
    }

    static async postJsonWithoutCallback(url, data) {
        var fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: data
        };
        return await fetch(url, fetchOptions)
            .then((response) => {
                if (response.ok) {
                    console.log("response", response);
                    return response.json();
                }
            }).then((Json) => {
                console.log("myJson", Json);
                return Json;
            })
            .catch((error) => {
                console.error(error);
                return "error";
            });
    }

    static async get(url,callback) {
        var fetchOptions = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
        await fetch(url, fetchOptions)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((result) => {
                console.log("result-->",result);
                callback(result);
            }).done();
    }

    static async getWithParam(url, params) {
        let formData = new FormData();
        if (params.length > 1) {
            for (let i = 0; i < params.length; i++) {
                formData.append(params[i].key, params[i].value);
            }
        }
        var fetchOptions = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: formData,
        };
        return await fetch(url, fetchOptions)
            .then((response) => response.json())
            .then((responseText) => {
                return JSON.parse(responseText);
            }).done();
    }

    static putJson(url, data, callback) {
        var fetchOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-LC-Id': 'M401fErHUPYhDKmgp0wjqVRX-gzGzoHsz',
                'X-LC-Key': 'Jqnvt1Lmt34vQh1JDRUpRAqq'
            },
            body: JSON.stringify(data)
        };
        fetch(url, fetchOptions)
            .then((response) => response.text())
            .then((responseText) => {
                callback(JSON.parse(responseText));
            }).done();
    }
}

export default NetUitl;