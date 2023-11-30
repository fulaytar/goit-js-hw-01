function makeTransaction(quantity, pricePerDroid) {
    const totalPrice =quantity*pricePerDroid;
    const result =`You ordered ${quantity} droids worth ${totalPrice} credits!`;
    return result;
}