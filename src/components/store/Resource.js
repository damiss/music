import { observable } from 'mobx';
import axios from './../axios/index'

export const resourceStore = observable({
    data: []
})

resourceStore.getDataRes = function getData() {
    axios.get("/top/playlist/highquality?limit=30")
        .then(function (response) {
            console.log(response);
            resourceStore.data = response.data.playlists
        })
        .catch(function (error) {
            console.log(error);
        });
}