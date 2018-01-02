import { observable } from 'mobx';
import axios from './../axios/index'

export const personalized = observable({
    data: []
})

personalized.getDataRes = function getData() {
    axios.get("/personalized")
        .then(function (response) {
            // console.log(response);
            personalized.data = response.data.result;
            console.log(response.data.result);
        })
        .catch(function (error) {
            console.log(error);
        });
}