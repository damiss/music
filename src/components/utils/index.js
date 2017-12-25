class Storage {
    save(keys, obj) {
        for (const key of keys) {
            localStorage.setItem(key, JSON.stringify(obj[key]))
        }
    };

    get(key) {
        let obj = {};
        obj[key] = localStorage.getItem(key);
        var str = obj[key];
        return str.replace(/"/g,"");
    }
}

export default new Storage();