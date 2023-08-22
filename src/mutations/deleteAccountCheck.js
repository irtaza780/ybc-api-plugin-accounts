// import { decodeAccountOpaqueId } from "../xforms/id.js";
import ReactionError from "@reactioncommerce/reaction-error";

export default async function deleteAccountCheck(context, input) {
  const {
    appEvents,
    collections: { Accounts, AccountInvites },
    simpleSchemas: { Account: AccountSchema },
    userId: authUserId,
  } = context;
  const { userId } = input;

  console.log("delete account check function");
  // const decodedAccountId = decodeAccountOpaqueId(accountId);

  let checkedAccount = await Accounts.findOne({
    userId,
  });

  console.log("checkedAccount query response is ", checkedAccount);

  if (checkedAccount?.isDeleted) {
    throw new ReactionError(
      "not-found",
      "User doesn't exist or is already deleted"
    );
  }

  return true;
}
