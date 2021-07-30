interface Beverage {
  name: string;
  img: string;
}

async function getInfo(): Promise<any> {
  const beverages: any = await getBeverages();
  renderData(beverages);
}

//redner to the DOM

getInfo();

function renderData(data: any): void {
  const root: HTMLElement = document.querySelector(".beverages");
  let html: string = "";
  data.data.forEach((item) => {
    html += `<div class="beverages__item">
            <p id="${item.name}-name">${item.name}</p>
            <img id="${item.name}-img" src="${item.img}" style="width:100px;height:100px;" />
        </div>`;
  });

  root.insertAdjacentHTML("beforeend", html);
}
