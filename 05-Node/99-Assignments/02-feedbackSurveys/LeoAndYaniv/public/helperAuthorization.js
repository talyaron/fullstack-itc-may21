window.axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    console.log(error.response);
    if (401 === error.response.status) {
        swal({
            title: "Authorization Issue",
            text: error.response.data.message,
            icon: "warning",
            closeModal: false
        }).then(() => {
            window.location.href = './02- login.html';
        });
    } else {
        return Promise.reject(error);
    }
});