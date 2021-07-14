class GroupMember {
    memberName: string;
    memberImg: string;
    memberId: string = "MMBR" + Math.random().toString(16).slice(2);

    constructor(memberName: string,memberImg: string) {
        this.memberName = memberName;
        this.memberImg = memberImg;
    }
}

class MembersPool {
    membersPool: Array<GroupMember>;

    constructor (membersPool: Array<GroupMember>) {
        this.membersPool = membersPool;
    }

    addMember(memberToAdd: GroupMember) {
        try {
            this.membersPool.push(memberToAdd);
        } catch (er) {
            console.error(er);
        }
    }

    deleteMember(memberId:string){
        try {
            const existingMember = this.membersPool.filter(member => member.memberId === memberId);
            const memberToDeleteIndex: number = this.membersPool.findIndex(member => member.memberId === memberId);
            this.membersPool.splice(memberToDeleteIndex,1);
            this.renderMembers();
        
        } catch (er) {
            console.error(er);
          }
    }

    randomizeToGroups(membersPerGroup: number) {
        try {
            const randomizedMembers: Array<GroupMember> = this.membersPool;
            let currentIndex: number = randomizedMembers.length;
            let randomIndex: number;

            while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                [randomizedMembers[currentIndex], randomizedMembers[randomIndex]] = [randomizedMembers[randomIndex], randomizedMembers[currentIndex]];
            }

            let splitedMembers: Array<Array<GroupMember>> = randomizedMembers.reduce((splitedGroup, item, index: number) => {
                const chunkIndex = Math.floor(index/membersPerGroup)
              
                if(!splitedGroup[chunkIndex]) {
                    splitedGroup[chunkIndex] = [];
                }
              
                splitedGroup[chunkIndex].push(item);
              
                return splitedGroup;
              }, []);
              return splitedMembers;
              
        } catch (er) {
            console.error(er);
        }

    }
    
    renderMembers() {
        try {
            this.membersPool.sort((a: GroupMember, b: GroupMember) => {
                const aName = a.memberName;
                const bName = b.memberName;
                if (aName < bName) {return -1;}
                if (aName > bName) {return 1;}
                return 0;
            });
            const membersContainer: HTMLElement = document.querySelector(".members");
            membersContainer.innerHTML = `<h3 class="member__item member__item--title">All Members</h3>`;
                this.membersPool.forEach((member) => {
                const memberHTML: string = `
                <div class="members__item member" id="${member.memberId}">
                    <img class="member__item member__item--img" src="${member.memberImg}">
                    <h3 class="member__item member__item--name">${member.memberName}</h3>
                    <i class="member__item member__item--delete fas fa-trash"></i>
                </div>`;
                membersContainer.insertAdjacentHTML('beforeend',memberHTML);
            });
          } catch (er) {
            console.error(er);
          }
    }
}

const membersPool: MembersPool = localStorage.getItem('membersPool') ? new MembersPool(JSON.parse(localStorage.getItem('membersPool')).membersPool) : new MembersPool([]);


class RandomGroups {
    randomGroups: Array<Array<GroupMember>>;

    constructor (randomGroups: Array<Array<GroupMember>>) {
        this.randomGroups = randomGroups;
    }
}

const readURL = (input: any) => {
    try {
        if (input.files && input.files[0]) {
            let reader = new FileReader();
            reader.onload = (e)=> {
                const label: HTMLElement = document.querySelector('#add_photo');
                label.setAttribute('alt',`${e.target.result}`);
                label.style.backgroundImage = `url("${e.target.result}")`;
                label.style.backgroundSize = '100% 100%';
                label.innerText = '';
                label.style.padding = '75px';
                return e.target.result
        }
        reader.readAsDataURL(input.files[0]);
        }
    } catch (er) {
        console.error(er);
      }
}