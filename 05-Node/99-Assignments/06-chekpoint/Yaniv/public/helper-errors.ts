window.axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    let title: string;
    let text: string = error.response.data.message;

    switch (error.response.status) {
        case 401:
            title = "Authorization Issue";
            break;
        case 403:
            title = "Permissions Issue";
            break;
        case 404:
            title = "Not Found";
            break;
        case 409:
            title = "Conflict";
            if (!text) text = error.response.data;
            break;    
        case 500:
            title = "Server Request Issue";
            text = error.response.data;
            break;
    }
    if (error.response.status) {
            swal({
                title: `Ops.. ${title}`,
                text,
                icon: "warning",
                button: "Try again",
            });
    } else {
        return Promise.reject(error);
    }
});