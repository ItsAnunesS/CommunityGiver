<template>
  <nav class="bg-base-100 border-b-2 sticky top-0">
    <div class="navbar container mx-auto">
      <div class="navbar-start">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <a class="btn btn-ghost btn-circle normal-case text-xl hidden lg:flex">
          <IconCG class="h-12 w-full mx-auto my-auto" />
        </a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li><a>Item 1</a></li>
          <li tabindex="0">
            <a>
              Parent
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
            </a>
            <ul class="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <div class="navbar-end">
        <button v-if="!store.getAddress()" @click="connectMetamask" class="btn gap-2">
          <IconMetamask class="h-5" />
          {{ $t(textMetamask) }}
        </button>
        <button v-else class="btn gap-2">
          <IconMetamask class="h-5" />
          {{ truncateAddress(store.getAddress(), 4) }}
        </button>
      </div>
    </div>
  </nav>
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
</script>
