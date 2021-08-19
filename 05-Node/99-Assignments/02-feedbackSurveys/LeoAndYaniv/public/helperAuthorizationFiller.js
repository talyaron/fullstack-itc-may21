const url_string = window.location.href;
const url = new URL(url_string);
const uuid = url.searchParams.get("uuid");

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
            window.location.href = `./06- answer-login.html?${uuid}`;
        });
    } else {
        return Promise.reject(error);
    }
});