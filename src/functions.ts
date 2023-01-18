import {
	createClient,
	configureChains,
	watchAccount,
	disconnect,
} from '@wagmi/core';
import { connect } from '@wagmi/core';
import { InjectedConnector } from '@wagmi/core/connectors/injected';
import { alchemyProvider } from '@wagmi/core/providers/alchemy'
import { mainnet, goerli } from '@wagmi/core/chains'
import { MetaMaskConnector } from '@wagmi/core/connectors/metaMask'
import { mainnet, optimism, polygon } from '@wagmi/core/chains'
import { MetaMaskConnector } from '@wagmi/core/connectors/metaMask'
import { prepareWriteContract, writeContract } from '@wagmi/core'
import { writeContract } from '@wagmi/core'
import { ethers } from "ethers"
import { readContract } from '@wagmi/core'
import { waitForTransaction } from '@wagmi/core'
 



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


 window.onload= async function br () {
const data = await readContract({
	address: '0xcF6eEe13aeeA52ECe57D2174b87c42FF70F0c153',
	abi: [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"brojAuta","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"carowner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"cars","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"color","type":"string"},{"internalType":"uint256","name":"year","type":"uint256"},{"internalType":"bool","name":"registered","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_color","type":"string"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"_year","type":"uint256"},{"internalType":"bool","name":"reg","type":"bool"}],"name":"createCar","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"_color","type":"string"}],"name":"menjajBoju","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"proveriAuto","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"registerCar","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}],
	functionName: 'brojAuta',
  })

  console.log("Broj auta test  " + data); 

  document.getElementById("pisi").innerHTML="Total number of cars: " + data;

}


export async function ness () {
	
	try {
	document.getElementById("creatin").innerHTML="Creating...";

	document.getElementById("enabled").style.backgroundColor= '#B7B7B7';
	document.getElementById("enabled").disabled = true;
	
	

let reg;

	if (document.getElementById("myCheck").checked){
			reg = true;
	}
	
	else {
			reg = false;
	}

	console.log(reg);

	let nom=document.getElementById("ime1").value;
	console.log(nom);

	let boj=document.getElementById("ime2").value;
	console.log(boj);

	let godina=document.getElementById("ime3").value;
	console.log(godina);




const config  = await prepareWriteContract({
	// mode: 'recklesslyUnprepared',
	address: '0xcF6eEe13aeeA52ECe57D2174b87c42FF70F0c153',
	abi: [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"brojAuta","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"carowner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"cars","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"color","type":"string"},{"internalType":"uint256","name":"year","type":"uint256"},{"internalType":"bool","name":"registered","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_color","type":"string"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"_year","type":"uint256"},{"internalType":"bool","name":"reg","type":"bool"}],"name":"createCar","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"_color","type":"string"}],"name":"menjajBoju","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"proveriAuto","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"registerCar","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}],
	functionName: 'createCar',
	args:[nom,boj,godina, reg],

	overrides: {
	value: ethers.utils.parseEther('0.01'),
			},
})
	
	const { hash, data, error, write } = await writeContract(config);
	console.log(hash);
	

	const hashtransakcije = await waitForTransaction({
		hash
	  })

	  if(hashtransakcije){

	var frm = document.getElementById("forma");
	frm.reset();

	
	document.getElementById("enabled").style.backgroundColor= '#000000';
	document.getElementById("creatin").innerHTML="Successfully created new car";
	document.getElementById("creatin").style.color = '#1C872D';
	document.getElementById("enabled").style.backgroundColor= '#000000';
	document.getElementById("enabled").disabled = false;



	const nov = await readContract({
		address: '0xcF6eEe13aeeA52ECe57D2174b87c42FF70F0c153',
		abi: [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"brojAuta","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"carowner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"cars","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"color","type":"string"},{"internalType":"uint256","name":"year","type":"uint256"},{"internalType":"bool","name":"registered","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_color","type":"string"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"_year","type":"uint256"},{"internalType":"bool","name":"reg","type":"bool"}],"name":"createCar","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"_color","type":"string"}],"name":"menjajBoju","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"proveriAuto","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"registerCar","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}],
		functionName: 'brojAuta',
	})

	document.getElementById("pisi").innerHTML="Total number of cars: " + nov;
	  }



	/*console.log(1+parseInt(nov));

	let noviiznos = parseInt(nov)+1;

	console.log("Novi br auta test: " + noviiznos);

	document.getElementById("pisi").innerHTML="Total number of cars: " + noviiznos;*/

	

		} catch (error) {

	document.getElementById("creatin").innerHTML="Error creating new car";
	document.getElementById("creatin").style.color = '#FF0000';
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
	element.addEventListener('click', () => ness());
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
		({ address, isConnected, isConnecting, status }) => {
			// hide and show buttons depending on connected state
			if (isConnected) {
				connectElement.style.display = 'none';
				disconnectElement.style.display = 'block';

				enabledcreate.style.display = 'block';
				disabledcreate.style.display = 'none';
			
				//myCheck.checked = true;
			
			} else {
				connectElement.style.display = 'block';
				disconnectElement.style.display = 'none';

				enabledcreate.style.display = 'none';
				disabledcreate.style.display = 'block';

			//	myCheck.checked = false;
			}


			
			addressElement.innerHTML = `${address ? 'Public address:  ' + address : 'Public address: undefined'}`;
	
		/*

var frm=document.querySelector('#forma');
var elements = frm.elements;
var elemsArr1 = Array.from(elements);
console.log(elemsArr1);*/
	
		}
	);
}

