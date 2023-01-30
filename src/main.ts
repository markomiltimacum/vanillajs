// styles
import './style.css';

// functions
import {
	configureMainWagmi,
	setupConnect,
	watchAccountSetup,
	setupDisconnect,
	create
} from './functions';

const { ethers } = import("ethers");

// HTML part

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /* html */ `
  <div>
		<button id='connectBtn'>Connect</button>
		<button id='disconnectBtn'>Disconnect</button>

		<div id="placerAddress">
			<div id='address'></div>
		</div>

<div id="container">
		<form id="inputArea" onsubmit="return false">
			<div>
				<label>Name</label>
				<input id="namefield" type="text" value="" onchange="(this.value)"/><br></br>
				
				<label>Color</label>
				<input id="colorfield" type="text" value="" onchange="(this.value)"/><br></br>
				
				<label>Year</label>
				<input id="yearfield" type="number" value="" onchange="(this.value)"/><br></br>
			</div>   

			<div id="checkDiv">
						Registered: <br> <input type="checkbox"  id="myCheck" />
						<button id='enabled' >Create car</button> 
						<button id='disabled'>Create car</button> 
			</div>

			<div id="textWhileCreating"></div>
		</form>
		
</div>

<p id="countHolder">Total number of cars: loading </p>

</div> 
`;

// JS part
configureMainWagmi();
watchAccountSetup(
	document.querySelector<HTMLButtonElement>('#connectBtn')!,
	document.querySelector<HTMLButtonElement>('#disconnectBtn')!,
	document.querySelector<HTMLDivElement>('#address')!,
	document.querySelector<HTMLButtonElement>('#enabled')!,
	document.querySelector<HTMLButtonElement>('#disabled')!,
	document.querySelector<HTMLInputElement>('#myChecked')!,
	
);
setupConnect(document.querySelector<HTMLButtonElement>('#connectBtn')!);
setupDisconnect(document.querySelector<HTMLButtonElement>('#disconnectBtn')!);
create(document.querySelector<HTMLButtonElement>('#enabled')!);

