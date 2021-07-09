membersPool.renderMembers();

function addMemberSubmit(ev: any): void {
    try {
        ev.preventDefault();

        const memberName: string = ev.target.elements.memberName.value;
        const imgLabel: HTMLElement = document.querySelector('#add_photo');
        const memberImg: string = imgLabel.getAttribute('alt');

        const member: GroupMember = new GroupMember(memberName, memberImg);

        membersPool.addMember(member);
        localStorage.setItem('membersPool', JSON.stringify(membersPool));
        membersPool.renderMembers();

        ev.target.reset();
    } catch (er) {
        console.error(er);
    }
}

const existingMembersList: HTMLElement = document.querySelector('.members');

existingMembersList.addEventListener('click', ev => deleteMember(ev));

const deleteMember = (ev: any): void => {
    try {
        if (ev.target.className !== 'member__item member__item--delete fas fa-trash') return;
        
        const memberToDelete = ev.target.parentElement;
        
        const memberId: string = memberToDelete.id;
        membersPool.deleteMember(memberId);

        localStorage.setItem('membersPool', JSON.stringify(membersPool));
        membersPool.renderMembers();

    } catch (er) {
        console.error(er);
    }
}

function randomizeGroupsSubmit(ev: any): void {
    try {
        ev.preventDefault();

        const membersPerGroup: number = Number(ev.target.elements.membersPerGroup.value);
        if (membersPerGroup > membersPool.membersPool.length) throw new Error(`You can't split to more groups than the total members (which is ${membersPool.membersPool.length})!`);
        const splitedMembers: Array<Array<GroupMember>> = membersPool.randomizeToGroups(membersPerGroup);
        const randomGroups: RandomGroups = new RandomGroups(splitedMembers);
        localStorage.setItem('randomGroups', JSON.stringify(randomGroups));
        
        window.location.href = '../groups_page/groups_page.html';

        ev.target.reset();
    } catch (er) {
        console.error(er);
        window.alert(er);
    }
}