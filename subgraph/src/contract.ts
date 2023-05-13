import {
  Approval as ApprovalEvent,
  DelegateChanged as DelegateChangedEvent,
  DelegateVotesChanged as DelegateVotesChangedEvent,
  PlatformFeeInfoUpdated as PlatformFeeInfoUpdatedEvent,
  PrimarySaleRecipientUpdated as PrimarySaleRecipientUpdatedEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  TokensMinted as TokensMintedEvent,
  TokensMintedWithSignature as TokensMintedWithSignatureEvent,
  Transfer as TransferEvent
} from "../generated/Contract/Contract"
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
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDelegateChanged(event: DelegateChangedEvent): void {
  let entity = new DelegateChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.delegator = event.params.delegator
  entity.fromDelegate = event.params.fromDelegate
  entity.toDelegate = event.params.toDelegate

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDelegateVotesChanged(
  event: DelegateVotesChangedEvent
): void {
  let entity = new DelegateVotesChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.delegate = event.params.delegate
  entity.previousBalance = event.params.previousBalance
  entity.newBalance = event.params.newBalance

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePlatformFeeInfoUpdated(
  event: PlatformFeeInfoUpdatedEvent
): void {
  let entity = new PlatformFeeInfoUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.platformFeeRecipient = event.params.platformFeeRecipient
  entity.platformFeeBps = event.params.platformFeeBps

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePrimarySaleRecipientUpdated(
  event: PrimarySaleRecipientUpdatedEvent
): void {
  let entity = new PrimarySaleRecipientUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.recipient = event.params.recipient

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokensMinted(event: TokensMintedEvent): void {
  let entity = new TokensMinted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.mintedTo = event.params.mintedTo
  entity.quantityMinted = event.params.quantityMinted

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokensMintedWithSignature(
  event: TokensMintedWithSignatureEvent
): void {
  let entity = new TokensMintedWithSignature(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.signer = event.params.signer
  entity.mintedTo = event.params.mintedTo
  entity.mintRequest_to = event.params.mintRequest.to
  entity.mintRequest_primarySaleRecipient =
    event.params.mintRequest.primarySaleRecipient
  entity.mintRequest_quantity = event.params.mintRequest.quantity
  entity.mintRequest_price = event.params.mintRequest.price
  entity.mintRequest_currency = event.params.mintRequest.currency
  entity.mintRequest_validityStartTimestamp =
    event.params.mintRequest.validityStartTimestamp
  entity.mintRequest_validityEndTimestamp =
    event.params.mintRequest.validityEndTimestamp
  entity.mintRequest_uid = event.params.mintRequest.uid

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
