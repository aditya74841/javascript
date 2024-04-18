const accountId = 144553

let accountmEmail = "aditya@gmail.com"

var accountPassword = "12345"

accountCity = "Jaipur"

let accountState

// accountId =12 //Not allowed

accountmEmail = "adi@gmail.com"

accountPassword = "15"
accountCity = "Mahua"
console.log(accountId);

/*
 Prefer not to use var
 because of issue in block scope and functional scope
*/




console.table([accountId, accountmEmail, accountPassword, accountCity, accountState
])

/*

console.table Output
┌─────────┬─────────────────┐
│ (index) │ Values          │
├─────────┼─────────────────┤
│ 0       │ 144553          │
│ 1       │ 'adi@gmail.com' │
│ 2       │ '15'            │
│ 3       │ 'Mahua'         │
│ 4       │ undefined       │
└─────────┴─────────────────┘

*/
