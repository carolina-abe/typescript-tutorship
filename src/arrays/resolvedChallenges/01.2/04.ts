import { users, purchases } from '../../../arrays/challenges/data'
/**
 * 4. Create a function that returns an array of objects from the type
 * UserWithPurchases (see types/index.ts).
 */


function usersWithPurchases() { 
  var result = users.map(user => {
    var userPurchases = purchases.filter(purchase => {
      if(purchase.userId === user.id) {
        return true
      }

      return false
    })

    var totalAmount = userPurchases.reduce((acc, cur) => {
      var purchaseAmount = acc + cur.amount

      return purchaseAmount
    }, 0)

    return {...user, userPurchases, totalAmount}
  })

  return result
}

var array = usersWithPurchases()

console.dir(array, { depth: null })
{
  id: 1;
  name: 'John';
  birthday: '1998-02-30';
  type: "admin";
  purchases: ['array com as compras desse usuário'];
  purchasesTotalAmount: 1000;
}