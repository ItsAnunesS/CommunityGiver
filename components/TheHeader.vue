<template>
  <nav class="container mx-auto bg-base-100">
    <div class="navbar">
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
        <button @click="connectMetamask" class="btn gap-2">
          <IconMetamask class="h-5" />
          {{ $t(textMetamask) }}
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ethers } from "ethers";
import { useMetamaskStore } from '~/stores/metamask';

const store = useMetamaskStore();

const connectMetamask = async () => {
  if (process.client) {
    if (window.ethereum == null) {
      window.open("https://metamask.io/download/", "_blank");
    } else {
      const provider = new ethers.BrowserProvider(window.ethereum);
      store.setProvider(provider);
      const signer = await provider.getSigner();
      store.setSigner(signer);
      const address = signer.address;
      store.setAddress(address);
      console.log(signer.address);
      textMetamask = signer.address;
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
