// styles
import './style.css';

// functions
import {
	configureMainWagmi,
	setupConnect,
	watchAccountSetup,
	setupDisconnect,
	create,
	ness
} from './functions';

const { ethers } = import("ethers");

// HTML part

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /* html */ `
  <div>
	
		<button id='connectBtn'>Connect</button>
		<button id='disconnectBtn'>Disconnect</button>

	<div id="p">
		<div id='address'></div>
</div>

<div id="container">
    
<form id="forma" onsubmit="return false">
	 <div id="polje">
		   <label for="imes">Name</label>
		   <input id="ime1" type="text" value="" onchange="(this.value)"/><br></br>
		  
		   <label for="color">Color</label>
		   <input id="ime2" type="text" value="" onchange="(this.value)"/><br></br>
		  
		   <label for="number">Year</label>
		   <input id="ime3" type="number" value="" onchange="(this.value)"/><br></br>
	 </div>   

			<div id="checkdiv">
						Registered: <br> <input type="checkbox"  id="myCheck" />
						
						<button id='enabled' >Create car</button> 
						<button id='disabled'>Create car</button> 
			</div>

				<div id="creatin">
				
				</div>


	</form>
			
	</div>
	<p id="pisi">Total number of cars: loading </p>
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


