var RandomGroups = /** @class */ (function () {
    function RandomGroups(randomGroups) {
        this.randomGroups = randomGroups;
    }
    RandomGroups.prototype.renderGroups = function () {
        try {
            var groupsContainer_1 = document.querySelector(".groups");
            groupsContainer_1.innerHTML = "";
            var i_1 = 0;
            this.randomGroups.forEach(function (group) {
                i_1++;
                var groupHTML = "<div class=\"groups__item group\" id=\"group_" + i_1 + "\">";
                group.forEach(function (member) {
                    var memberHTML = "\n                    <div class=\"group__item member\">\n                        <img class=\"member__item member__item--img\" src=\"" + member.memberImg + "\">\n                        <h3 class=\"member__item member__item--name\">" + member.memberName + "</h3>\n                    </div>";
                    groupHTML += memberHTML;
                });
                groupHTML += "</div>";
                groupsContainer_1.insertAdjacentHTML('beforeend', groupHTML);
            });
        }
        catch (er) {
            console.error(er);
        }
    };
    return RandomGroups;
}());
var randomGroups = new RandomGroups(JSON.parse(localStorage.getItem('randomGroups')).randomGroups);
