// space  - O(n)
// insert - O(1)
// lookup - O(1)
// delete - O(1)

// PROS:
// - fast lookups (good colision resolution needed)
// - fast inserts
// - flexible keys

// CONS:
// - unordered
// - slow key iteration

const firstRecurringCharacter = (list) => {
    const existingCharacters = {};
    for (c of list) {
        // console.log(c);
        // console.log(existingCharacters)
        if (c in existingCharacters) {
            return c;
        } else {
            existingCharacters[c] = true;
        }
    }
}

const l = [2,1,5,2,3,4,1,5,2];

console.log(firstRecurringCharacter(l));