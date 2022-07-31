import * as Network from 'expo-network';

export async function _fetchPublishableKey(): Promise<any> {
    try {
        // const response = await fetch(`${API_URL}config`);
        // const {publishableKey} = await response.json();
        return Network.getIpAddressAsync();
    } catch (error) {
        alert(error.message);
        // console.error('Unable to fetch publishableKey. Is your server running?')
    }
}

