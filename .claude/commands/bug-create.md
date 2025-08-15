# /bug-create

Document a bug in the restaurant system.

## Usage
```
/bug-create [bug-id] "[description]"
```

## Example
```
/bug-create payment-timeout "Payment gateway times out during peak hours"
```

## Process

1. **Gather Information**
   - Reproduction steps
   - Expected vs actual behavior
   - Environment details
   - Error messages/logs
   - Screenshots if applicable

2. **Analyze Impact**
   - Affected users/components
   - Business impact
   - Severity assessment
   - Priority determination

3. **Initial Investigation**
   - Check recent changes
   - Review error logs
   - Examine related code
   - Identify potential causes

4. **Document Bug**
   - Create bug report using template
   - Include all gathered information
   - Add investigation findings
   - Suggest initial fix approach

5. **Output**
   - `.claude/bugs/[bug-id]/report.md`

## Bug Categories

### Restaurant-Specific
- **Menu Issues**: Item availability, pricing, display
- **Order Issues**: Cart, checkout, payment processing
- **Kitchen Issues**: Order queue, preparation status
- **Delivery Issues**: Tracking, notifications, delays
- **Customer Issues**: Login, profile, preferences

### Technical
- **Frontend**: UI glitches, responsive issues
- **Backend**: API errors, data inconsistencies
- **Performance**: Slow loading, timeouts
- **Security**: Authentication, authorization
- **Integration**: Third-party service failures

## Severity Levels

- **Critical (P0)**: System down, data loss, security breach
- **High (P1)**: Major feature broken, payment issues
- **Medium (P2)**: Feature partially working, workaround exists
- **Low (P3)**: Minor issues, cosmetic problems

## Required Information

### Minimum Requirements
- Steps to reproduce
- Expected behavior
- Actual behavior
- Browser/device info
- User type affected

### Preferred Additional Info
- Screenshots/recordings
- Console errors
- Network requests
- Time of occurrence
- Frequency of issue