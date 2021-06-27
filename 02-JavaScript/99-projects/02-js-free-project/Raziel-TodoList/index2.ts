
    const listFromIndex1 = JSON.parse(localStorage.getItem("taskList"));
    const listRoot: HTMLElement = document.querySelector("#root");
    function renderList(): void {
        try {
            let html: string = this.listFromIndex1.map(el => {
                return (
                    ` <li class="Test">${el.task}  ${el.date} </li>`
                )
            }).join('');
            if (!html) throw new Error('An error happens when you want to render the pets filtered!')
            listRoot.innerHTML = html;
        } catch (error) {
            console.error(error);
        }
    }

    renderList();

const dt = new Date();
        function renderDate() {
            dt.setDate(1);
            const day = dt.getDay();
            const today = new Date();
            const endDate = new Date(
                dt.getFullYear(),
                dt.getMonth() + 1,
                0
            ).getDate();

            const prevDate = new Date(
                dt.getFullYear(),
                dt.getMonth(),
                0
            ).getDate();
            const months = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ]
            document.querySelector("#month").innerHTML = months[dt.getMonth()];
            document.querySelector("#date_str").innerHTML = dt.toDateString();
            let cells = "";
            let tasks= "";
            for ( let x = day; x > 0; x--) {
                cells += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
            }
           
            for ( let i = 1; i <= endDate; i++) {
                if (i == today.getDate() && dt.getMonth() == today.getMonth()) cells += "<div class='today'>" + i + "</div>";
                else
                    cells += "<div>" + i + "</div>";
            }
            document.getElementsByClassName("days")[0].innerHTML = cells;
         
                for(let i=1; i<=endDate;i++){
                    if(2==2){
                        tasks+=`<div> heydddddd</div>`
                    }
                }
             document.querySelector('#daysTask').innerHTML=tasks;
        }

        function moveDate(para) {
            if(para == "prev") {
                dt.setMonth(dt.getMonth() - 1);
            } else if(para == 'next') {
                dt.setMonth(dt.getMonth() + 1);
            }
            renderDate();
        }

