"use strict";
// Question no # 16     More Guests:
let guest_list1 = ['ali', 'asim', 'atif', 'rizwan'];
let more_guest = ['shan', 'shahnwaz', 'sameer'];
let full_guest = guest_list1.concat(more_guest);
full_guest.push('shahzad'); // guest add by push method
full_guest.unshift('ali hyder'); // guest added by unshift method
for (let guest of full_guest) {
    console.log(`you are invited please attend this event ${guest}`);
}
