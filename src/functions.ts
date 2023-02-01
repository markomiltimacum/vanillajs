import {
	connect,
	prepareWriteContract,
	waitForTransaction,
	createClient,
	writeContract,
	readContract,
	configureChains,
	watchAccount,
	disconnect,
} from '@wagmi/core';
import { InjectedConnector } from '@wagmi/core/connectors/injected';
import { alchemyProvider } from '@wagmi/core/providers/alchemy'
import { goerli } from '@wagmi/core/chains'
import { MetaMaskConnector } from '@wagmi/core/connectors/metaMask'
import { ethers } from "ethers"
import { abiConst } from './abiFile.js';

const connector = new MetaMaskConnector({
  chains: [goerli],
})
// main wagmi configuration setup
export function configureMainWagmi() {
	const { provider, webSocketProvider } = configureChains(
		[goerli],
		[alchemyProvider({ apiKey: 'RGl6ALYLxiuktwSl7e0LbzuNwWM8rZPB' })],
	);

	const client = createClient({
		autoConnect: true,
		provider,
		webSocketProvider,
	});
}

 window.onload= async function carCount () {
const data = await readContract({
	address: '0xcF6eEe13aeeA52ECe57D2174b87c42FF70F0c153',
	abi:abiConst,
	functionName: 'brojAuta',
  })

  document.getElementById("countHolder").innerHTML="Total number of cars: " + data;

}



export async function initialCreate () {
					
					try {
					document.getElementById("textWhileCreating").innerHTML="Creating...";
					document.getElementById("enabled").style.backgroundColor= '#B7B7B7';
					document.getElementById("enabled").disabled = true;
					
					let registered;

					if (document.getElementById("myCheck").checked){
						registered = true;
					}
					
					else {
						registered = false;
					}

					let name=document.getElementById("namefield").value;
					let color=document.getElementById("colorfield").value;
					let year=document.getElementById("yearfield").value;

					const config  = await prepareWriteContract({
					address: '0xcF6eEe13aeeA52ECe57D2174b87c42FF70F0c153',
					abi:abiConst,
					functionName: 'createCar',
					args:[name,color,year, registered],
					overrides: {
					value: ethers.utils.parseEther('0.01'),
							},
					})
					
					const { hash } = await writeContract(config);
					const txHash = await waitForTransaction({
						hash })
					
					if(txHash){

					let formReset = document.getElementById("inputArea");
					formReset.reset();

					document.getElementById("enabled").style.backgroundColor= '#000000';
					document.getElementById("textWhileCreating").innerHTML="Successfully created new car";
					document.getElementById("textWhileCreating").style.color = '#1C872D';
					document.getElementById("enabled").style.backgroundColor= '#000000';
					document.getElementById("enabled").disabled = false;

					const newCount = await readContract({
						address: '0xcF6eEe13aeeA52ECe57D2174b87c42FF70F0c153',
						abi:abiConst,
						functionName: 'brojAuta',
					})

					document.getElementById("countHolder").innerHTML="Total number of cars: " + newCount;
					}

		} catch (error) {
			document.getElementById("textWhileCreating").innerHTML="Error creating new car";
			document.getElementById("textWhileCreating").style.color = '#FF0000';
			document.getElementById("enabled").style.color = '#FFFFFF';
			document.getElementById("enabled").disabled = false;
			document.getElementById("enabled").style.backgroundColor= '#000000';
			}
		}

export function setupConnect(element: HTMLButtonElement) {
	element.addEventListener('click', () => connectWallet());
}

export function setupDisconnect(element: HTMLButtonElement) {
	element.addEventListener('click', () => disconnect());
}

export function create(element: HTMLButtonElement) {
	element.addEventListener('click', () => initialCreate());
}

export async function connectWallet() {
	try {
				const result = await connect({
					connector: new InjectedConnector(),
				});
				console.log(result);
				return result;
	} catch (error) {
				console.log(error);
	}
}

export function watchAccountSetup(
	connectElement: HTMLButtonElement,
	disconnectElement: HTMLButtonElement,
	addressElement: HTMLDivElement,
	enabledcreate: HTMLButtonElement,
	disabledcreate: HTMLButtonElement,
) {
	// setup event listener for account changes
	const unwatch = watchAccount(
		({ address, isConnected}) => {
			// hide and show buttons depending on connected state
			if (isConnected) {
				connectElement.style.display = 'none';
				disconnectElement.style.display = 'block';

				enabledcreate.style.display = 'block';
				disabledcreate.style.display = 'none';
			} else {
				connectElement.style.display = 'block';
				disconnectElement.style.display = 'none';

				enabledcreate.style.display = 'none';
				disabledcreate.style.display = 'block';
			}
			addressElement.innerHTML = `${address ? 'Public address:  ' + address : 'Public address: undefined'}`;

		}
	);
}