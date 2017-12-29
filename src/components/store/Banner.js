import { observable } from 'mobx';
import axios from './../axios/index'

export const bannerStore = observable({
    bannerImgs: []
})

bannerStore.getDataBanner = function getData() {
    axios.get("/banner")
        .then(function (response) {
            console.log(response);
            bannerStore.bannerImgs = response.data.banners
        })
        .catch(function (error) {
            console.log(error);
        });
}
