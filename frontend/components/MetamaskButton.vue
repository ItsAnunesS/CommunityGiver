<template>
  <div>
    <button v-if="!store.getAddress()" @click="connectMetamask" class="btn m-1 bg-violet-900 hover:bg-violet-800 gap-2 text-white">
      <IconMetamask class="h-5" />
      {{ $t(textMetamask) }}
    </button>
    <div v-else class="dropdown dropdown-end">
      <label tabindex="0" class="btn m-1 bg-violet-900 hover:bg-violet-800 gap-2 text-white">
        <IconMetamask class="h-5" />
        {{ truncateAddress(store.getAddress(), 4) }}
      </label>
      <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-primary rounded-box w-52 text-white">
        <li>
          <NuxtLink :href="localePath('/profile')">
            {{ $t("metamask.profile") }}
          </NuxtLink>
        </li>
        <li>
          <label for="modal-add-project">
            {{ $t("metamask.add") }}
          </label>
        </li>
        <li>
          <button @click="disconnectMetamask">
            {{ $t("metamask.disconnect") }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ethers } from "ethers";
import { useMetamaskStore } from '~/stores/metamask';

const store = useMetamaskStore();

const truncateAddress = (address: string, size: number) => {
  return `${address.substring(0, size)}...${address.substring(address.length - size, address.length)}`;
};

const connectMetamask = async () => {
  if (process.client) {
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
};

let textMetamask = "";
if (process.client) {
  if (window.ethereum == null) {
    textMetamask = "Install Metamask";
  } else {
    textMetamask = "Connect Metamask";
  }
}

const disconnectMetamask = () => {
  store.disconnect();
};
</script>
