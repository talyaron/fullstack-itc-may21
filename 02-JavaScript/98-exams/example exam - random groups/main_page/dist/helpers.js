membersPool.renderMembers();
function addMemberSubmit(ev) {
    try {
        ev.preventDefault();
        var memberName = ev.target.elements.memberName.value;
        var imgLabel = document.querySelector('#add_photo');
        var memberImg = imgLabel.getAttribute('alt');
        var member = new GroupMember(memberName, memberImg);
        membersPool.addMember(member);
        localStorage.setItem('membersPool', JSON.stringify(membersPool));
        membersPool.renderMembers();
        ev.target.reset();
    }
    catch (er) {
        console.error(er);
    }
}
var existingMembersList = document.querySelector('.members');
existingMembersList.addEventListener('click', function (ev) { return deleteMember(ev); });
var deleteMember = function (ev) {
    try {
        if (ev.target.className !== 'member__item member__item--delete fas fa-trash')
            return;
        var memberToDelete = ev.target.parentElement;
        var memberId = memberToDelete.id;
        membersPool.deleteMember(memberId);
        localStorage.setItem('membersPool', JSON.stringify(membersPool));
        membersPool.renderMembers();
    }
    catch (er) {
        console.error(er);
    }
};
function randomizeGroupsSubmit(ev) {
    try {
        ev.preventDefault();
        var membersPerGroup = Number(ev.target.elements.membersPerGroup.value);
        if (membersPerGroup > membersPool.membersPool.length)
            throw new Error("You can't split to more groups than the total members (which is " + membersPool.membersPool.length + ")!");
        var splitedMembers = membersPool.randomizeToGroups(membersPerGroup);
        var randomGroups = new RandomGroups(splitedMembers);
        localStorage.setItem('randomGroups', JSON.stringify(randomGroups));
        window.location.href = '../groups_page/groups_page.html';
        ev.target.reset();
    }
    catch (er) {
        console.error(er);
        window.alert(er);
    }
}
