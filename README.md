# @indoor-fish/shared-libs

Shared TypeScript types, error classes, and constants used across all indoor-fish platform services.

## Contents

### Types
- `UserDTO`, `UserRole` — user identity and roles
- `OrderDTO`, `OrderStatus`, `OrderLineItem` — order lifecycle
- `PaymentDTO`, `PaymentStatus`, `RefundDTO` — payment states
- `ProductDTO`, `InventoryDTO`, `PricingRuleDTO` — catalog data
- `NotificationPayload`, `NotificationChannel` — notification contracts

### Errors
- `AppError` — base error with `code`, `message`, `httpStatus`
- `NotFoundError`, `ValidationError`, `UnauthorizedError`, `ForbiddenError`, `ConflictError`

### Constants
- `MESSAGE_TOPICS` — event topic strings: `order.created`, `payment.processed`, etc.
- `SERVICE_URLS` — env-configured service endpoint map

## Usage

```typescript
import { UserDTO, UserRole, MESSAGE_TOPICS, SERVICE_URLS, NotFoundError } from '@indoor-fish/shared-libs';
```

## Dependencies
None. This package has zero runtime dependencies.
# test
# test 2
# test 3
# test 4
# test 5
# accuracy test trigger
# reindex
