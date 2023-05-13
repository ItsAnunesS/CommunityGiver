<template>
  <div>
    <TheHero />
    <ProjectsList />
  </div>
</template>

<script setup lang="ts">
import { useMetamaskStore } from '~/stores/metamask';
// import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";
import { BigNumber } from 'ethers';

const store = await useMetamaskStore();
const tokens = ref<number | string | BigNumber>(0);

const fetchTokens = () => {
  if (process.client) {
    const runtimeConfig = useRuntimeConfig();

    // TODO: Integrate with SDK
    // const sdk = new ThirdwebSDK("goerli");
    // sdk.getContract(runtimeConfig.contractAddress)
    // .then((contract) => {
    //   return contract.erc20.balanceOf(store.getAddress());
    // })
    // .then((balance) => {
    //   tokens.value = balance.value;
    // });
  }
};
</script>
