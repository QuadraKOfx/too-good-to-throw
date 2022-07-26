import * as Network from 'expo-network';

export async function _fetchPublishableKey() {
    try {
        // const response = await fetch(`${API_URL}config`);
        // const {publishableKey} = await response.json();
        return Network.getIpAddressAsync();
    } catch (error) {
        alert(error.message);
        // console.error('Unable to fetch publishableKey. Is your server running?')
    }
}

export async function fetchPublishableKey() {
    return process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
}
