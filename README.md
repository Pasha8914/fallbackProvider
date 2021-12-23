# FallbackProvider doesn't work for the `call` method.

### Expected behavior:
The **low-priority provider** will repeat the request when fetching a network error from the **high-priority** provider.

### Current behavior:
The request `call` method of the low-priority provider, is not executed. The function terminates with the error: missing revert data in call exception, but for the `estimateGas` method the provider is working correctly.

### Reproduction steps
- `git clone git@github.com:Pasha8914/fallbackProvider.git`
- `yarn` 
- `yarn go`
- look at console

### Environment:
node version *v14.16.1* \
ethers version *5.5.2*
