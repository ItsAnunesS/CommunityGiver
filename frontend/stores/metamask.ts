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

  const getAddress = () => {
    return address.value;
  };

  const setProvider = (newProvider: any) => {
    provider.value = newProvider;
  };

  const getProvider = () => {
    return provider.value;
  };

  return { setProvider, setSigner, setAddress, getProvider, getSigner, getAddress };
});
