import { observable } from 'mobx';
import axios from './../axios/index'

export const resourceStore = observable({
    data: []
})

resourceStore.getDataRes = function getData() {
    axios.get("/recommend/resource")
        .then(function (response) {
            console.log(response);
            resourceStore.data = response
        })
        .catch(function (error) {
            console.log(error);
        });
}