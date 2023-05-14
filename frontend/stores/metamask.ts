import { defineStore } from 'pinia';

export const useMetamaskStore = defineStore('metamask', () => {
  const signer = ref(null);
  const address = ref("");
  const provider = ref(null);

  const setSigner = (newSigner: any) => {
    signer.value = newSigner;
  };

  const getSigner = () => {
    return signer.value;
  };

  const setAddress = (newAddress: any) => {
    address.value = newAddress;
  };

  const getAddress = (truncate: boolean = false) => {
    const storeAddress = address.value;
    return truncate ? `${storeAddress.substring(0, 4)}...${storeAddress.substring(storeAddress.length - 4, storeAddress.length)}` : storeAddress;
  };

  const setProvider = (newProvider: any) => {
    provider.value = newProvider;
  };

  const getProvider = () => {
    return provider.value;
  };

  const disconnect = () => {
    signer.value = null;
    address.value = "";
    provider.value = null;
  };

  return { setProvider, setSigner, setAddress, getProvider, getSigner, getAddress, disconnect };
});
