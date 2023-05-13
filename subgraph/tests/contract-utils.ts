import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Approval,
  DelegateChanged,
  DelegateVotesChanged,
  PlatformFeeInfoUpdated,
  PrimarySaleRecipientUpdated,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  TokensMinted,
  TokensMintedWithSignature,
  Transfer
} from "../generated/Contract/Contract"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createDelegateChangedEvent(
  delegator: Address,
  fromDelegate: Address,
  toDelegate: Address
): DelegateChanged {
  let delegateChangedEvent = changetype<DelegateChanged>(newMockEvent())

  delegateChangedEvent.parameters = new Array()

  delegateChangedEvent.parameters.push(
    new ethereum.EventParam("delegator", ethereum.Value.fromAddress(delegator))
  )
  delegateChangedEvent.parameters.push(
    new ethereum.EventParam(
      "fromDelegate",
      ethereum.Value.fromAddress(fromDelegate)
    )
  )
  delegateChangedEvent.parameters.push(
    new ethereum.EventParam(
      "toDelegate",
      ethereum.Value.fromAddress(toDelegate)
    )
  )

  return delegateChangedEvent
}

export function createDelegateVotesChangedEvent(
  delegate: Address,
  previousBalance: BigInt,
  newBalance: BigInt
): DelegateVotesChanged {
  let delegateVotesChangedEvent = changetype<DelegateVotesChanged>(
    newMockEvent()
  )

  delegateVotesChangedEvent.parameters = new Array()

  delegateVotesChangedEvent.parameters.push(
    new ethereum.EventParam("delegate", ethereum.Value.fromAddress(delegate))
  )
  delegateVotesChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousBalance",
      ethereum.Value.fromUnsignedBigInt(previousBalance)
    )
  )
  delegateVotesChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newBalance",
      ethereum.Value.fromUnsignedBigInt(newBalance)
    )
  )

  return delegateVotesChangedEvent
}

export function createPlatformFeeInfoUpdatedEvent(
  platformFeeRecipient: Address,
  platformFeeBps: BigInt
): PlatformFeeInfoUpdated {
  let platformFeeInfoUpdatedEvent = changetype<PlatformFeeInfoUpdated>(
    newMockEvent()
  )

  platformFeeInfoUpdatedEvent.parameters = new Array()

  platformFeeInfoUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "platformFeeRecipient",
      ethereum.Value.fromAddress(platformFeeRecipient)
    )
  )
  platformFeeInfoUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "platformFeeBps",
      ethereum.Value.fromUnsignedBigInt(platformFeeBps)
    )
  )

  return platformFeeInfoUpdatedEvent
}

export function createPrimarySaleRecipientUpdatedEvent(
  recipient: Address
): PrimarySaleRecipientUpdated {
  let primarySaleRecipientUpdatedEvent = changetype<
    PrimarySaleRecipientUpdated
  >(newMockEvent())

  primarySaleRecipientUpdatedEvent.parameters = new Array()

  primarySaleRecipientUpdatedEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )

  return primarySaleRecipientUpdatedEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createTokensMintedEvent(
  mintedTo: Address,
  quantityMinted: BigInt
): TokensMinted {
  let tokensMintedEvent = changetype<TokensMinted>(newMockEvent())

  tokensMintedEvent.parameters = new Array()

  tokensMintedEvent.parameters.push(
    new ethereum.EventParam("mintedTo", ethereum.Value.fromAddress(mintedTo))
  )
  tokensMintedEvent.parameters.push(
    new ethereum.EventParam(
      "quantityMinted",
      ethereum.Value.fromUnsignedBigInt(quantityMinted)
    )
  )

  return tokensMintedEvent
}

export function createTokensMintedWithSignatureEvent(
  signer: Address,
  mintedTo: Address,
  mintRequest: ethereum.Tuple
): TokensMintedWithSignature {
  let tokensMintedWithSignatureEvent = changetype<TokensMintedWithSignature>(
    newMockEvent()
  )

  tokensMintedWithSignatureEvent.parameters = new Array()

  tokensMintedWithSignatureEvent.parameters.push(
    new ethereum.EventParam("signer", ethereum.Value.fromAddress(signer))
  )
  tokensMintedWithSignatureEvent.parameters.push(
    new ethereum.EventParam("mintedTo", ethereum.Value.fromAddress(mintedTo))
  )
  tokensMintedWithSignatureEvent.parameters.push(
    new ethereum.EventParam(
      "mintRequest",
      ethereum.Value.fromTuple(mintRequest)
    )
  )

  return tokensMintedWithSignatureEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}
