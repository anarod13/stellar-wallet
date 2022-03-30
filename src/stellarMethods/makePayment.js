import { Server, Keypair, NotFoundError, TransactionBuilder, BASE_FEE, Networks, Operation, Asset, Memo } from "stellar-sdk";
const server = new Server("https://horizon-testnet.stellar.org");

/**
 * @param {string} destinationId
 * 
 */
export  const makePayment=  (secretKey,destinationId,amount)=>{

const sourceKeys = Keypair.fromSecret(
  secretKey
);
let  transaction;


server
  .loadAccount(destinationId)

  .catch(function (error) {
    if (error instanceof NotFoundError) {
      throw new Error("The destination account does not exist!");
      
    } else return error;

  })
  .then(function () {
    return server.loadAccount(sourceKeys.publicKey());
  })
  .then(function (sourceAccount) {
    transaction = new TransactionBuilder(sourceAccount, {
      fee: BASE_FEE,
      networkPassphrase: Networks.TESTNET,
    })
      .addOperation(
        Operation.payment({
          destination: destinationId,
          asset: Asset.native(),
          amount: String(amount),
        }),
      )
      .addMemo(Memo.text("Test Transaction"))
      .setTimeout(180)
      .build();
    transaction.sign(sourceKeys);
    return server.submitTransaction(transaction);
  })
  .then(function (result) {

    alert(`You've sucessufully sent ${amount}\n Operation hash: ${result.hash}`);
  })
  .catch(function (error) {
    alert(`Something went wrong!,\n ${error}`);
    
  });
}