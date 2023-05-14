<template>
  <div>
    <ShowProfile v-if="store.getAddress()" />
    <TheLoading v-else />
  </div>
</template>

<script setup lang="ts">
import { ethers } from "ethers";
import { useMetamaskStore } from '~/stores/metamask';

const store = useMetamaskStore();

if (process.client) {
  if (!store.getAddress()) {
    if (window.ethereum == null) {
      window.open("https://metamask.io/download/", "_blank");
    } else {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      store.setAddress(address);

      window.ethereum.on("accountsChanged", (accounts: string[]) => {
        store.setAddress(accounts[0]);
      });

      window.ethereum.on("chainChanged", (chainId: string) => {
        window.location.reload();
      });

      window.ethereum.on("disconnect", (error: { code: number; message: string }) => {
        store.setAddress("");
      });

      window.ethereum.on("connect", (connectInfo: { chainId: string }) => {
        window.location.reload();
      });

      window.ethereum.on("networkChanged", (networkId: string) => {
        window.location.reload();
      });

      window.ethereum.on("message", (message: any) => {
        console.log(message);
      });

      window.ethereum.on("error", (error: { code: number; message: string }) => {
        console.log(error);
      });

      window.ethereum.on("close", (code: number, reason: string) => {
        console.log(code, reason);
      });

      window.ethereum.on("open", () => {
        console.log("open");
      });

    }
  }
}
</script>
