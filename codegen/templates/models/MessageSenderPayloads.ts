import { MessageSenderForgottenPasswordPayload } from './MessageSenderForgottenPasswordPayload'
import { MessageType } from './MessageType'
import { MessageSenderNewUserInvitationPayload } from './MessageSenderNewUserInvitationPayload'
import { MessageSenderOrderApprovedPayload } from './MessageSenderOrderApprovedPayload'
import { MessageSenderOrderDeclinedPayload } from './MessageSenderOrderDeclinedPayload'
import { MessageSenderOrderSubmittedForApprovalPayload } from './MessageSenderOrderSubmittedForApprovalPayload'
import { MessageSenderOrderSubmittedForYourApprovalHasBeenApprovedPayload } from './MessageSenderOrderSubmittedForYourApprovalHasBeenApprovedPayload'
import { MessageSenderOrderSubmittedForYourApprovalHasBeenDeclinedPayload } from './MessageSenderOrderSubmittedForYourApprovalHasBeenDeclinedPayload'
import { MessageSenderOrderSubmittedForYourApprovalPayload } from './MessageSenderOrderSubmittedForYourApprovalPayload'
import { MessageSenderOrderSubmittedPayload } from './MessageSenderOrderSubmittedPayload'
import { MessageSenderShipmentCreatedPayload } from './MessageSenderShipmentCreatedPayload'
import { MessageSenderOrderReturnDeclinedPayload } from './MessageSenderOrderReturnDeclinedPayload'
import { MessageSenderOrderReturnSubmittedPayload } from './MessageSenderOrderReturnSubmittedPayload'
import { MessageSenderOrderReturnSubmittedForYourApprovalPayload } from './MessageSenderOrderReturnSubmittedForYourApprovalPayload'
import { MessageSenderOrderReturnApprovedPayload } from './MessageSenderOrderReturnApprovedPayload'
import { MessageSenderOrderReturnSubmittedForYourApprovalHasBeenApprovedPayload } from './MessageSenderOrderReturnSubmittedForYourApprovalHasBeenApprovedPayload'
import { MessageSenderOrderReturnSubmittedForYourApprovalHasBeenDeclinedPayload } from './MessageSenderOrderReturnSubmittedForYourApprovalHasBeenDeclinedPayload'
import { MessageSenderOrderReturnCompletedPayload } from './MessageSenderOrderReturnCompletedPayload'
import { MessageSenderOrderReturnSubmittedForApprovalPayload } from './MessageSenderOrderReturnSubmittedForApprovalPayload'

export type MessageSenderPayloads<
  TMessageType extends MessageType
> = PayloadMap[TMessageType]

interface PayloadMap {
  'NewUserInvitation': MessageSenderNewUserInvitationPayload
  'ForgottenPassword': MessageSenderForgottenPasswordPayload
  'OrderSubmitted': MessageSenderOrderSubmittedPayload
  'OrderSubmittedForApproval': MessageSenderOrderSubmittedForApprovalPayload
  'OrderApproved': MessageSenderOrderApprovedPayload
  'OrderDeclined': MessageSenderOrderDeclinedPayload
  'OrderSubmittedForYourApproval': MessageSenderOrderSubmittedForYourApprovalPayload
  'OrderSubmittedForYourApprovalHasBeenApproved': MessageSenderOrderSubmittedForYourApprovalHasBeenApprovedPayload
  'OrderSubmittedForYourApprovalHasBeenDeclined': MessageSenderOrderSubmittedForYourApprovalHasBeenDeclinedPayload
  'ShipmentCreated': MessageSenderShipmentCreatedPayload
  'OrderReturnDeclined': MessageSenderOrderReturnDeclinedPayload
  'OrderReturnSubmitted': MessageSenderOrderReturnSubmittedPayload
  'OrderReturnSubmittedForYourApproval': MessageSenderOrderReturnSubmittedForYourApprovalPayload
  'OrderReturnSubmittedForApproval': MessageSenderOrderReturnSubmittedForApprovalPayload
  'OrderReturnApproved': MessageSenderOrderReturnApprovedPayload
  'OrderReturnSubmittedForYourApprovalHasBeenApproved': MessageSenderOrderReturnSubmittedForYourApprovalHasBeenApprovedPayload
  'OrderReturnSubmittedForYourApprovalHasBeenDeclined': MessageSenderOrderReturnSubmittedForYourApprovalHasBeenDeclinedPayload
  'OrderReturnCompleted': MessageSenderOrderReturnCompletedPayload
}
