export default async function deleteAccountCheck(_, { input }, context) {
  console.log("Input is ", input);
  const { userId } = input;

  console.log("user id is ", userId);
  // console.log("in check account mutation call ", decodedAccountId);

  const checkedAccount = await context.mutations.deleteAccountCheck(context, {
    userId,
  });

  console.log("Response checkedAccount is ", checkedAccount);

  return checkedAccount;
}
