//This function convert the data of a table in HTML to a format XLS for Excel
function exportTableToExcel(tableID, filename = 'Students Table') {
    try {
        let downloadLink: any;
        let dataType: string = 'application/vnd.ms-excel';
        let tableSelect: HTMLElement = document.getElementById(tableID);
        let tableHTML: string = tableSelect.outerHTML.replace(/ /g, '%20');

        // Specify file name
        filename = filename ? filename + '.xls' : 'excel_data.xls';

        // Create download link element
        downloadLink = document.createElement("a");

        document.body.appendChild(downloadLink);

        if (navigator.msSaveOrOpenBlob) {
            var blob = new Blob(['ufeff', tableHTML], {
                type: dataType
            });
            navigator.msSaveOrOpenBlob(blob, filename);
        } else {
            // Create a link to the file
            downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

            // Setting the file name
            downloadLink.download = filename;

            //triggering the function
            downloadLink.click();
        };
    } catch (error) {
        console.error(error);
    };
};

