function remove(index) {

    remove = function() {
        return axios.delete("http://localhost:3000/users" + index);
    }

    return {
        remove: remove(index)
    }
}