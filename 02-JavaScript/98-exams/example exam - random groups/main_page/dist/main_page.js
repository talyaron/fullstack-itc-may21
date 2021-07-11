var GroupMember = /** @class */ (function () {
    function GroupMember(memberName, memberImg) {
        this.memberId = "MMBR" + Math.random().toString(16).slice(2);
        this.memberName = memberName;
        this.memberImg = memberImg;
    }
    return GroupMember;
}());
var MembersPool = /** @class */ (function () {
    function MembersPool(membersPool) {
        this.membersPool = membersPool;
    }
    MembersPool.prototype.addMember = function (memberToAdd) {
        try {
            this.membersPool.push(memberToAdd);
        }
        catch (er) {
            console.error(er);
        }
    };
    MembersPool.prototype.deleteMember = function (memberId) {
        try {
            var memberToDeleteIndex = this.membersPool.findIndex(function (member) { return member.memberId === memberId; });
            this.membersPool.splice(memberToDeleteIndex, 1);
            this.renderMembers();
        }
        catch (er) {
            console.error(er);
        }
    };
    MembersPool.prototype.randomizeToGroups = function (membersPerGroup) {
        var _a;
        try {
            var randomizedMembers = this.membersPool;
            var currentIndex = randomizedMembers.length;
            var randomIndex = void 0;
            while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                _a = [randomizedMembers[randomIndex], randomizedMembers[currentIndex]], randomizedMembers[currentIndex] = _a[0], randomizedMembers[randomIndex] = _a[1];
            }
            var splitedMembers = randomizedMembers.reduce(function (splitedGroup, item, index) {
                var chunkIndex = Math.floor(index / membersPerGroup);
                if (!splitedGroup[chunkIndex]) {
                    splitedGroup[chunkIndex] = [];
                }
                splitedGroup[chunkIndex].push(item);
                return splitedGroup;
            }, []);
            return splitedMembers;
        }
        catch (er) {
            console.error(er);
        }
    };
    MembersPool.prototype.renderMembers = function () {
        try {
            this.membersPool.sort(function (a, b) {
                var aName = a.memberName;
                var bName = b.memberName;
                if (aName < bName) {
                    return -1;
                }
                if (aName > bName) {
                    return 1;
                }
                return 0;
            });
            var membersContainer_1 = document.querySelector(".members");
            membersContainer_1.innerHTML = "<h3 class=\"member__item member__item--title\">All Members</h3>";
            this.membersPool.forEach(function (member) {
                var memberHTML = "\n                <div class=\"members__item member\" id=\"" + member.memberId + "\">\n                    <img class=\"member__item member__item--img\" src=\"" + member.memberImg + "\">\n                    <h3 class=\"member__item member__item--name\">" + member.memberName + "</h3>\n                    <i class=\"member__item member__item--delete fas fa-trash\"></i>\n                </div>";
                membersContainer_1.insertAdjacentHTML('beforeend', memberHTML);
            });
        }
        catch (er) {
            console.error(er);
        }
    };
    return MembersPool;
}());
var membersPool = localStorage.getItem('membersPool') ? new MembersPool(JSON.parse(localStorage.getItem('membersPool')).membersPool) : new MembersPool([]);
var RandomGroups = /** @class */ (function () {
    function RandomGroups(randomGroups) {
        this.randomGroups = randomGroups;
    }
    return RandomGroups;
}());
var readURL = function (input) {
    try {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var label = document.querySelector('#add_photo');
                label.setAttribute('alt', "" + e.target.result);
                label.style.backgroundImage = "url(\"" + e.target.result + "\")";
                label.style.backgroundSize = '100% 100%';
                label.innerText = '';
                label.style.padding = '75px';
                return e.target.result;
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
    catch (er) {
        console.error(er);
    }
};
