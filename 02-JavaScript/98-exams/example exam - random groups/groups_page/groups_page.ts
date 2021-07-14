interface GroupMember {
    memberName: string;
    memberImg: string;
    memberId: string;
}

class RandomGroups {
    randomGroups: Array<Array<GroupMember>>;

    constructor (randomGroups: Array<Array<GroupMember>>) {
        this.randomGroups = randomGroups;
    }

    renderGroups() {
        try {
            const groupsContainer: HTMLElement = document.querySelector(".groups");
            groupsContainer.innerHTML = ``;
            let i = 0;
            this.randomGroups.forEach((group) => {
                i++;
                let groupHTML: string = `<div class="groups__item group" id="group_${i}">`;
                group.forEach(member => {
                    const memberHTML: string = `
                    <div class="group__item member">
                        <img class="member__item member__item--img" src="${member.memberImg}">
                        <h3 class="member__item member__item--name">${member.memberName}</h3>
                    </div>`;
                    groupHTML += memberHTML;
                });
                groupHTML += `</div>`;
                groupsContainer.insertAdjacentHTML('beforeend',groupHTML);
            });
          } catch (er) {
            console.error(er);
          }
    }
}

const randomGroups: RandomGroups = new RandomGroups(JSON.parse(localStorage.getItem('randomGroups')).randomGroups);