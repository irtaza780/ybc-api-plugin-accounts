export default async function validStripeConnect(account, args, context) {
  const { StripeConnectAccount } = context.collections;

  const check = await StripeConnectAccount.findOne({
    userId: account?._id,
  });

  if (check?.payoutsEnabled === true) {
    return true;
  } else {
    return false;
  }
}
